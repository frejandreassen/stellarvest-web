import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LoginPage() {
  const t = useTranslations('LoginPage');

  const portals = [
    {
      nameKey: 'realEstateWebsite',
      href: 'https://realestate.stellarvest.pt/',
      imageUrl: '/lisbon_areal_image.jpg', // Placeholder, can be changed
      descriptionKey: 'realEstateDescription',
    },
    {
      nameKey: 'brokersPortal',
      href: 'https://portal.stellarvest.pt/',
      imageUrl: '/business-corporate-colleagues-co-workers-job-conce-2023-11-27-04-51-00-utc.png', // Placeholder
      descriptionKey: 'brokersPortalDescription',
    },
    /*{
      nameKey: 'investorPortal',
      href: '',  // https://investor.stellarvest.pt/
      imageUrl: '/corporate-moderl-office-with-laptop-on-desk-2023-11-27-05-14-15-utc.png', // Placeholder
      descriptionKey: 'investorPortalDescription',
    },*/
  ];

  return (
    <>
      <Header />
      <main className="bg-primary/5 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              {t('title')}
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              {t('subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portals.map((portal) => (
              <div
                key={portal.nameKey}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={portal.imageUrl}
                    alt={t(portal.nameKey)}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    {t(portal.nameKey)}
                  </h2>
                  <p className="text-gray-600 mb-4 text-sm">
                    {t(portal.descriptionKey)}
                  </p>
                  <Link
                    href={portal.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors duration-300"
                  >
                    {t('accessPortal')}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/" className="text-primary hover:text-primary-dark font-medium">
              &larr; {t('backToHome')}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}