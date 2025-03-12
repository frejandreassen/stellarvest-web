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

// KPI data for WhyChooseUs section
const kpis = [
  { id: 1, name: 'ASSETS UNDER MANAGEMENT - NPLs', value: '€ 340 million', subValue: '# 3,662' },
  { id: 2, name: 'ASSETS UNDER MANAGEMENT - Real Estate', value: '€ 255 million', subValue: '# 791' },
  { id: 3, name: 'TOTAL COLLECTIONS - NPLs', value: '€ 215 million' },
  { id: 4, name: 'TOTAL COLLECTIONS - REOs', value: '€ 710 million' },
];