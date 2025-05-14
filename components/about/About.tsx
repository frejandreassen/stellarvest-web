'use client'
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import SectionSeparator from '../SectionSeparator';
import LoansServicesCapacity from './LoanServicesCapacity';
import VideoSectionSeparator from '../VideoSectionSeparator';
import RealEstateServicesCapacity from './RealEstateServicesCapacity';

// Main About component that imports other components
export default function About() {
  return (
    <div className="bg-white" id="about">
      <main className="isolate">
        <Hero />
        <History />
        <SectionSeparator />
        <MissionVision />
        
        <Approach />
        <SectionSeparator />
        <WhyChooseUs />
        <VideoSectionSeparator />
        <LoansServicesCapacity />
        <SectionSeparator />
        <RealEstateServicesCapacity />
        <SectionSeparator />
        <WorkWithUs />
      </main>
    </div>
  );
}
function Hero() {
  const t = useTranslations('about');
  
  return (
    <div className="bg-white px-6 py-8 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base/7 font-semibold text-primary">{t('tagline')}</p>
        <h2 className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
          {t('title')}
        </h2>
      
      </div>
      <div className="mt-16 flex justify-center">
        <img
          src="/everything-for-business-meeting-2023-11-27-05-05-08-utc.png"
          alt="Business meeting setup"
          className="rounded-xl shadow-xl max-w-full h-auto sm:max-w-3xl"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
      <p className="mt-8 text-pretty text-lg text-gray-500 sm:text-xl/8">
          {t('intro')}
        </p>
        </div>
    </div>
  );
}
// MissionVision component
function MissionVision() {
  const t = useTranslations('about');
  
  return (
    <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6">
        {/* Image Container - Now on the left */}
        <div className="flex items-center justify-center lg:order-1">
          <img
            alt="Corporate colleagues working together"
            src="/business-corporate-colleagues-co-workers-job-conce-2023-11-27-04-51-00-utc.png"
            className="aspect-[7/5] w-full max-w-lg rounded-2xl bg-gray-50 object-cover shadow-lg"
          />
        </div>
        
        {/* Text Container - Now on the right */}
        <div className="mt-6 max-w-xl lg:mt-0 lg:order-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('missionVision.title')}
          </h2>
          <h3 className="mt-6 text-2xl font-semibold text-gray-900">
            {t('missionVision.mission.title')}
          </h3>
          <p className="mt-3 text-base leading-7 text-justify text-gray-600">
            {t('missionVision.mission.text')}
          </p>
          <h3 className="mt-6 text-2xl font-semibold text-gray-900">
            {t('missionVision.vision.title')}
          </h3>
          <p className="mt-3 text-base leading-7 text-justify text-gray-600">
            {t('missionVision.vision.text')}
          </p>
        </div>
      </div>
    </div>
  );
}

// History component - timeline of company milestones
function History() {
  // Import the CompanyTimeline component
  const CompanyTimeline = dynamic(() => import('./CompanyTimeline'), { ssr: false });
  
  return (
    <div className="mt-8 overflow-hidden sm:mt-8">
      <CompanyTimeline />
    </div>
  );
}

// Approach component (new component, template based on existing sections)
function Approach() {
  const t = useTranslations('about');
  
  return (
    <div className="mx-auto max-w-7xl px-6 py-8 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
        <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('approach.title')}
          </h2>
          <p className="mt-6 text-base leading-7 text-justify text-gray-600">
            {t('approach.text1')}
          </p>
          <p className="mt-6 text-base leading-7 text-justify text-gray-600">
            {t('approach.text2')}
          </p>
          <div className="mt-8 text-center">
            <p className="text-base italic text-primary">{t('tagline')}</p>
          </div>
        </div>
        <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
          <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
            <img
              alt="NPL and REO Management Process"
              src="/business-people-analyzes-graphs-and-charts-to-exa-2023-11-27-05-32-43-utc.png"
              className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// WhyChooseUs component
function WhyChooseUs() {
  const t = useTranslations('about');
  
  return (
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
      
      {/* KPI section to display stats */}
      {/* <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi) => (
          <div key={kpi.id} className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
            <h3 className="text-base font-semibold text-gray-900">{kpi.name}</h3>
            <p className="mt-2 text-3xl font-bold tracking-tight text-indigo-600">{kpi.value}</p>
            {kpi.subValue && (
              <p className="text-sm text-gray-500">{kpi.subValue}</p>
            )}
          </div>
        ))}
      </div> */}
    </div>
  );
}

// WorkWithUs component
function WorkWithUs() {
  const t = useTranslations('about');
  
  // Define the items manually since they're not being properly accessed as arrays from the translation
  const whyJoinItems = [
    t('workWithUs.whyJoin.items.0'),
    t('workWithUs.whyJoin.items.1'),
    t('workWithUs.whyJoin.items.2'),
    t('workWithUs.whyJoin.items.3')
  ];
  
  const areasItems = [
    t('workWithUs.areas.items.0'),
    t('workWithUs.areas.items.1'),
    t('workWithUs.areas.items.2'),
    t('workWithUs.areas.items.3'),
    t('workWithUs.areas.items.4')
  ];
  
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-8">
        {/* Text content on the left */}
        <div className="lg:pr-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('workWithUs.title')}
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            {t('workWithUs.intro')}
          </p>
          
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-gray-900">
              {t('workWithUs.whyJoin.title')}
            </h3>
            <ul className="mt-4 space-y-4">
              {whyJoinItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-600">{item}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-gray-900">
              {t('workWithUs.areas.title')}
            </h3>
            <ul className="mt-4 space-y-4">
              {areasItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-600">{item}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-10">
            <p className="text-lg font-medium text-gray-900">
              {t('workWithUs.challenge')}
            </p>
            <div className="mt-4">
              <a
                href="mailto:recrutamento@stellarvest.pt"
                className="text-primary hover:text-primary-dark font-medium"
              >
                {t('workWithUs.email')}
              </a>
              <p className="mt-2 text-base text-gray-600">
                {t('workWithUs.exploreMore')}
              </p>
            </div>
          </div>
        </div>
        
        {/* Image on the right */}
        <div className="hidden lg:flex lg:items-center mt-12 lg:mt-0">
          <div className="relative w-full h-full">
            <img
              src="/man-and-woman-at-conference-table.jpg"
              alt="Professionals at a conference table"
              className="rounded-xl shadow-xl object-cover object-center w-full h-auto max-h-[600px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// KPI data for WhyChooseUs section
const kpis = [
  { id: 1, name: 'ASSETS UNDER MANAGEMENT - NPLs', value: '€ 340 million', subValue: '# 3,662' },
  { id: 2, name: 'ASSETS UNDER MANAGEMENT - Real Estate', value: '€ 255 million', subValue: '# 791' },
  { id: 3, name: 'TOTAL COLLECTIONS - NPLs', value: '€ 215 million' },
  { id: 4, name: 'TOTAL COLLECTIONS - REOs', value: '€ 710 million' },
];