'use client'
import { useTranslations } from 'next-intl'

const people = [
  {
    name: 'Ruben Sommer',
    role: 'CEO',
    experience: '+ 30 years of experience',
    imageUrl: '/team/ruben-sommer.jpg',
    bio: `Experience in various prestigious financial institutions including Banif, ABN Amro Bank, Deutsche Bank Investimentos, BES Investimento, Domusvenda, Reactivv, and Albatris. Holds a Degree in Business Management.`,
  },
  {
    name: 'João Ribeiro',
    role: 'Real Estate Director',
    experience: '+ 25 years of experience',
    imageUrl: '/team/joao-ribeiro.jpg',
    bio: `Extensive experience in real estate with companies like Immo Mosqueteiros PT, DIA PT, CBRE, Euro-Funding Advisory Group, Carrefour PT, and Parque Expo. Holds a Degree in Architecture and a Master in Urban Planning.`,
  },
  {
    name: 'Pedro Guerreiro',
    role: 'CHRO & CFO',
    experience: '+ 25 years of experience',
    imageUrl: '/team/pedro-guerreiro.jpg',
    bio: `Background in financial services at Banif, ABN Amro Bank, Deutsche Bank Investimentos, BES Investimento, among others. Multiple qualifications including degrees in Management, Attorneyship, and postgraduate studies in HR Management and Corporate Strategy.`,
  },
]

export default function Team() {
  const t = useTranslations('team')
  
  return (
    <div className="bg-primary/5 py-24 sm:py-32" id="team">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our experienced team combines decades of expertise in asset management, real estate, and financial services
            to deliver exceptional results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none xl:grid-cols-3"
        >
          {people.map((person) => (
            <li key={person.name} className="flex flex-col gap-6">
              <div className="relative">
                <img 
                  className="aspect-[4/5] w-full rounded-2xl object-cover" 
                  src={person.imageUrl} 
                  alt="" 
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold leading-8 text-white">
                    {person.name}
                  </h3>
                  <p className="text-base leading-7 text-primary-foreground">
                    {person.role}
                  </p>
                  <p className="text-sm text-gray-200">
                    {person.experience}
                  </p>
                </div>
              </div>
              <div className="flex-auto">
                <p className="text-base leading-7 text-gray-600">
                  {person.bio}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-16 flex justify-center">
          <a
            href="#contact"
            className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors"
          >
            Talk to our management team
          </a>
        </div>
      </div>
    </div>
  )
}