'use client'

import React, { useState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { submitContact } from '@/app/actions/contact';
import { useTranslations } from 'next-intl';

function SubmitButton() {
  const { pending } = useFormStatus();
  const t = useTranslations('contactForm');

  return (
    <button
      type="submit"
      disabled={pending}
      className={`block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-primary transition-all duration-200
                  ${pending 
          ? 'bg-primary/60 cursor-not-allowed' 
          : 'bg-primary hover:bg-primary/80'
        }`}
    >
      {pending ? (
        <span className="flex items-center justify-center gap-2">
          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {t('form.submitting')}
        </span>
      ) : (
        t('form.submit')
      )}
    </button>
  );
}

export default function ContactForm({ defaultTeam = '' }: { defaultTeam?: string }) {
  const [agreed, setAgreed] = useState(false);
  const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false);
  const [formStatus, setFormStatus] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const t = useTranslations('contactForm');

  const teams = [
    { id: 'management', value: t('form.teamSelect.options.management') },
    { id: 'loans', value: t('form.teamSelect.options.loans') },
    { id: 'realEstate', value: t('form.teamSelect.options.realEstate') },
    { id: 'advisory', value: t('form.teamSelect.options.advisory') },
    { id: 'legal', value: t('form.teamSelect.options.legal') }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js';
      script.async = true;
      script.defer = true;
      script.onload = () => setIsRecaptchaLoaded(true);
      document.head.appendChild(script);

      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, []);

  async function handleSubmit(formData: FormData) {
    try {
      const recaptchaResponse = formData.get('g-recaptcha-response');
      if (!recaptchaResponse) {
        setFormStatus({ message: t('messages.recaptchaError'), type: 'error' });
        return;
      }

      const result = await submitContact(formData);
      
      if (result.success) {
        setFormStatus({ message: t('messages.success'), type: 'success' });
        const form = document.getElementById('contact-form') as HTMLFormElement;
        form.reset();
        setAgreed(false);
        if (typeof window !== 'undefined' && window.grecaptcha) {
          window.grecaptcha.reset();
        }
      } else {
        setFormStatus({ 
          message: result.message || t('messages.error'), 
          type: 'error' 
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus({ 
        message: t('messages.error'), 
        type: 'error' 
      });
    }

    if (formStatus?.type === 'success') {
      setTimeout(() => setFormStatus(null), 5000);
    }
  }

  return (
    <div className="isolate bg-primary/5 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{t('title')}</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">{t('subtitle')}</p>
      </div>

      <form
        id="contact-form"
        action={handleSubmit}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              {t('form.firstName')}
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-text-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              {t('form.lastName')}
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-text-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              {t('form.email')}
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-text-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              {t('form.phone')}
            </label>
            <div className="mt-2.5">
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-text-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="team" className="block text-sm font-semibold leading-6 text-gray-900">
              {t('form.teamSelect.label')}
            </label>
            <div className="mt-2.5">
              <select
                id="team"
                name="team"
                required
                defaultValue={defaultTeam}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-text-primary sm:text-sm sm:leading-6"
              >
                <option value="">{t('form.teamSelect.placeholder')}</option>
                {teams.map((team) => (
                  <option key={team.id} value={team.id}>
                    {team.value}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              {t('form.description')}
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-text-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="flex gap-x-4">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                required
                className="h-4 w-4 rounded border-gray-300 text-text-primary focus:ring-text-primary"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <label htmlFor="terms" className="text-sm leading-6 text-gray-600">
                {t('form.terms')}
              </label>
            </div>
          </div>
          
          <div className="sm:col-span-2">
            <div 
              className="g-recaptcha" 
              data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              data-theme="light"
            />
          </div>
        </div>
        <div className="mt-10">
          {formStatus && (
            <div
              role="alert"
              className={`mb-4 rounded-md p-4 flex items-center justify-center text-sm ${
                formStatus.type === 'success'
                  ? 'bg-green-50 text-green-700 border border-green-200'
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}
            >
              {formStatus.type === 'error' && (
                <svg className="w-5 h-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
              {formStatus.type === 'success' && (
                <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
              <span className="font-medium">{formStatus.message}</span>
            </div>
          )}
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}