import Header from "../header/Header";
import RedesLaterais from "../asideRedesSociais/RedesLaterais";

function PaginaInicial () {

    return (

        <>

            <Header/>
            <main className="w-full">

                <div className="relative">
                    <RedesLaterais/>
                </div>

                <div className="w-[80%] m-auto">

                    <section>

                        <div className="flex justify-center items-center flex-wrap w-[100%] mt-20 mb-20">
                            <h1 className="text-5xl font-bold font-serif break-words max-sm:text-4xl">Bem-vindo!</h1>
                        </div>

                        <div className="w-[80%] m-auto">
                            <p className="text-lg text-justify font-serif break-words">Olá! Sou Valter dos Santos Filho, Desenvolvedor de Sistemas Web, com foco nas tecnologias: HTML, CSS, JavaScript e MySQL, e este é o meu portifólio. Aqui você encontrará informações sobre mim, meus projetos e como entrar em contato comigo.</p>	
                            <p className="text-lg text-justify font-serif max-sm:mt-[3%] sm:mt-[2%]">Fique à vontade para navegar pelo site e conhecer um pouco mais sobre o meu trabalho.</p>
                        </div>

                    </section>


                </div>
                
            </main>

        
        </>

    )

}

export default PaginaInicial;