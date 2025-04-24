import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import {
  FileText,
  Building2,
  GraduationCap,
  Wrench,
  Shield
} from 'lucide-react';

type ServiceItem = {
  id: string;
  icon: React.ElementType;
  href: string;
};

export default function Services() {
  const t = useTranslations('services');

  const services: ServiceItem[] = [
    {
      id: 'loansManagement',
      icon: FileText,
      href: '/services/loans-management',
    },
    {
      id: 'realEstateManagement',
      icon: Building2,
      href: '/services/real-estate',
    },
    {
      id: 'advisory',
      icon: GraduationCap,
      href: '/services/advisory',
    },
    {
      id: 'securitization',
      icon: Shield,
      href: '/services/securitization',
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
                    {t.raw(`items.${service.id}.label`).map((item: string, index: number) => (
                      <li key={index} className="text-sm text-gray-600">{item}</li>
                    ))}
                  </ul>
                  <p className="mt-6">
                    <Link
                      href={service.href}
                      className="inline-flex items-center rounded-md bg-primary/10 px-3 py-2 text-sm font-semibold text-primary hover:bg-primary/20 transition-colors"
                    >
                      {t('findOutMore')}
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-16 flex justify-center">
            <Link
              href="/services"
              className="inline-flex items-center rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
            >
              {t('viewAllServices')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}