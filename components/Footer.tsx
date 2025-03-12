'use client'
import { useTranslations } from 'next-intl';
import SectionSeparator from './SectionSeparator';

export default function Footer() {
  const t = useTranslations('footer');

  const footerNavigation = {
    solutions: [
      { nameKey: 'loansManagement', href: '/loans-management' },
      { nameKey: 'realEstateManagement', href: '/real-estate' },
      { nameKey: 'advisory', href: '/advisory' },
      { nameKey: 'securitization', href: '/securitization' },
    ],
    support: [
      { nameKey: 'legalInfo', href: '/legal' },
      { nameKey: 'cookies', href: '/cookies' },
      { nameKey: 'privacy', href: '/privacy' },
      { nameKey: 'whistleblowing', href: '/whistleblowing' },
    ],
    company: [
      { nameKey: 'about', href: '/#about' },
      { nameKey: 'services', href: '/#services' },
      { nameKey: 'contact', href: '/#contact' },
    ],
  };

  return (
    <footer aria-labelledby="footer-heading" className="mt-32 sm:mt-40">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <div className="border-t border-gray-900/10 pt-20 xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* Solutions section commented out as in original */}
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  {t('navigation.support.title')}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.support.map((item) => (
                    <li key={item.nameKey}>
                      <a 
                        href={item.href} 
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {t(`navigation.support.${item.nameKey}`)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  {t('navigation.company.title')}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.nameKey}>
                      <a 
                        href={item.href} 
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {t(`navigation.company.${item.nameKey}`)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Newsletter section commented out as in original */}
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <p className="mt-8 text-xs leading-5 text-gray-500 md:mt-0">
            {t('copyright')}
          </p>
        </div>
      </div>
      <SectionSeparator />
    </footer>
  )
}