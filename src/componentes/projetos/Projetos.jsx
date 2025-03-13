import Header from '../header/Header';
import ListaProjetos from '../listaProjetos/ListaProjetos';
import RedesLaterais from "../asideRedesSociais/RedesLaterais";
import Titulo from '../titulo/Titulo';
import Footer from '../footer/Footer';

function Projetos() {


    return (

        <>
        
            <Header/>

            <main className='w-full h-full'>

                <RedesLaterais/>

                <section className='w-[80%] m-auto max-sm:w-[70%]'>

                    <div className='flex justify-center items-center flex-wrap'>
                        
                        <Titulo titulo='Projetos'/>

                        <p className='text-2xl text-justify max-sm:text-lg'>Aqui estão alguns dos projetos nos quais desenvolvi, incluindo projetos acadêmicos e pessoais. Cada um deles reflete minha dedicação ao desenvolvimento de soluções eficientes e inovadoras.</p>

                    </div>

                    <ListaProjetos/>

                </section>

            </main>

            <Footer/>

        </>

    )

}

export default Projetos;