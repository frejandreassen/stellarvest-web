import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Whistleblowing() {
    return (
        <div>
            <Header />
            <main className="">

                <div className="max-w-4xl mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold text-center mb-8">WHISTLEBLOWING</h1>

                    <div className="my-8 space-y-6 text-gray-700">
                        <p>
                            A informação contida neste website é propriedade da StellarVest Asset Management, Unipessoal Lda.” (“StellarVest Asset Management”), com sede na Avenida da República 90, Piso 2, 1600-206 Lisboa, matriculada na Conservatória do Registo Comercial de Lisboa sob o NIPC 514323736 e titular da licença de mediação imobiliária n.º 14298, e destina-se à divulgação da sua atividade.
                        </p>
                    </div>

                    <div className="my-8 space-y-6 text-gray-700">
                        <p>
                            No cumprimento da legislação em vigor sobre a matéria de denúncias, a StellarVest Asset Management disponibiliza os seguintes canais:
                        </p>
                        <p>
                            <strong>Email:</strong> <a href="mailto:eticapt@stellarvest.pt" className="text-primary">eticapt@stellarvest.pt</a>
                        </p>
                        <p>
                            <strong>Linha de Ética:</strong>
                        </p>
                        <p>
                            A/C Departamento de Compliance
                        </p>
                        <p>
                            Av. da República, 90, piso 2<br />
                            1600-206 Lisboa
                        </p>
                    </div>

                    <div className="my-8 space-y-6 text-gray-700">
                        <p>
                            A StellarVest Asset Management assegura a Proteção do Denunciante, cumprindo o disposto no artigo 22º da Lei 93/2021 de Dezembro, proibindo qualquer tipo de retaliação, ameaças ou ações que causem dano patrimoniais ou não patrimoniais ao denunciante.
                        </p>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
}
