'use client'
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
  imageSrc: string;
};

export default function ServicesPage() {
  const t = useTranslations('services');

  const services: ServiceItem[] = [
    {
      id: 'loansManagement',
      icon: FileText,
      href: '/loans-management',
      imageSrc: '/business-people-analyzes-graphs-and-charts-to-exa-2023-11-27-05-32-43-utc.png',
    },
    {
      id: 'realEstateManagement',
      icon: Building2,
      href: '/real-estate',
      imageSrc: '/corporate-moderl-office-with-laptop-on-desk-2023-11-27-05-14-15-utc.png',
    },
    {
      id: 'advisory',
      icon: GraduationCap,
      href: '/advisory',
      imageSrc: '/successful-businessman-in-suit-signing-business-co-2023-11-27-04-54-49-utc.png',
    },
    {
      id: 'securitization',
      icon: Shield,
      href: '/securitization',
      imageSrc: '/the-long-meeting-2023-11-27-05-12-42-utc.png',
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            {t('title')}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('subtitle')}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {t('description') || "We offer a complete range of asset management services to meet your needs."}
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          {services.map((service, idx) => (
            <div key={service.id} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-primary/5'} px-6 py-16 sm:py-24 lg:px-8 mb-4 rounded-xl`}>
              <div className="mx-auto max-w-2xl lg:max-w-7xl">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`flex flex-col justify-center ${idx % 2 !== 0 ? 'lg:ml-auto order-2 lg:order-1' : 'order-2'}`}>
                    <div className="flex items-center gap-x-4 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                        <service.icon aria-hidden="true" className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                        {t(`items.${service.id}.name`)}
                      </h3>
                    </div>
                    <ul className="space-y-3 pl-5 list-disc">
                      {t.raw(`items.${service.id}.description`).map((item: string, index: number) => (
                        <li key={index} className="text-base text-gray-600">{item}</li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Link
                        href={service.href}
                        className="inline-flex items-center rounded-md bg-primary/10 px-3 py-2 text-sm font-semibold text-primary hover:bg-primary/20 transition-colors"
                      >
                        {t('findOutMore')}
                      </Link>
                    </div>
                  </div>
                  <div className={`${idx % 2 !== 0 ? 'order-1 lg:order-2' : 'lg:ml-auto order-1'}`}>
                    <img
                      src={service.imageSrc}
                      alt={t(`items.${service.id}.name`)}
                      className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 object-cover aspect-[4/3]"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}