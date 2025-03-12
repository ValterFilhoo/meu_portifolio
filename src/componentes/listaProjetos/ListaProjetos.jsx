import { projetos } from '../../objetos/MeusProjetos.jsx'; // Importando o arquivo de projetos
import { Link } from 'react-router-dom';


function ListaProjetos() {

  return (

    <>

      <div className='grid grid-cols-2 gap-16 mt-16 auto-rows-[500px] mb-16 
        max-sm:grid-cols-1

      '>

        {projetos.map((projeto, index) => (

        // Aqui, para cada projeto, é criado um card com as informações do projeto
        // O card contém o título, a imagem, as tecnologias utilizadas e um botão para ver detalhes
          <div key={index} className="flex flex-col border-2 gap-5 bg-gray-50 p-1 border-white rounded-lg w-full h-full transition-transform transform hover:scale-105">

            <div>

                <Link to={`/projetos/${index}`}>
                    <h3 className="text-center text-2xl font-bold">{projeto.titulo}</h3>
                </Link>

            </div>

            <div className='w-full h-64 rounded-md'>
                <Link to={`/projetos/${index}`}> 
                    <img src={projeto.imagem} alt={projeto.titulo} className="object-scale-down w-full h-full" />
                </Link>
            </div>

            <div>

              <div className='flex flex-wrap justify-center gap-2'>
                
                {projeto.tecnologias.map((tecnologia, techIndex) => (

                    // Aqui, para cada tecnologia, é criado um badge com o nome da tecnologia
                  <div key={techIndex} className="px-2 py-1 bg-black text-white rounded-md text-sm">
                    {tecnologia}
                  </div>

                ))}

              </div>

            </div>

            <div className='w-[50%] p-2 m-auto border-2 border-gray-300 bg-black rounded-lg hover:opacity-85'>
              <Link to={`/projetos/${index}`} className='w-full text-2xl max-sm:text-sm text-white flex justify-center'>Ver detalhes</Link>
            </div>

          </div>

        ))}
        
      </div>

    </>

  );

}

export default ListaProjetos;
