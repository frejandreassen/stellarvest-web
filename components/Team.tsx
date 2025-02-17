'use client'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

const people = [
  {
    id: 'rubenSommer',
    imageUrl: '/team/223 Ruben Sommer.png',
  },
  {
    id: 'joaoRibeiro',
    imageUrl: '/team/Joֶo Ribeiro.jpg',
  },
  {
    id: 'pedroGuerreiro',
    imageUrl: '/team/Pedro Guerreiro.jpg',
  },
]

export default function Team() {
  const t = useTranslations('team')

  return (
    <div className="bg-primary/5 py-24 sm:py-32" id="team">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {t('subtitle')}
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none xl:grid-cols-3"
        >
          {people.map((person) => (
            <li key={person.id} className="flex flex-col gap-6">
              <div className="relative">
                <img
                  className="aspect-[4/5] w-full rounded-2xl object-cover"
                  src={person.imageUrl}
                  alt={t(`people.${person.id}.name`)}
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold leading-8 text-white">
                    {t(`people.${person.id}.name`)}
                  </h3>
                  <p className="text-base leading-7 text-primary-foreground">
                    {t(`people.${person.id}.role`)}
                  </p>
                  <p className="text-sm text-gray-200">
                    {t(`people.${person.id}.experience`)}
                  </p>
                </div>
              </div>
              <div className="flex-auto">
                <p className="text-base leading-7 text-gray-600">
                  {t(`people.${person.id}.bio`)}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-16 flex justify-center">
          <Link
            href="#contact"
            className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors"
          >
            {t('contactButton')}
          </Link>
        </div>
      </div>
    </div>
  )
}