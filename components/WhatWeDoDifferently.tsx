import React from 'react';
import { useTranslations } from 'next-intl';
import { CheckIcon } from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Highly adapted to provide',
    description: 'Real-time data to different audiences (Investors, Gov., FdR, EU, etc.)',
  },
  {
    name: 'Experienced Management Team',
    description: 'Combined large experience in the distressed assets',
  },
  {
    name: 'Only servicer in Portugal',
    description: 'With experience in complex carve outs & servicing contracts (PT State)',
  },
  {
    name: 'Recognized capacity',
    description: 'For managing complex real estate assets and very special cases of Corporate NPLs',
  },
  {
    name: 'Strong real estate platform',
    description: 'Which manages all type of REOs',
  },
  {
    name: "100% of the AUM's",
    description: 'Are owned by non-related parties',
  },
];

const WhatWeDoDifferently = () => {
  const t = useTranslations('whatWeDo');

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div className="col-span-2">
            <h2 className="text-base font-semibold leading-7 text-primary">What we do differently</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              360° service that covers all phases
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              StellarVest Asset Management specialises in the management of complex assets. 
              With a strategic and innovative approach, we stand out for our capacity for analysis, 
              strategic development, sales and after-sales.
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