export const translations = {
    en: {
      navigation: {
        home: 'Home',
        about: 'About Us',
        services: 'Services',
        contact: 'Contact'
      },
      hero: {
        specialist: 'Specialist in complex asset management',
        welcome: 'Welcome to StellarVest Asset Management',
        tagline: 'Your Assets, Our Expertise',
        learnMore: 'Learn More',
        contactUs: 'Contact Us',
      }
    },
    pt: {
      navigation: {
        home: 'Home',
        about: 'Sobre Nós',
        services: 'Serviços',
        contact: 'Contacto'
      },
      hero: {
        specialist: 'Especialista na gestão de ativos complexos',
        welcome: 'Bem-vindo à StellarVest Asset Management',
        tagline: 'Your Assets, Our Expertise',
        learnMore: 'Saber mais',
        contactUs: 'Contacte-nos',
      }
    }
  }
  
  export type Language = 'en' | 'pt'
  export type TranslationKey = keyof typeof translations.en