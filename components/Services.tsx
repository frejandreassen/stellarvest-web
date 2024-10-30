import { CreditCardIcon, BuildingOffice2Icon, AcademicCapIcon, BriefcaseIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

const services = [
  {
    name: 'Gestão de Créditos',
    description: [
      'Experiência em gestão de crédito de Individuals, SME, secured e unsecured;',
      'Estratégias amigáveis e judiciais com vista à recuperação;',
      'Reestruturação de dívidas e outras soluções que melhor sirvam o cliente.'
    ],
    icon: CreditCardIcon,
  },
  {
    name: 'Gestão de Ativos Imobiliários',
    description: [
      'Regularização técnica e comercialização de ativos singulares e granulares;',
      'Desenvolvimento e transformação de ativos singulares – portfolios e single names: terrenos, edifícios e imóveis inacabados;',
      'Asset Management de ativos singulares – portfolios e single names.'
    ],
    href: 'https://realestate.stellarvest.pt/',
    icon: BuildingOffice2Icon,
    label:'Para aceder aos imóveis que temos para comercialização, clique no '
    Link: 'Link'
  },
  {
    name: 'Advisory',
    description: [
      'Due diligence de portfolios NPL, PL e de REOs (buyer side e seller side);',
      'Avaliações de ativos imobiliários;',
      'Criação de modelo financeiro/business plans com vista à recuperação de portfolios.'
    ],
    icon: AcademicCapIcon,
  },
  {
    name: 'Servicing / Serviços Corporativos',
    description: [
      'Suporte administrativo às áreas de negócio;',
      'Property management - Gestão de arrendamentos, condomínios e manutenção dos imóveis;',
      'Regularização, gestão judicial de imóveis ocupados e contratação.'
    ],
    icon: BriefcaseIcon,
  },
  {
    name: 'STC - Veículo de Securitização',
    description: [
      'Serviços completos de securitização;',
      'Configuração e gestão de securitizações;',
      'Maximização de valor para originadores e investidores.'
    ],
    icon: ShieldCheckIcon,
  },
]

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nossos Serviços
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Oferecemos uma gama completa de serviços de gestão de ativos para atender às suas necessidades.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <service.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {service.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base text-justify leading-7 text-gray-600">
                  <ul className="list-disc pl-5 space-y-2">
                    {service.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <p className="mt-6">
                    <a className="text-xs leading-6 text-gray-500 md:mt-0">
                    {service.label}
                    </a>
                    <a href={service.href} className="text-sm font-semibold leading-6 text-primary">
                     {service.Link}
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
