import { projetos } from '../../objetos/MeusProjetos.jsx'; // Importando o arquivo de projetos
import { Link } from 'react-router-dom';


function ListaProjetos() {

  return (

    <>

      <div className='grid grid-cols-2 gap-16 mt-16 auto-rows-[500px] mb-16 
        max-sm:grid-cols-1 max-sm:gap-8 max-sm:auto-rows-[400px]

      '>

        {projetos.map((projeto, index) => (

        // Aqui, para cada projeto, é criado um card com as informações do projeto
        // O card contém o título, a imagem, as tecnologias utilizadas e um botão para ver detalhes
          <div key={index} className="flex flex-col border-2 gap-5 bg-gray-50 p-1 border-gray-200 rounded-lg w-full h-full transition-transform transform hover:scale-105 max-sm:gap-3">

            <div className='max-sm:w-full flex flex-wrap justify-center'>

                <Link to={`/projetos/${index}`}>
                    <h3 className="text-2xl font-bold max-sm:text-lg">{projeto.titulo}</h3>
                </Link>

            </div>

            <div className='w-full h-64 rounded-md max-sm:h-[40%]'>
                <Link to={`/projetos/${index}`}> 
                    <img src={projeto.imagem} alt={projeto.titulo} className="object-scale-down w-full h-full" />
                </Link>
            </div>

        
            <div className='w-full flex flex-col gap-2 p-2'>

              <div className='flex flex-wrap justify-center gap-2'>
                  
                  {projeto.tecnologias.map((tecnologia, techIndex) => (

                      // Aqui, para cada tecnologia, é criado um container com o nome da tecnologia
                    <div key={techIndex} className="text-white font-bold p-2 bg-black  rounded-md text-xs">
                      {tecnologia}
                    </div>

                  ))}

                </div>

            </div>           

            <div className='w-[50%] p-2 m-auto border-2 border-gray-300 bg-black rounded-lg hover:opacity-85 '>
              <Link to={`/projetos/${index}`} className='w-full text-2xl text-white flex justify-center max-sm:text-sm font-bold'>Ver detalhes</Link>
            </div>

          </div>

        ))}
        
      </div>

    </>

  );

}

export default ListaProjetos;
