function Header() {
  return (
    // Container que terá o conteúdo do header.
    // O conteúdo do header será um menu de navegação com links para as seções do site e a um logo que será as siglas do meu nome.
    <header className="flex bg-gray-950 w-full">
      <div className="w-64 m-5 flex justify-center items-center p-8 ">
        <p className="text-white text-6xl">VF</p>
      </div>

      <nav className="w-full flex justify-end items-center mr-40">
        <ul
          className="flex 
              flex-wrap text-white text-2xl space-x-8"
        >
          <li className="border-2 border-solid border-amber-50 p-4 rounded-md cursor-pointer hover:bg-gray-200 hover:text-black ">
            Página Inicial
          </li>
          <li className="border-2 border-solid border-amber-50 p-4 rounded-md cursor-pointer hover:bg-gray-200 hover:text-black">
            Sobre Mim
          </li>
          <li className="border-2 border-solid border-amber-50 p-4 rounded-md cursor-pointer hover:bg-gray-200 hover:text-black">
            Projetos
          </li>
          <li className="border-2 border-solid border-amber-50 p-4 rounded-md cursor-pointer hover:bg-gray-200 hover:text-black">
            Contato
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
