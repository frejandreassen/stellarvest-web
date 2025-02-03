'use client'
import { useTranslations } from 'next-intl';
import { 
  CreditCardIcon, 
  BuildingOffice2Icon, 
  AcademicCapIcon, 
  BriefcaseIcon, 
  ShieldCheckIcon 
} from '@heroicons/react/24/outline'

type ServiceItem = {
  id: string;
  icon: React.ElementType;
  href?: string;
}

export default function Services() {
  const t = useTranslations('services');

  const services: ServiceItem[] = [
    {
      id: 'creditManagement',
      icon: CreditCardIcon,
    },
    {
      id: 'realEstateManagement',
      href: 'https://realestate.stellarvest.pt/',
      icon: BuildingOffice2Icon,
    },
    {
      id: 'advisory',
      icon: AcademicCapIcon,
    },
    {
      id: 'servicing',
      icon: BriefcaseIcon,
    },
    {
      id: 'stc',
      icon: ShieldCheckIcon,
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
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.id} className="flex flex-col h-full">
                <dt className="flex items-start gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary shrink-0">
                    <service.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  <span className="mt-2">{t(`items.${service.id}.name`)}</span>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <ul className="flex-auto list-disc space-y-4 pl-5">
                    {t.raw(`items.${service.id}.description`).map((item: string, index: number) => (
                      <li key={index} className="">{item}</li>
                    ))}
                  </ul>
                  {service.href && (
                    <p className="mt-6 flex items-center gap-x-2">
                      <span className="text-xs leading-6 text-gray-500">
                        {t(`items.${service.id}.label`)}
                      </span>
                      <a 
                        href={service.href} 
                        className="text-sm font-semibold leading-6 text-primary hover:text-primary/80 transition-colors"
                      >
                        {t(`items.${service.id}.link`)}
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