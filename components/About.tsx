import React from 'react';

const kpis = [
  { id: 1, name: 'ASSETS UNDER MANAGEMENT - NPLs', value: '€ 340 million', subValue: '# 3,662' },
  { id: 2, name: 'ASSETS UNDER MANAGEMENT - Real Estate', value: '€ 255 million', subValue: '# 791' },
  { id: 3, name: 'TOTAL COLLECTIONS - NPLs', value: '€ 215 million' },
  { id: 4, name: 'TOTAL COLLECTIONS - REOs', value: '€ 710 million' },
];

export default function About() {
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
                Bem-vindo à StellarVest Asset Management
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-justify text-gray-600">
                  A StellarVest Asset Management é especialista na gestão de ativos complexos, oferecendo um serviço 360º que abrange todas as fases da gestão de ativos. Com uma abordagem estratégica e inovadora, a StellarVest Asset Management destaca-se pela sua capacidade de análise, desenvolvimento estratégico, venda e pós-venda.
                </p>
              </div>
              <img
                alt=""
                src="\windows-skyscraper-business-reflect-office-corpor-2023-11-27-05-33-20-utc.png"
                className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>

        {/* Mission and Vision section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Missão e Visão
            </h2>
            <h3 className="mt-6 text-2xl font-semibold text-gray-900">Missão</h3>
            <p className="mt-3 text-base leading-7 text-justify text-gray-600">
              A nossa missão é proporcionar soluções especializadas em gestão de ativos, garantindo o máximo retorno para os nossos clientes. Comprometemo-nos a oferecer serviços integrados e personalizados, contemplando todas as fases da gestão de ativos num único parceiro.
            </p>
            <h3 className="mt-6 text-2xl font-semibold text-gray-900">Visão</h3>
            <p className="mt-3 text-base leading-7 text-justify text-gray-600">
              A nossa visão é ser reconhecida como a primeira escolha na gestão de ativos complexos, oferecendo uma abordagem completa e inovadora para maximizar o potencial valor dos ativos dos nossos clientes.
            </p>
          </div>
        </div>

        {/* Quem Somos section with images */}
        <div className="mt-32 overflow-hidden sm:mt-40">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
              <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Quem Somos</h2>
                <p className="mt-6 text-base text-justify leading-7 text-gray-600">
                  A StellarVest Asset Management foi criada com o objetivo de maximizar o valor dos ativos, proporcionando aos nossos clientes uma abordagem integrada e eficiente. A nossa experiência e competências abrangem desde a análise e pensamento estratégico até ao desenvolvimento, venda e pós-venda de ativos.
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  Gerimos os ativos de A a Z, com um <i>mindset</i> focado em potenciar ao máximo a valorização dos ativos.
                </p>
              </div>
              <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <img
                    alt=""
                     {/*src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"*/}
                    src="\business-corporate-colleagues-co-workers-job-conce-2023-11-27-04-51-00-utc.png"
                    className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                  <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                      className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                      className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                      className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why choose StellarVest section */}
        <div className="mx-auto my-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Porque escolher a StellarVest Asset Management?
            </h2>
            <p className="mt-6 text-base text-justify leading-7 text-gray-600">
              Escolher a StellarVest Asset Management é optar por um parceiro comprometido com o sucesso e a valorização máxima dos seus ativos. A nossa abordagem personalizada e integrada, aliada aos valores de compromisso, integridade, inovação, parceria e responsabilidade, garantem um serviço de excelência e confiança.
            </p>
            <p className="mt-6 text-base text-justify leading-7 text-gray-600">
              Estamos prontos para ser o seu parceiro de confiança na gestão de ativos complexos, proporcionando soluções inovadoras e eficazes para maximizar o valor dos seus investimentos.
            </p>
          </div>
        </div>

        {/* KPIs section */}
        {/* <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-16 text-center">
                KPI&apos;s
            </h2>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
              {kpis.map((kpi) => (
                <div key={kpi.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-base leading-7 text-gray-600">{kpi.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    {kpi.value}
                  </dd>
                  {kpi.subValue && (
                    <dd className="text-sm font-medium text-gray-500">{kpi.subValue}</dd>
                  )}
                </div>
              ))}
            </dl>
          </div>
        </div> */}

      </main>
    </div>
  );
}
