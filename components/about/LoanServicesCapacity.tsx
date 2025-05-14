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
  GavelIcon, 
  MonitorSmartphone, 
  Zap 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const LoansServicesCapacity = () => {
  const t = useTranslations('loansManagement.servicesCapacity');
  const loanManagement = useTranslations('loansManagement');

  // Define the loan services steps
  const loanServices = [
    { 
      id: '1', 
      name: t('process.step1.name') || 'Loans Stratification & Strategy Design', 
      description: t('process.step1.description') || 'Portfolio analysis & Segmentation', 
      color: 'bg-primary/10'
    },
    { 
      id: '2', 
      name: t('process.step2.name') || 'Amicable Resolution', 
      description: t('process.step2.description') || 'Negotiation and Customer centricity', 
      color: 'bg-primary/20'
    },
    { 
      id: '3', 
      name: t('process.step3.name') || 'Legal Management & Recovery', 
      description: t('process.step3.description') || 'Best judicial strategy and court intervention', 
      color: 'bg-primary/30'
    },
    { 
      id: '4', 
      name: t('process.step4.name') || 'Corporate & Single Names', 
      description: t('process.step4.description') || 'Tailor-made solutions for max value added', 
      color: 'bg-primary/40'
    },
  ];

  // Services with icons
  const services = [
    "Portfolio analysis",
    "Portfolio Management",
    "Negotiation",
    "Payment agreements",
    "Judicial strategy",
    "Court interventions",
    "Special management",
    "Tailor-made solutions"
  ];

  // Structure and Focus items
  const structureItems = t.raw('structure.items') || [
    "Teams with Asset Managers and Legal Managers working in simultaneous and joint effort to enhance recovery",
    "Smooth workflows of amicable resolution through negotiation or legal recovery through the most adequate judicial proceedings",
    "Cash in Court accurate control and management",
    "Customized IT tools managing the entire portfolio from boarding to collections, managing payment agreements, legal files, sales and repossessions",
    "Fully automated and controlled notification's management",
    "Allocation by Loan Type, Investor and/or Portfolio",
    "Special Asset and Legal Managers assigned to complex folders"
  ];

  const focusItems = t.raw('focus.items') || [
    "Performance driven",
    "Investor driven",
    "Holistic approach: loan, debtors/customers, assets",
    "Proactive proceedings management",
    "Online controls and reporting",
    "Out of the box solutions, beyond simple liquidation",
    "Simple yet effective procedures"
  ];

  // Icon mapping for services using Lucide icons
  const iconComponents: Record<string, React.ReactNode> = {
    "Portfolio analysis": <BarChart3 className="h-8 w-8 text-primary" />,
    "Portfolio Management": <FileText className="h-8 w-8 text-primary" />,
    "Negotiation": <Users className="h-8 w-8 text-primary" />,
    "Payment agreements": <CheckSquare className="h-8 w-8 text-primary" />,
    "Judicial strategy": <Scale className="h-8 w-8 text-primary" />,
    "Court interventions": <GavelIcon className="h-8 w-8 text-primary" />,
    "Special management": <MonitorSmartphone className="h-8 w-8 text-primary" />,
    "Tailor-made solutions": <Zap className="h-8 w-8 text-primary" />
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-secondary mb-4">{t('title') || 'Our Loans Services & Capacity'}</h2>
        
        {/* Results cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto my-10">
          <div className="bg-primary/5 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-medium text-gray-700">{loanManagement('results.recovered') || 'Recovered Loans'}</h3>
            <p className="text-3xl font-bold text-primary mt-2">{loanManagement('results.recoveredAmount') || '€23M'}</p>
          </div>
          <div className="bg-primary/5 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-medium text-gray-700">{loanManagement('results.aum') || 'Assets Under Management'}</h3>
            <p className="text-3xl font-bold text-primary mt-2">{loanManagement('results.aumAmount') || '€700M'}</p>
          </div>
        </div>
      </div>
      
      {/* Progress steps */}
      <div className="mb-12 relative">
        <div className="flex w-full overflow-hidden rounded-xl">
          {loanServices.map((step, stepIdx) => (
            <div key={step.id} className={cn(`flex-1 ${step.color} relative`)}>
              <div className="py-5 px-4 flex items-center">
                <div className="flex-shrink-0 z-10">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-primary">
                    <span className="text-primary font-bold">{step.id}</span>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-bold text-gray-900">{step.name}</p>
                  <p className="text-xs text-gray-700">{step.description}</p>
                </div>
                
                {/* Arrow shape */}
                {stepIdx !== loanServices.length - 1 && (
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
            <div className="bg-primary/5 hover:bg-primary/10 transition-colors p-4 rounded-lg flex flex-col items-center h-full">
              {iconComponents[service] || <CheckIcon className="h-8 w-8 text-primary" />}
              <p className="mt-2 text-sm text-gray-700">{service}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Structure and Focus section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Structure */}
        <div className="bg-primary/5 p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-secondary mb-4">{t('structure.title') || 'STRUCTURE'}</h3>
          <ul className="space-y-3">
            {structureItems.map((item: string, index: number) => (
              <li key={index} className="flex items-start">
                <CheckIcon className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Focus */}
        <div className="bg-primary/5 p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-secondary mb-4">{t('focus.title') || 'FOCUS'}</h3>
          <ul className="space-y-3">
            {focusItems.map((item: string, index: number) => (
              <li key={index} className="flex items-start">
                <CheckIcon className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <p className="italic text-primary mb-6">{loanManagement('tagline') || 'Your Assets, Our Expertise'}</p>
        <Link 
          href="/services/loans-management#contact-form" 
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          {loanManagement('contactUs') || 'Talk to our loan management team'}
        </Link>
      </div>
    </div>
  );
};

export default LoansServicesCapacity;