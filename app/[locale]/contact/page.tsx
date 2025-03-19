'use client'

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { EnvelopeIcon, PhoneIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';
import MapComponent from '@/components/Map';

export default function ContactPage() {
  const t = useTranslations('contact');
  const searchParams = useSearchParams();
  const [defaultTeam, setDefaultTeam] = useState('');
  
  const lisbonLocation = { lat: 38.7470753410278, lng: -9.147653390171962 };
  const portoLocation = { lat: 41.17106201251337, lng: -8.642406436590408 };

  useEffect(() => {
    // Get the team parameter from the URL
    const team = searchParams.get('team');
    if (team) {
      setDefaultTeam(team);
    }
  }, [searchParams]);

  return (
    <div>
      <Header />
      <main>
        <div className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{t('title')}</h1>
              {/* <p className="mt-4 text-xl text-gray-600">{t('subtitle')}</p> */}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white pb-12 sm:pb-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl space-y-16 lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">{t('title')}</h2>
                  <p className="mt-4 leading-7 text-gray-600">
                    {t('subtitle')}
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                  <div className="rounded-2xl bg-gray-50 p-10">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">{t('contactUs.title')}</h3>
                    <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                      <div className="mt-1 flex items-center">
                        <dt className="sr-only">Email</dt>
                        <EnvelopeIcon className="h-5 w-5 text-gray-400 mr-2" aria-hidden="true" />
                        <dd>
                          <a href="mailto:info@stellarvest.pt" className="font-semibold text-primary">
                            {t('contactUs.email')}
                          </a>
                        </dd>
                      </div>
                      <div className="mt-1 flex items-center">
                        <dt className="sr-only">Phone number</dt>
                        <PhoneIcon className="h-5 w-5 text-gray-400 mr-2" aria-hidden="true" />
                        <dd>{t('contactUs.phone')}</dd>
                      </div>
                    </dl>
                  </div>
                  <div className="rounded-2xl bg-gray-50 p-10">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">{t('hours.title')}</h3>
                    <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                      <div className="mt-1 flex items-start">
                        <dt className="sr-only">Hours</dt>
                        <ClockIcon className="h-5 w-5 text-gray-400 mr-2 mt-1" aria-hidden="true" />
                        <dd>
                          <p>{t('hours.weekdays')}</p>
                          <p>{t('hours.weekends')}</p>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Maps */}
        <div className="bg-gray-50 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Offices</h2>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">
                    {t('offices.lisbon.title')}
                  </h3>
                  <div className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <div className="flex items-start">
                      <MapPinIcon className="h-5 w-5 text-gray-400 mr-2 mt-1 flex-shrink-0" aria-hidden="true" />
                      <p>{t('offices.lisbon.address')}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 h-80 rounded-xl overflow-hidden">
                  <MapComponent center={lisbonLocation} zoom={15} height="100%" />
                </div>
              </div>
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">
                    {t('offices.porto.title')}
                  </h3>
                  <div className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <div className="flex items-start">
                      <MapPinIcon className="h-5 w-5 text-gray-400 mr-2 mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <p>{t('offices.porto.building')}</p>
                        <p>{t('offices.porto.address')}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 h-80 rounded-xl overflow-hidden">
                  <MapComponent center={portoLocation} zoom={15} height="100%" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm defaultTeam={defaultTeam} />
      </main>
      <Footer />
    </div>
  );
}