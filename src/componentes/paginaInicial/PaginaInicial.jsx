import Header from "../header/Header";
import RedesLaterais from "../asideRedesSociais/RedesLaterais";
import Titulo from "../titulo/Titulo";
import Footer from "../footer/Footer";

function PaginaInicial() {

    return (

        <>

            <Header/>
            <main className="w-full mb-[10%]">

                <div className="relative">
                    <RedesLaterais/>
                </div>

                <div className="w-[80%] m-auto">

                    <section>

                        <Titulo titulo="Bem-vindo!"/>

                        <div className="w-[80%] m-auto">
                            <p className="text-lg text-justify font-serif break-words">Olá! Sou Valter dos Santos Filho, Desenvolvedor de Sistemas Web, com foco nas tecnologias: HTML, CSS, JavaScript e MySQL, e este é o meu portifólio. Aqui você encontrará informações sobre mim, meus projetos e como entrar em contato comigo.</p>	
                            <p className="text-lg text-justify font-serif max-sm:mt-[3%] sm:mt-[2%]">Fique à vontade para navegar pelo site e conhecer um pouco mais sobre o meu trabalho.</p>
                        </div>

                    </section>


                </div>
                
            </main>

            <Footer/>

        
        </>

    )

}

export default PaginaInicial;