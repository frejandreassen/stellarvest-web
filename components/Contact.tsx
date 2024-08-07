export default function Contact() {
    return (
      <div className="bg-white py-24 sm:py-32" id="contact">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Contacte-nos</h2>
                <p className="mt-4 leading-7 text-gray-600">
                  A StellarVest está disponível para as suas dúvidas, sugestões, elogios e reclamações.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Sede - Escritório de Lisboa</h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <div>
                      <dt className="sr-only">Endereço</dt>
                      <dd>Av. da República 90, Piso 2, 1600-206 Lisboa</dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a href="mailto:info@stellarvest.pt" className="font-semibold text-primary">
                          info@stellarvest.pt
                        </a>
                      </dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd>(+351) 216 079 074</dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Escritório do Porto</h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <div>
                      <dt className="sr-only">Endereço</dt>
                      <dd>Rua Eng Ferreira Dias 161, Sala E308, 4100-247 Porto</dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a href="mailto:info@stellarvest.pt" className="font-semibold text-primary">
                          info@stellarvest.pt
                        </a>
                      </dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd>(+351) 216 079 074</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  