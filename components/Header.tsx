'use client'
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { useState } from 'react';
import { 
  Dialog, 
  DialogPanel, 
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel 
} from '@headlessui/react';
import { 
  Bars3Icon, 
  XMarkIcon, 
  GlobeAltIcon,
  BuildingOffice2Icon,
  BanknotesIcon,
  AcademicCapIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

const navigation = [
  { nameKey: 'home', href: '/' },
  { nameKey: 'about', href: '/about' },
  { nameKey: 'contact', href: '/contact' },
  { nameKey: 'login', href: '/login' },
];

export default function Header() {
  const t = useTranslations('navigation');
  const services = useTranslations('services');
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const serviceItems = [
    { 
      name: services.raw('items.loansManagement.name'), 
      description: services.raw('items.loansManagement.description')[0], 
      href: '/loans-management', 
      icon: BanknotesIcon 
    },
    { 
      name: services.raw('items.realEstateManagement.name'), 
      description: services.raw('items.realEstateManagement.description')[0], 
      label: services.raw('items.realEstateManagement.label')[0],
      link: services.raw('items.realEstateManagement.link')[0],
      href: '/real-estate', 
      icon: BuildingOffice2Icon 
    },
    { 
      name: services.raw('items.advisory.name'), 
      description: services.raw('items.advisory.description')[0], 
      href: '/advisory', 
      icon: AcademicCapIcon 
    },
    { 
      name: services.raw('items.securitization.name'), 
      description: services.raw('items.securitization.description')[0], 
      href: '/securitization', 
      icon: DocumentTextIcon 
    },
  ];

  const LanguageSelector = () => (
    <div className="flex items-center gap-2 text-gray-600">
      <GlobeAltIcon className="h-6 w-6" />
      <Link 
        href={pathname} 
        locale="pt" 
        className={`text-sm font-semibold ${pathname.startsWith('/pt') ? 'text-primary' : 'text-gray-400'}`}
      >
        PT
      </Link>
      <span className="text-gray-400">|</span>
      <Link 
        href={pathname} 
        locale="en" 
        className={`text-sm font-semibold ${pathname.startsWith('/en') ? 'text-primary' : 'text-gray-400'}`}
      >
        EN
      </Link>
    </div>
  );

  return (
    <header className="flex flex-col">
      {/* Top bar with language selector */}
      <div className="w-full flex justify-end px-8 mt-4">
        <LanguageSelector />
      </div>

      <nav className="flex items-center justify-between lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">StellarVest Asset Management</span>
            <Image
              className="h-12 w-auto"
              src="/icon.png"
              alt="StellarVest logo"
              width={48}
              height={48}
            />
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex lg:justify-end lg:gap-x-12">
          {/* Home, About links */}
          {navigation.slice(0, 2).map((item) => (
            <a 
              key={item.nameKey} 
              href={item.href} 
              className="text-sm font-semibold leading-6 text-primary uppercase tracking-wider"
            >
              {t(item.nameKey)}
            </a>
          ))}

          {/* Services dropdown */}
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-primary uppercase tracking-wider">
              {t('services')}
              <ChevronDownIcon aria-hidden="true" className="h-4 w-4 flex-none text-primary" />
            </PopoverButton>

            <PopoverPanel 
              className="absolute right-0 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5"
            >
              <div className="p-4">
                {serviceItems.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-primary group-hover:text-primary/80" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      <p className="mt-1 text-gray-600">{item.description}</p>
                      {/*<p className="mt-6">
                          <a className="text-xs leading-6 text-gray-500 md:mt-0">{item.label}</a>
                          <a href={item.href} className="text-sm font-semibold leading-6 text-primary">{item.Link}</a>
                      </p>*/}
                      /</a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 p-4">
                <a
                  href="/services"
                  className="block rounded-lg p-2 text-sm font-semibold text-primary text-center hover:bg-gray-100"
                >
                  {services('viewAllServices')}
                </a>
              </div>
            </PopoverPanel>
          </Popover>

          {/* Contact, Login links */}
          {navigation.slice(2).map((item) => (
            <a 
              key={item.nameKey} 
              href={item.href} 
              className="text-sm font-semibold leading-6 text-primary uppercase tracking-wider"
            >
              {t(item.nameKey)}
            </a>
          ))}
        </PopoverGroup>
      </nav>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">StellarVest Asset Management</span>
              <Image
                className="h-12 w-auto"
                src="/icon.png"
                alt="StellarVest Logo"
                width={48}
                height={48}
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/* Home, About links */}
                {navigation.slice(0, 2).map((item) => (
                  <a
                    key={item.nameKey}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10 uppercase"
                  >
                    {t(item.nameKey)}
                  </a>
                ))}

                {/* Services dropdown */}
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10 uppercase">
                    {t('services')}
                    <ChevronDownIcon className="h-5 w-5 flex-none" aria-hidden="true" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {serviceItems.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="h-5 w-5 text-primary" />
                          {item.name}
                        </div>
                      </DisclosureButton>
                    ))}
                    <DisclosureButton
                      as="a"
                      href="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-primary hover:bg-gray-400/10"
                    >
                      {services('viewAllServices')}
                    </DisclosureButton>
                  </DisclosurePanel>
                </Disclosure>

                {/* Contact, Login links */}
                {navigation.slice(2).map((item) => (
                  <a
                    key={item.nameKey}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10 uppercase"
                  >
                    {t(item.nameKey)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}