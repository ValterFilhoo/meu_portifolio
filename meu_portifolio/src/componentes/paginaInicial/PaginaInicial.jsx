import Header from "../header/Header";
import Footer from "../footer/Footer";

function PaginaInicial () {

    return (

        <>

            <Header/>
            <main className="w-full">

                <div className="w-[80%] m-auto">

                    <section>

                        <div className="flex justify-center items-center w-full mt-20 mb-20">
                            <h1 className="text-4xl font-bold">Valter dos Santos Filho - Desenvolvedor de Sistemas Web</h1>
                        </div>

                        <div>
                            <p>Olá! Meu nome é Valter dos Santos Filho, sou desenvolvedor de sistemas web e este é o meu portifólio. Aqui você encontrará informações sobre mim, meus projetos e como entrar em contato comigo. Fique à vontade para navegar pelo site e conhecer um pouco mais sobre o meu trabalho.</p>	
                        </div>

                    </section>


                </div>
                
            </main>

        
        </>

    )

}

export default PaginaInicial;