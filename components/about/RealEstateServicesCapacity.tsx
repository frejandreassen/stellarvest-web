'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import { CheckIcon } from '@heroicons/react/24/solid';
import { Link } from '@/i18n/routing';
import { 
  BarChart3, 
  FileText, 
  Users, 
  CheckSquare, 
  Scale, 
  Building2, 
  MonitorSmartphone, 
  Headset 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const RealEstateServicesCapacity = () => {
  const t = useTranslations('realEstateManagement.servicesCapacity');
  const realEstate = useTranslations('realEstateManagement');

  // Define the real estate services steps
  const realEstateServices = [
    { 
      id: '1', 
      name: t('process.step1.name') || 'Onboarding & Asset Clean Up', 
      description: t('process.step1.description') || 'Asset assessment and preparation', 
      color: 'bg-secondary/20'
    },
    { 
      id: '2', 
      name: t('process.step2.name') || 'Brokers Management', 
      description: t('process.step2.description') || 'Network coordination and oversight', 
      color: 'bg-secondary/30'
    },
    { 
      id: '3', 
      name: t('process.step3.name') || 'Leads Management', 
      description: t('process.step3.description') || 'Opportunity tracking and conversion', 
      color: 'bg-secondary/40'
    },
    { 
      id: '4', 
      name: t('process.step4.name') || 'Real Estate Team', 
      description: t('process.step4.description') || 'Specialized expertise by asset type', 
      color: 'bg-secondary/50'
    }
  ];

  // Services with icons
  const services = t.raw('services') || [
    "Specialized internal team",
    "Nationwide external service providers",
    "Ranking KPIs Broker Valuation",
    "Rotation of Allocated Brokers",
    "Own Property Management software",
    "Leads Creation and Origination",
    "Specialized Call Center Support",
    "Specialized team: Size and Location"
  ];

  // Structure and Focus items
  const structureItems = t.raw('structure.items') || [
    "Commercial Team with Asset Managers working in partnership with wider broker network",
    "Specialized internal teams in asset clean up – technical and judicial",
    "Customized IT tools managing the entire portfolio from boarding to collections, managing maintenance, keys and closing",
    "AML internal services",
    "Allocation by Asset Type and location, Investor and/or Portfolio",
    "Special focus and track record on fire sales, assets without full ownership and occupied, sales"
  ];

  const focusItems = t.raw('focus.items') || [
    "Asset Best Value driven",
    "Investor driven",
    "Deal driven – the best commercial approach case by case",
    "Wide advertising policy",
    "Proactive commercial approaches and management",
    "Regular and proactive campaigns"
  ];

  // Icon mapping for services using Lucide icons
  const iconComponents: Record<string, React.ReactNode> = {
    "Specialized internal team": <Users className="h-8 w-8 text-secondary" />,
    "Nationwide external service providers": <MonitorSmartphone className="h-8 w-8 text-secondary" />,
    "Ranking KPIs Broker Valuation": <FileText className="h-8 w-8 text-secondary" />,
    "Rotation of Allocated Brokers": <Building2 className="h-8 w-8 text-secondary" />,
    "Own Property Management software": <MonitorSmartphone className="h-8 w-8 text-secondary" />,
    "Leads Creation and Origination": <BarChart3 className="h-8 w-8 text-secondary" />,
    "Specialized Call Center Support": <Headset className="h-8 w-8 text-secondary" />,
    "Specialized team: Size and Location": <Users className="h-8 w-8 text-secondary" />,
    
    // Portuguese translation mappings
    "Equipa interna especializada": <Users className="h-8 w-8 text-secondary" />,
    "Fornecedores de serviços externos de cobertura nacional": <MonitorSmartphone className="h-8 w-8 text-secondary" />,
    "Classificação por KPIs de avaliação de mediadores": <FileText className="h-8 w-8 text-secondary" />,
    "Rotação de mediadores alocados": <Building2 className="h-8 w-8 text-secondary" />,
    "Software próprio de gestão de propriedades": <MonitorSmartphone className="h-8 w-8 text-secondary" />,
    "Criação e originação de leads": <BarChart3 className="h-8 w-8 text-secondary" />,
    "Suporte especializado de Call Center": <Headset className="h-8 w-8 text-secondary" />,
    "Equipa especializada: Dimensão e Localização": <Users className="h-8 w-8 text-secondary" />
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-secondary mb-4">{t('title') || 'Our Real Estate services and capacity – Granular commercialization activity'}</h2>
      </div>
      
      {/* Progress steps */}
      <div className="mb-12 relative">
        <div className="flex w-full overflow-hidden rounded-xl">
          {realEstateServices.map((step, stepIdx) => (
            <div key={step.id} className={cn(`flex-1 ${step.color} relative`)}>
              <div className="py-5 px-4 flex items-center">
                <div className="flex-shrink-0 z-10">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-secondary">
                    <span className="text-secondary font-bold">{step.id}</span>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-bold text-gray-900">{step.name}</p>
                  <p className="text-xs text-gray-700">{step.description}</p>
                </div>
                
                {/* Arrow shape */}
                {stepIdx !== realEstateServices.length - 1 && (
                  <div className="absolute right-0 top-0 h-full w-6 z-20">
                    <svg 
                      viewBox="0 0 24 80" 
                      fill="currentColor" 
                      preserveAspectRatio="none"
                      className="h-full w-6 text-white"
                    >
                      <polygon points="0,0 24,40 0,80" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Icons row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {services.map((service: string, index: number) => (
          <div key={index} className="text-center">
            <div className="bg-secondary/5 hover:bg-secondary/10 transition-colors p-4 rounded-lg flex flex-col items-center h-full">
              {iconComponents[service] || <CheckIcon className="h-8 w-8 text-secondary" />}
              <p className="mt-2 text-sm text-gray-700">{service}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Structure and Focus section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Structure */}
        <div className="bg-secondary/5 p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-secondary mb-4">{t('structure.title') || 'STRUCTURE'}</h3>
          <ul className="space-y-3">
            {structureItems.map((item: string, index: number) => (
              <li key={index} className="flex items-start">
                <CheckIcon className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Focus */}
        <div className="bg-secondary/5 p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-secondary mb-4">{t('focus.title') || 'FOCUS'}</h3>
          <ul className="space-y-3">
            {focusItems.map((item: string, index: number) => (
              <li key={index} className="flex items-start">
                <CheckIcon className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <p className="italic text-secondary mb-6">{t('tagline') || 'Your Real Estate, Our Expertise'}</p>
        <Link 
          href="/services/real-estate#contact-form" 
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-secondary hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
        >
          {t('contactUs') || 'Talk to our real estate team'}
        </Link>
      </div>
    </div>
  );
};

export default RealEstateServicesCapacity;