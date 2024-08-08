import { EnvelopeIcon, PhoneIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline'
import MapComponent from './Map';

export default function Contact() {
  const lisbonLocation = { lat: 38.7470753410278, lng:-9.147653390171962}; // Approximate coordinates for Av. da República 90, Lisboa
  const portoLocation = { lat: 41.17106201251337, lng: -8.642406436590408 }; // Approximate coordinates for Rua Eng Ferreira Dias 161, Porto

  return (
    <div className="bg-white py-24 sm:py-32" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Contactos</h2>
              <p className="mt-4 leading-7 text-gray-600">
                A StellarVest está disponível para as suas dúvidas, sugestões, elogios e reclamações.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Contacte-nos</h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div className="mt-1 flex items-center">
                    <dt className="sr-only">Email</dt>
                    <EnvelopeIcon className="h-5 w-5 text-gray-400 mr-2" aria-hidden="true" />
                    <dd>
                      <a href="mailto:info@stellarvest.pt" className="font-semibold text-primary">
                        info@stellarvest.pt
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1 flex items-center">
                    <dt className="sr-only">Phone number</dt>
                    <PhoneIcon className="h-5 w-5 text-gray-400 mr-2" aria-hidden="true" />
                    <dd>(+351) 216 079 074</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Horário de funcionamento</h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div className="mt-1 flex items-start">
                    <dt className="sr-only">Horário</dt>
                    <ClockIcon className="h-5 w-5 text-gray-400 mr-2 mt-1" aria-hidden="true" />
                    <dd>
                      <p>Segunda a Sexta-feira: 9h00 às 18h00</p>
                      <p>Sábado e Domingo: Encerrados</p>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className="pt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            <div className="flex flex-col h-full">
              <div className="flex-grow">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Sede - Escritório de Lisboa</h3>
                <div className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div className="flex items-start">
                    <MapPinIcon className="h-5 w-5 text-gray-400 mr-2 mt-1 flex-shrink-0" aria-hidden="true" />
                    <p>Av. da República 90, Piso 2 | 1600-206 Lisboa </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 h-96">
                <MapComponent center={lisbonLocation} zoom={15} height="100%" />
              </div>
            </div>
            <div className="flex flex-col h-full">
              <div className="flex-grow">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Escritório do Porto</h3>
                <div className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div className="flex items-start">
                    <MapPinIcon className="h-5 w-5 text-gray-400 mr-2 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p>CEP – Centro Empresarial do Porto</p>
                      <p>Rua Eng Ferreira Dias 161, Sala E308 | 4100-247 Porto</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 h-96">
                <MapComponent center={portoLocation} zoom={15} height="100%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}