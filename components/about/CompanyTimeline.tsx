'use client'
import { useTranslations } from 'next-intl';

type TimelineEvent = {
  id: string;
  year: string;
  title: string;
  description: string;
  logo: string;
  status: 'complete' | 'current';
};

export default function CompanyTimeline() {
  const t = useTranslations('about');

  const timelineEvents: TimelineEvent[] = [
    {
      id: 'oitante',
      year: '2017',
      title: 'Acquisition of Oitante\'s servicing platform',
      description: '',
      logo: '/about/altamira-logo.png',
      status: 'complete'
    },
    {
      id: 'altamira',
      year: '2018',
      title: 'doValue Group acquires Altamira Asset Management',
      description: '',
      logo: '/about/dovalue-logo.png',
      status: 'complete'
    },
    {
      id: 'doValueRebranding',
      year: '2021',
      title: 'Rebranding of Altamira Portugal to doValue Portugal',
      description: '',
      logo: '/about/dorealestate-logo.png',
      status: 'complete'
    },
    {
      id: 'zarco',
      year: '2021',
      title: 'Incorporation of the securitization vehicle ZARCO STC',
      description: '',
      logo: '/about/zarco-logo.png',
      status: 'complete'
    },
    {
      id: 'albatris',
      year: '2024',
      title: 'Albatris acquires doValue Portugal',
      description: '',
      logo: '/about/albatris-logo.png',
      status: 'complete'
    },
    {
      id: 'stellarvest',
      year: '2024',
      title: 'Rebranding of doValue Portugal to Stellarvest',
      description: '',
      logo: '/about/stellarvest-logo.png',
      status: 'current'
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-8 sm:py-12 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {t('ourHistory')}
        </h2>
      </div>

      <div className="mt-10 lg:mt-0 ">
        <nav aria-label="Company Timeline" className="flex justify-center"> {/* Added flex and justify-center here */}
          <ol role="list" className="overflow-hidden">
            {timelineEvents.map((event, eventIdx) => (
              <li
                key={event.id}
                className={`relative ${eventIdx !== timelineEvents.length - 1 ? 'pb-12' : ''}`}
              >
                {eventIdx !== timelineEvents.length - 1 ? (
                  <div
                    aria-hidden="true"
                    className={`absolute left-5 top-5 -ml-px mt-0.5 h-full w-0.5 ${
                      event.status === 'current' ? 'bg-gray-300' : 'bg-primary'
                    }`}
                  />
                ) : null}

                <div className="group relative flex items-start transition-opacity duration-200 ease-in-out hover:opacity-80">
                  <span className="flex h-10 items-center">
                    <span
                      className={`relative z-10 flex size-10 items-center justify-center rounded-full ${
                        event.status === 'current'
                          ? 'border-2 border-primary bg-white'
                          : 'bg-primary group-hover:bg-primary/90'
                      }`}
                    >
                      {event.status === 'current' ? (
                        <span className="size-3 rounded-full bg-primary" />
                      ) : (
                        <span className="text-xs font-semibold text-white">{event.year}</span>
                      )}
                    </span>
                  </span>

                  <div className="ml-6 flex flex-col items-start">
                    <div className="flex items-center space-x-3">
                      <span className="text-lg font-medium text-gray-900">
                        {event.year}
                      </span>
                      {event.logo && (
                        <img
                          src={event.logo}
                          alt={t(`timeline.${event.id}.logoAlt`)}
                          className="h-8 w-auto object-contain"
                        />
                      )}
                    </div>

                    <div className="mt-2 max-w-xl">
                      <span className={`text-base ${
                        event.status === 'current' ? 'font-medium text-primary' : 'font-medium text-gray-900'
                      }`}>
                        {t(`timeline.${event.id}.title`)}
                      </span>
                      {t.raw(`timeline.${event.id}.description`) && (
                        <p className="mt-1 text-sm text-gray-500">
                          {t(`timeline.${event.id}.description`)}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}