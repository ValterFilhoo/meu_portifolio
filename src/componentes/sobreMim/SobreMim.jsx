import Header from "../header/Header";
import RedesLaterais from "../asideRedesSociais/RedesLaterais";

function SobreMim() {
    return (

        <>

        <Header/>

        <main className="w-full mb-[10%]">
                
                <div className="relative">
                    <RedesLaterais/>
                </div>

            <section className="w-[80%] m-auto mt-20">

                {/*Titulo Principal */}
                <div className="flex justify-center w-full mt-20 mb-10">
                    <h1 className="text-5xl text-center border-2 font-bold font-serif break-words max-sm:text-4xl">Sobre Mim</h1>
                </div>

                {/*Parágro com as informações resumidas do tópico Sobre Mim. */}
                <div className="w-[80%] m-auto">
                    <p className="text-lg text-justify font-serif break-words">Olá! Sou Valter dos Santos Filho, desenvolvedor de sistemas web e estudante de Análise e Desenvolvimento de Sistemas no Instituto Federal Baiano (Campus Catu), localizado em Catu, Bahia. Estou atualmente no quinto semestre do curso, onde venho adquirindo conhecimento e habilidades em diversas áreas do desenvolvimento de software.</p>
                </div>

                {/*Titulo secundário */}
                <div className="flex justify-center w-full mt-20 mb-10">
                    <h2 className="text-4xl text-center font-bold font-serif break-words max-sm:text-3xl">Formação Acadêmica</h2>
                </div>

                {/*Parágrafo relacionado a formação academica */}
                <div className="w-[80%] m-auto">
                    <p className="text-lg text-justify font-serif break-words">Atualmente, estou cursando Análise e Desenvolvimento de Sistemas no Instituto Federal Baiano (IF Baiano), Campus Catu. Durante minha jornada acadêmica, tive a oportunidade de participar como competidor no evento Robocup 2023 em Salvador-Bahia ao longo de 5 dias, sendo uma experiência que foi extremamente enriquecedora e me proporcionou um aprendizado prático valioso.</p>
                </div>

                <div className="flex justify-center w-full mt-20 mb-10">
                    <h2 className="text-4xl text-center font-bold font-serif break-words max-sm:text-3xl">Experiência Profissional e Acadêmica</h2>
                </div>

                <div className="w-[80%] m-auto">
                    <p className="text-lg text-justify font-serif break-words">Estou em busca da minha primeira oportunidade profissional na área de desenvolvimento. No entanto, já tive a chance de trabalhar em vários projetos acadêmicos e pessoais que me permitiram aplicar e expandir meus conhecimentos:</p>
                </div>

                <div className="w-[80%] m-auto">
                    
                    <ul className="list-inside text-lg font-serif break-words">
                        
                        <div className="mt-5 mb-5">

                            <li className="mb-5">Projetos Autorais:</li>

                                <ul className="list-disc list-inside text-lg font-serif break-words">

                                    <li className="ml-20">Desenvolvi um protótipo de portal de notícias usando Figma. Inicialmente implementado com HTML e CSS, estou atualmente refazendo-o com React.js e Express.js.</li>

                                </ul>

                        </div>
                        
                        <div className="mt-5 mb-5">

                            <li className="mb-5">Desenvolvimento Web:</li>

                                <ul className="list-disc list-inside text-lg font-serif break-words">

                                    <li className="ml-20">Participei da criação de um site de vendas de acessórios, utilizando HTML, CSS, JavaScript, PHP e MySQL.</li>

                                </ul>

                        </div>

                        <div className="mt-5 mb-5">

                            <li className="mb-5">TCC:</li>

                            <ul className="list-disc list-inside text-lg font-serif break-words">

                                <li className="ml-20">Estou desenvolvendo um aplicativo Android com detecção de objetos orientado a comandos de voz personalizados, utilizando Kotlin, para auxiliar pessoas cegas e de baixa visão.</li>

                            </ul>

                        </div>
                        
                        <div className="mt-5 mb-5">


                            <li className="mb-5">Projetos Acadêmicos:</li>

                                <ul className="list-disc list-inside text-lg font-serif break-words">

                                    <li className="ml-20">Participei da implementação de dois sistemas web, sendo um utilizando HTML, CSS, JS, PHP e MySQL, e o outro fazendo uso das mesmas tecnologias, mas aplicando padrões de projetos.</li>

                                </ul>

                        </div>

                    </ul>

                </div>


                {/*Titulo secundário */}
                <div className="flex justify-center w-full mt-20 mb-10">
                    <h2 className="text-4xl text-center font-bold font-serif break-words max-sm:text-3xl">Interesses e Objetivos de Carreira</h2>
                </div>

                <div className="w-[80%] m-auto">
                    <p className="text-lg text-justify font-serif break-words">Desejo atuar como desenvolvedor full-stack ou mobile, ainda estou explorando minhas opções para decidir qual caminho seguir. A curto prazo, meu objetivo é conseguir minha primeira oportunidade profissional e começar a desenvolver uma carreira consistente. A longo prazo, pretendo continuar evoluindo e me especializando, contribuindo para projetos inovadores que façam a diferença na vida das pessoas.</p>
                </div>

                {/*Titulo secundário */}
                <div className="flex justify-center w-full mt-20 mb-10">
                    <h2 className="text-4xl text-center font-bold font-serif break-words max-sm:text-3xl">Habilidades e Competências</h2>
                </div>

                <div className="w-[80%] m-auto">

                    <ul className="list-disc text-lg font-serif break-words">
                        <li>Desenvolvimento Web: HTML, CSS, JavaScript, PHP, MySQL, React.js e Tailwind; </li>
                        <li>Desenvolvimento Mobile: Kotlin;</li>
                        <li>UI/UX Design: Princípios e práticas de design de interfaces;</li>
                        <li>Metodologias Ágeis: Conhecimento teórico de SCRUM e XP;</li>
                        <li>Banco de Dados: MySQL;</li>
                        <li>Orientação a Objetos: Conhecimento teórico e aplicação prática.</li>
                    </ul>

                </div>

            </section>

        </main>

        
        </>

    );
}

export default SobreMim;