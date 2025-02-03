'use client'
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const navigation = [
  { nameKey: 'home', href: '/' },
  { nameKey: 'about', href: '/#about' },
  { nameKey: 'services', href: '/#services' },
  { nameKey: 'contact', href: '/#contact' },
  // { nameKey: 'login', href: '/login' },
];

export default function Header() {
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <img
              className="h-12 w-auto"
              src="/icon.png"
              alt="StellarVest logo"
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

        <div className="hidden lg:flex lg:justify-end lg:gap-x-12">
          {navigation.map((item) => (
            <a 
              key={item.nameKey} 
              href={item.href} 
              className="text-sm font-semibold leading-6 text-primary uppercase tracking-wider"
            >
              {t(item.nameKey)}
            </a>
          ))}
        </div>
      </nav>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">StellarVest Asset Management</span>
              <img
                className="h-12 w-auto"
                src="/icon.png"
                alt="StellarVest Logo"
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
                {navigation.map((item) => (
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