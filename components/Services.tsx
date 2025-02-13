'use client'
import { useTranslations } from 'next-intl';
import {
  DocumentTextIcon,
  BuildingOffice2Icon,
  AcademicCapIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

type ServiceItem = {
  id: string;
  icon: React.ElementType;
  href?: string;
};

export default function Services() {
  const t = useTranslations('services');

  const services: ServiceItem[] = [
    {
      id: 'creditRecovery',
      icon: DocumentTextIcon,
      href: '#credit-recovery',
    },
    {
      id: 'realEstateManagement',
      icon: BuildingOffice2Icon,
      href: '#real-estate',
    },
    {
      id: 'advisory',
      icon: AcademicCapIcon,
      href: '#advisory',
    },
    {
      id: 'corporateServices',
      icon: WrenchScrewdriverIcon,
      href: '#corporate-services',
    },
    {
      id: 'securitization',
      icon: ShieldCheckIcon,
      href: '#securitization',
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {t('subtitle')}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.id} className="flex flex-col h-full">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                    <service.icon aria-hidden="true" className="h-7 w-7 text-primary" />
                  </div>
                  <span className="mt-1">{t(`items.${service.id}.name`)}</span>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <ul className="flex-auto list-disc space-y-3 pl-5">
                    {t.raw(`items.${service.id}.description`).map((item: string, index: number) => (
                      <li key={index} className="text-sm text-gray-600">{item}</li>
                    ))}
                  </ul>
                  {service.href && (
                    <p className="mt-6">
                      <a
                        href={service.href}
                        className="inline-flex items-center rounded-md bg-primary/10 px-3 py-2 text-sm font-semibold text-primary hover:bg-primary/20 transition-colors"
                      >
                        {t('findOutMore')}
                      </a>
                    </p>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}