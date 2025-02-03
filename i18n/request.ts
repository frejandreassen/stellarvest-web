// i18n/request.ts
import { getRequestConfig } from 'next-intl/server';
import { locales as appLocales } from '@/config/i18n';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
    timeZone: 'Europe/London'
  };
});