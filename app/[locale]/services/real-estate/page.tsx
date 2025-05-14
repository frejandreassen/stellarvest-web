import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import SectionSeparator from "@/components/SectionSeparator";
import VideoSectionSeparator from "@/components/VideoSectionSeparator";
import { BuildingOffice2Icon, ChartBarIcon, ClipboardDocumentCheckIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { useTranslations } from 'next-intl';

// Property management team members
const teamMembers = [
  {
    id: 'joaoRibeiro',
    imageUrl: '/team/Joֶo Ribeiro.jpg',
  },
  {
    id: 'monicaCohen',
    imageUrl: '/team/monica-cohen.png',
  },
  {
    id: 'saraLopes',
    imageUrl: '/team/sara-lopes.png',
  },
];

export default function RealEstate() {
    const t = useTranslations('realEstateManagement');
    
    return (
        <div>
            <Header />
            <main className="">
                {/* Hero section */}
                <div className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="lg:pr-4">
                                <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                                    <img
                                        alt={t('title')}
                                        src="/windows-skyscraper-business-reflect-office-corpor-2023-11-27-05-33-20-utc.png"
                                        className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
                                    />
                                    <div className="absolute inset-0 bg-gray-900 mix-blend-multiply" />
                                    <div
                                        aria-hidden="true"
                                        className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                                    >
                                        <div
                                            style={{
                                                clipPath:
                                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                            }}
                                            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-secondary to-secondary/70 opacity-40"
                                        />
                                    </div>
                                    <figure className="relative isolate">
                                        <svg
                                            fill="none"
                                            viewBox="0 0 162 128"
                                            aria-hidden="true"
                                            className="absolute -left-2 -top-4 -z-10 h-32 stroke-white/20"
                                        >
                                            <path
                                                d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                                                id="0ef284b8-28c2-426e-9442-8655d393522e"
                                            />
                                            <use x={86} href="#0ef284b8-28c2-426e-9442-8655d393522e" />
                                        </svg>
                                        <BuildingOffice2Icon className="h-12 w-auto text-white" />
                                        <blockquote className="mt-6 text-xl font-semibold leading-8 text-white">
                                            <p>
                                                {t('quote')}
                                            </p>
                                        </blockquote>
                                        <figcaption className="mt-6 text-sm leading-6 text-gray-300">
                                            <strong className="font-semibold text-white">StellarVest Asset Management</strong>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                                        <p className="text-base font-semibold leading-7 text-primary">{t('title')}</p>
                                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                            {t('subtitle')}
                                        </h1>
                                        <div className="max-w-xl">
                                            <p className="mt-6">
                                                {t('intro')}
                                            </p>
                                            <p className="mt-8">
                                                {t('platformText')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Video section separator */}
                <VideoSectionSeparator />
                
                {/* Why StellarVest section */}
                <div className="bg-gray-50 py-16 sm:py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t('whyStellarVest.title')}</h2>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    {t('whyStellarVest.description')}
                                </p>
                            </div>
                            <div className="relative overflow-hidden rounded-xl">
                                <img
                                    src="/business-people-analyzes-graphs-and-charts-to-exa-2023-11-27-05-32-43-utc.png"
                                    alt="Real estate analysis"
                                    className="w-full h-full object-cover rounded-xl shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Results section */}
                <div className="bg-white py-16 sm:py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:max-w-none">
                            <div className="text-center">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                    {t('results.title')}
                                </h2>
                            </div>
                            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-5">
                                <div className="flex flex-col bg-gray-50 p-8">
                                    <dt className="text-sm font-semibold leading-6 text-gray-600">{t('results.sales')}</dt>
                                    <dd className="order-first text-3xl font-semibold tracking-tight text-primary">{t('results.salesAmount')}</dd>
                                </div>
                                <div className="flex flex-col bg-gray-50 p-8">
                                    <dt className="text-sm font-semibold leading-6 text-gray-600">{t('results.aum')}</dt>
                                    <dd className="order-first text-3xl font-semibold tracking-tight text-primary">{t('results.aumAmount')}</dd>
                                </div>
                                <div className="flex flex-col bg-gray-50 p-8">
                                    <dt className="text-sm font-semibold leading-6 text-gray-600">{t('results.assets')}</dt>
                                    <dd className="order-first text-3xl font-semibold tracking-tight text-primary">{t('results.assetsAmount')}</dd>
                                </div>
                                <div className="flex flex-col bg-gray-50 p-8">
                                    <dt className="text-sm font-semibold leading-6 text-gray-600">{t('results.rental')}</dt>
                                    <dd className="order-first text-3xl font-semibold tracking-tight text-primary">{t('results.rentalAmount')}</dd>
                                    <p className="mt-1 text-sm text-gray-500">{t('results.leases')}</p>
                                </div>
                                <div className="flex flex-col bg-gray-50 p-8">
                                    <dt className="text-sm font-semibold leading-6 text-gray-600">{t('results.maintenance')}</dt>
                                    <dd className="order-first text-3xl font-semibold tracking-tight text-primary">{t('results.maintenanceAmount')}</dd>
                                    <p className="mt-1 text-sm text-gray-500">{t('results.maintenanceDesc')}</p>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
                
                {/* Section Separator */}
                <SectionSeparator />
                
                {/* Our Approach section with image */}
                <div className="bg-gray-50 py-16 sm:py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="relative order-last lg:order-first overflow-hidden rounded-xl">
                                <img
                                    src="/corporate-moderl-office-with-laptop-on-desk-2023-11-27-05-14-15-utc.png"
                                    alt="Modern office approach"
                                    className="w-full h-full object-cover rounded-xl shadow-lg"
                                />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                    {t('approach.title')}
                                </h2>
                                <p className="mt-4 text-lg leading-8 text-gray-600">
                                    {t('approach.description')}
                                </p>
                                <ul className="mt-6 space-y-4 text-lg leading-8 text-gray-600">
                                    {t.raw('approach.items').map((item: string, index: number) => (
                                        <li key={index} className="flex gap-x-3">
                                            <span className="text-primary">•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Servicing & Property Management section */}
                <div className="bg-white py-16 sm:py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:text-left">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                {t('services.title')}
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                {t('services.description')}
                            </p>
                        </div>
                        
                        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
                            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                                {/* Property Management */}
                                <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-6">{t('services.propertyManagement.title')}</h3>
                                    <p className="text-lg text-gray-600 mb-6">
                                        {t('services.propertyManagement.description')}
                                    </p>
                                </div>
                                
                                {/* Legal Management */}
                                <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-6">{t('services.legalManagement.title')}</h3>
                                    <p className="text-lg text-gray-600 mb-6">
                                        {t('services.legalManagement.description')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Video section separator */}
                <VideoSectionSeparator />
                
                {/* Why Choose StellarVest section */}
                <div className="bg-gray-50 py-16 sm:py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                {t('services.whyChoose.title')}
                            </h2>
                        </div>
                        <div className="mx-auto mt-12 max-w-2xl lg:max-w-none">
                            <dl className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                {t.raw('services.whyChoose.items').map((item: string, index: number) => (
                                    <div key={index} className="flex items-start">
                                        <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                                            <span className="text-white font-semibold">{index + 1}</span>
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-lg text-gray-700">{item}</p>
                                        </div>
                                    </div>
                                ))}
                            </dl>
                            <div className="mt-12 text-center">
                                <p className="text-xl font-medium text-primary">{t('services.tagline')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Team section (using style from Team.tsx) 
                <div className="bg-primary/5 py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl sm:text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                {t('team.title')}
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                {t('team.description')}
                            </p>
                        </div>
                        <ul
                            role="list"
                            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none xl:grid-cols-3"
                        >
                            {teamMembers.map((person, index) => {
                                const member = t.raw('team.members')[index];
                                return (
                                    <li key={person.id} className="flex flex-col gap-6">
                                        <div className="relative">
                                            <img
                                                className="aspect-[4/5] w-full rounded-2xl object-cover object-center"
                                                src={person.imageUrl}
                                                alt={member.name}
                                            />
                                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 to-transparent" />
                                            <div className="absolute bottom-4 left-4 right-4">
                                                <h3 className="text-lg font-semibold leading-8 text-white">
                                                    {member.name}
                                                </h3>
                                                <p className="text-base leading-7 text-primary-foreground">
                                                    {member.position}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex-auto">
                                            <p className="text-base leading-7 text-gray-600">
                                                {member.description}
                                            </p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="mt-16 flex justify-center">
                            <a
                                href="#contact-form"
                                className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors"
                            >
                                {t('contactUs')}
                            </a>
                        </div>
                    </div>
                </div> 
                */}
                {/* Services link */}
                <div className="bg-white py-8 sm:py-12">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="text-center">
                            <a href="/services" className="text-base font-semibold leading-7 text-primary">
                                {t('allServices')} <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Contact Form with Real Estate Team pre-selected */}
                <div id="contact-form">
                    <ContactForm defaultTeam="realEstate" />
                </div>
            </main>
            <Footer />
        </div>
    );
}