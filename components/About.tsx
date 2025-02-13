'use client'
import { useTranslations } from 'next-intl';

const kpis = [
  { id: 1, name: 'ASSETS UNDER MANAGEMENT - NPLs', value: '€ 340 million', subValue: '# 3,662' },
  { id: 2, name: 'ASSETS UNDER MANAGEMENT - Real Estate', value: '€ 255 million', subValue: '# 791' },
  { id: 3, name: 'TOTAL COLLECTIONS - NPLs', value: '€ 215 million' },
  { id: 4, name: 'TOTAL COLLECTIONS - REOs', value: '€ 710 million' },
];

export default function About() {
  const t = useTranslations('about');

  return (
    <div className="bg-white" id="about">
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-primary/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                {t('welcome')}
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-justify text-gray-600">
                  {t('intro')}
                </p>
              </div>
              <img
                alt=""
                src="\windows-skyscraper-business-reflect-office-corpor-2023-11-27-05-33-20-utc.png" 
                className="mt-10 aspect-[4/3] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>

        {/* Mission and Vision section */}
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {t('missionVision.title')}
              </h2>
              <h3 className="mt-6 text-2xl font-semibold text-gray-900">{t('missionVision.mission.title')}</h3>
              <p className="mt-3 text-base leading-7 text-justify text-gray-600">
                {t('missionVision.mission.text')}
              </p>
              <h3 className="mt-6 text-2xl font-semibold text-gray-900">{t('missionVision.vision.title')}</h3>
              <p className="mt-3 text-base leading-7 text-justify text-gray-600">
                {t('missionVision.vision.text')}
              </p>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <img
                  alt=""
                  src="\business-corporate-colleagues-co-workers-job-conce-2023-11-27-04-51-00-utc.png"
                  className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Who We Are section */}
        <div className="mt-32 overflow-hidden sm:mt-40">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
              <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {t('whoWeAre.title')}
                </h2>
                <p className="mt-6 text-base text-justify leading-7 text-gray-600">
                  {t('whoWeAre.text1')}
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  {t('whoWeAre.text2')}
                </p>
              </div>
              <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <img
                    alt=""
                    src="\email-client-list-woman-hand-on-the-computer-lapt-2023-11-27-04-52-42-utc.png"
                    className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why choose StellarVest section */}
        <div className="mx-auto my-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t('whyChoose.title')}
            </h2>
            <p className="mt-6 text-base text-justify leading-7 text-gray-600">
              {t('whyChoose.text1')}
            </p>
            <p className="mt-6 text-base text-justify leading-7 text-gray-600">
              {t('whyChoose.text2')}
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}