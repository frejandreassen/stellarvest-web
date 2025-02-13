import React from 'react';
import { useTranslations } from 'next-intl';
import { CheckIcon } from 'lucide-react';

const WhatWeDoDifferently = () => {
  const t = useTranslations('whatWeDo');

  const features = [
    {
      name: t('features.realTime.name'),
      description: t('features.realTime.description'),
    },
    {
      name: t('features.management.name'),
      description: t('features.management.description'),
    },
    {
      name: t('features.servicer.name'),
      description: t('features.servicer.description'),
    },
    {
      name: t('features.capacity.name'),
      description: t('features.capacity.description'),
    },
    {
      name: t('features.platform.name'),
      description: t('features.platform.description'),
    },
    {
      name: t('features.aum.name'),
      description: t('features.aum.description'),
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div className="col-span-2">
            <h2 className="text-base font-semibold leading-7 text-primary">
              {t('title')}
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {t('subtitle')}
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              {t('description')}
            </p>
          </div>
          <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CheckIcon
                    className="absolute left-0 top-1 h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoDifferently;