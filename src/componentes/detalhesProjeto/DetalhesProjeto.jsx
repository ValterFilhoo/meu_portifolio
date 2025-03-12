import { useParams } from 'react-router-dom';
import { projetos } from '../../objetos/MeusProjetos.jsx'; // Importando o arquivo de projetos
import Header from '../header/Header.jsx';
import RedesLaterais from '../asideRedesSociais/RedesLaterais.jsx';

function DetalhesProjeto() {
    
  const { id } = useParams();
  const projeto = projetos[id];

  if (!projeto) {
    return <div>Projeto não encontrado.</div>;
  }

  return (

    <>

        <Header/>

        <RedesLaterais/>

        <main>

            <section className='w-[80%] max-sm:w-[70%] m-auto mt-20 mb-6'>

                <div className="flex flex-col">

                    <div className='flex justify-center items-center flex-wrap mb-10'>

                        <h2 className="text-4xl font-bold mb-4 max-sm:text-4xl max-sm:w-full text-center ">{projeto.titulo}</h2>

                    </div>
                    
                    <div className='w-[70%] h-[400px] m-auto mb-12 max-sm:h-[200px] max-sm:w-full 
                    max-sm:border-2 max-sm:border-gray-200'>

                        <img src={projeto.imagem} alt={projeto.titulo} className="w-full h-full object-scale-down" />

                    </div>
                    
                    <div className='w-full flex justify-center text-justify flex-wrap mt-8 mb-6'>

                        <p className="text-justify text-lg"><strong>Descrição:</strong> {projeto.descricao}</p>

                    </div>
                    
                    <div className='w-full flex flex-col gap-2 mb-6'>

                        <div>

                            <h4 className="text-xl font-bold">Tecnologias:</h4>

                        </div>

                        
                        <div className='flex flex-wrap gap-2'>

                            {projeto.tecnologias.map((tecnologia, index) => (

                            <div key={index} className="px-2 py-1 bg-black text-white rounded-md text-lg">
                                {tecnologia}
                            </div>

                        ))}
                        
                        </div>

                    </div>
                

                    <div className='mb-6 text-justify'>

                        <h4 className="text-xl font-bold mb-2">Funcionalidades:</h4>

                        <ul className="list-disc list-inside">

                            {projeto.funcionalidades.map((funcionalidade, index) => (
                            <li key={index} className='text-lg text-justify'>{funcionalidade}</li>
                            ))}

                        </ul>


                    </div>

                    <p><strong className='text-lg'>Desafios:</strong> {projeto.desafios}</p>

                </div>

            </section>

        </main>

        
    </>
   
  );
  
}

export default DetalhesProjeto;
