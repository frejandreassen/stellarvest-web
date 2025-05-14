'use client'
import { useTranslations } from 'next-intl';
import { EnvelopeIcon, PhoneIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline'
import MapComponent from './Map';

export default function Contact() {
  const t = useTranslations('contact');
  
  const lisbonLocation = { lat: 38.7470753410278, lng: -9.147653390171962 };
  const portoLocation = { lat: 41.17106201251337, lng: -8.642406436590408 };

  return (
    <div className="bg-white py-24 sm:py-32" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">{t('title')}</h2>
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
          <div className="pt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
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
              <div className="mt-4 h-96">
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
              <div className="mt-4 h-96">
                <MapComponent center={portoLocation} zoom={15} height="100%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}