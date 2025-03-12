import Header from '../header/Header';
import ListaProjetos from '../listaProjetos/ListaProjetos';
import RedesLaterais from "../asideRedesSociais/RedesLaterais";

function Projetos() {


    return (

        <>
        
            <Header/>

            <main className='w-full h-full mt-20'>

                <RedesLaterais/>

                <section className='w-[80%] m-auto max-sm:w-[70%]'>

                    <div className='flex justify-center items-center flex-wrap'>
                        
                        <h1 className='text-5xl font-bold mb-16 max-sm:text-4xl'>Projetos</h1>

                        <p className='text-2xl text-justify max-sm:text-lg'>Aqui estão alguns dos projetos nos quais desenvolvi, incluindo projetos acadêmicos e pessoais. Cada um deles reflete minha dedicação ao desenvolvimento de soluções eficientes e inovadoras.</p>

                    </div>

                    <ListaProjetos/>

                </section>

            </main>

        </>

    )

}

export default Projetos;