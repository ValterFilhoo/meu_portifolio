import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { RiCloseLargeLine } from "react-icons/ri";

function Header() {

  const [menuClicado, setMenuClicado] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Ícone de menu que será exibido apenas em telas menores que 640px.
  // Se o menu for clicado, depedendo do seu estado, o ícone será o de fechar o menu, caso contrário, será o de abrir o menu.
  const iconeMobile = menuClicado ? (
    <RiCloseLargeLine size={50} color="white" className="mr-10 sm:flex md:flex lg:hidden" />
  ) : (
    <TiThMenu size={50} color="white" className="mr-10 sm:flex md:flex lg:hidden" />
  );

  // Função para navegação. Verifica se a rota atual é diferente da rota desejada antes de navegar.
  const handleNavigation = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
    setMenuClicado(false); // Fecha o menu após a navegação
  };

  return (

    // Container que terá o conteúdo do header.
    // O conteúdo do header será um menu de navegação com links para as seções do site e um logo que será as siglas do meu nome.
    <header className="flex bg-black w-full">
      
      <div className="w-[20%] m-5 flex justify-center items-center p-8">
        <p className="font-serif text-white text-5xl">VF</p>
      </div>

      <nav className="w-[70%] sm:w-[100%] sm:mr-0 flex justify-end items-center">

        {/* Ícone de menu que será exibido apenas em telas menores que 640px. */}
        <div onClick={() => setMenuClicado(!menuClicado)} className="cursor-pointer">
          {iconeMobile}
        </div>

        <ul className="flex flex-wrap gap-10 font-serif text-white text-lg mr-20 max-sm:hidden sm:hidden md:hidden lg:flex rounded-lg">

          <li className="flex items-center border-2 border-solid border-amber-50 rounded-lg p-2 cursor-pointer hover:bg-gray-200 hover:text-black">
            <Link to="/" onClick={() => handleNavigation('/')}>Página Inicial</Link>
          </li>

          <li className="border-2 border-solid border-amber-50 rounded-lg p-2 cursor-pointer hover:bg-gray-200 hover:text-black">
            <Link to="/sobre-mim" onClick={() => handleNavigation('/sobre-mim')}>Sobre Mim</Link>
          </li>

          <li className="border-2 border-solid border-amber-50 rounded-lg p-2 cursor-pointer hover:bg-gray-200 hover:text-black">
            <Link to="/projetos" onClick={() => handleNavigation('/projetos')}>Projetos</Link>
          </li>

          <li className="border-2 border-solid border-amber-50 rounded-lg p-2 cursor-pointer hover:bg-gray-200 hover:text-black">
            <Link to={"/contato"} onClick={() => handleNavigation("/contato")}>Contato</Link>
          </li>

        </ul>

      </nav>

      <nav>

        <ul className={`flex flex-col ${menuClicado ? "flex items-center w-[40%] bg-gray-100 absolute shadow-2xl sm:right-0 sm:top-41 md:top-41 p-4 gap-5 rounded-md max-sm:right-0 max-sm:top-38 max-sm:w-[50%]" : "hidden"}`}>

          <li className="font-serif text-black text-2xl">
            <Link to="/" onClick={() => handleNavigation('/')}>Página Inicial</Link>
          </li>

          <li className="font-serif text-black text-2xl">
            <Link to="/sobre-mim" onClick={() => handleNavigation('/sobre-mim')}>Sobre Mim</Link>
          </li>

          <li className="font-serif text-black text-2xl">
            <Link to={"/projetos"} onClick={() => handleNavigation('/projetos')}>Projetos</Link>
          </li>
          
          <li className="font-serif text-black text-2xl">
            <Link to={"/contato"} onClick={() => handleNavigation("/contato")}>Contato</Link>
          </li>

        </ul>

      </nav>

    </header>
    
  );

}

export default Header;
