'use client'
import { useTranslations } from 'next-intl'

const clients = [
  {
    id: 'apollo',
    logo: '/clients/apollo1.png',
  },
  {
    id: 'fortress',
    logo: '/clients/fortress1.png',
  },
  {
    id: 'santander',
    logo: '/clients/Santander_Logotipo.png',
  },
  {
    id: 'lcmPartners',
    logo: '/clients/LCM Partners.png',
  },
  {
    id: 'cgd',
    logo: '/clients/cgd-logo1-1.webp',
  },
  {
    id: 'profile',
    logo: '/clients/Logo_Profile.png',
  },
  {
    id: 'oitante',
    logo: '/clients/Oitante.png',
  },
  {
    id: 'davidsonKempner',
    logo: '/clients/davidson-kempner.png',
  },
  {
    id: 'aicep',
    logo: '/clients/grupo-aicep-300x66-1.png',
  }
]

export default function Clients() {
  const t = useTranslations('clients')

  return (
    <div className="py-24 sm:py-32" id="clients">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t('subtitle')}
          </p>
          <div className="mx-auto mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:grid-cols-5">
            {clients.map((client) => (
              <img
                key={client.id}
                src={client.logo}
                alt={t(`logos.${client.id}`)}
                width={158}
                height={48}
                className="col-span-1 max-h-12 w-full object-contain lg:col-span-1 grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}