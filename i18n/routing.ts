// src/i18n/routing.ts
import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  locales: ['en', 'pt'],
  defaultLocale: 'pt'
});
 
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);