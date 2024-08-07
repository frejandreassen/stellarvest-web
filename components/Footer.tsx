'use client'
const footerNavigation = {
  solutions: [
    { name: 'Gestão de Créditos', href: '#' },
    { name: 'Gestão de Ativos Imobiliários', href: '#' },
    { name: 'Advisory', href: '#' },
    { name: 'Servicing / Serviços Corporativos', href: '#' },
    { name: 'STC - Veículo de Securitização', href: '#' },
  ],
  support: [
    { name: 'Informação Legal', href: '#' },
    { name: 'Política de Cookies', href: '#' },
    { name: 'Política de Privacidade', href: '#' },
    { name: 'Whistleblowing', href: '#' },
  ],
  company: [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contacto', href: '#contact' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="mt-32 sm:mt-40">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <div className="border-t border-gray-900/10 pt-20 xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Soluções</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Suporte</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.support.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Empresa</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 xl:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-gray-900">Subscreva a nossa newsletter</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              As últimas notícias, artigos e recursos, enviados para sua caixa de entrada semanalmente.
            </p>
            <form className="mt-6 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Endereço de Email
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
              />
              <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Subscrever
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <p className="mt-8 text-xs leading-5 text-gray-500 md:mt-0">
            &copy; 2024 StellarVest Asset Management, Inc. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
