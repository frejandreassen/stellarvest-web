import React from 'react';
import { useTranslations } from 'next-intl';
import { HomeIcon, BanknotesIcon, BuildingOfficeIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';


const OurNumbers = () => {
  const t = useTranslations('numbers');

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            {t('description')}
          </p>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
          {/* REOs Sales Card */}
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-primary/10 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
            <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">{t('reos.value')}</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <div className="flex items-center">
                <HomeIcon className="h-6 w-6 text-primary mr-2" />
                <p className="text-lg font-semibold tracking-tight text-gray-900">{t('reos.title')}</p>
              </div>
              <p className="mt-2 text-base leading-7 text-gray-600">{t('since2018')}</p>
            </div>
          </div>

          {/* Collections Card */}
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
            <p className="flex-none text-3xl font-bold tracking-tight text-white">{t('collections.value')}</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <div className="flex items-center">
                <BanknotesIcon className="h-6 w-6 text-white mr-2" />
                <p className="text-lg font-semibold tracking-tight text-white">{t('collections.title')}</p>
              </div>
              <p className="mt-2 text-base leading-7 text-gray-400">{t('since2018')}</p>
            </div>
          </div>

          {/* Assets Management Card */}
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-primary p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
            <div className="space-y-2">
              <p className="flex-none text-3xl font-bold tracking-tight text-white">{t('assetsMgt.aum')}</p>
              <p className="flex-none text-2xl font-bold tracking-tight text-white">{t('assetsMgt.assets')}</p>
            </div>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <div className="flex items-center">
                <BuildingOfficeIcon className="h-6 w-6 text-white mr-2" />
                <p className="text-lg font-semibold tracking-tight text-white">{t('assetsMgt.title')}</p>
              </div>
              <p className="mt-2 text-base leading-7 text-white/80">{t('since2018')}</p>
            </div>
          </div>

          {/* Building Maintenance Card */}
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-primary/10 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
            <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">{t('maintenance.value')}</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <div className="flex items-center">
                <WrenchScrewdriverIcon className="h-6 w-6 text-primary mr-2" />
                <p className="text-lg font-semibold tracking-tight text-gray-900">{t('maintenance.title')}</p>
              </div>
              <p className="mt-2 text-base leading-7 text-gray-600">{t('maintenance.subtitle')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurNumbers;