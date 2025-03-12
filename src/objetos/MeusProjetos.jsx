import imgDacal from "../assets/imagens/dacal.jpg";
import imgEletrowonka from "../assets/imagens/eletrowonka.jpg";
import imgMeuOlharArtificial from "../assets/imagens/meu_olhar_artificial.jpg";
import imgSistemaDelivery from "../assets/imagens/sistema_delivery.jpg";


const projetos = [
  
    {
      titulo: "Orçamento de Produtos",
      descricao: "É com grande satisfação que compartilho mais um dos projetos que desenvolvi durante minha jornada acadêmica do 4º semestre do curso de ADS, na disciplina de Planejamento e Gerência de Projetos: um site de Orçamento de Produtos para um cliente real! Trabalhei em equipe com dois colegas, e minha principal responsabilidade de implementação foi o desenvolvimento do back-end, garantindo que o sistema fosse funcional, seguro e eficiente.",
      tecnologias: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      funcionalidades: [
        "Gerência de Produtos: inclusão de produtos no sistema com detalhes como imagem, nome, descrição, preço e categoria, além de edição e exclusão.",
        "Realização de Orçamentos: os clientes podem selecionar produtos e inseri-los em um orçamento, durante a execução de 3 passos.",
        "Gerenciamento de Orçamentos: a empresa pode visualizar, editar e aprovar o status dos orçamentos solicitados pelos clientes.",
        "Autenticação de Usuários: sistema de login para administradores, funcionários e clientes.",
        "Gerência de Contas: sistema de cadastro, edição e exclusão de contas de clientes e funcionários."
      ],
      desafios: "Integração do back-end em PHP com o banco de dados relacional para gerenciar os orçamentos, produtos e os usuários de maneira eficiente. Trabalho em equipe, com divisão de tarefas e integração das partes desenvolvidas por cada membro. Melhoria na lógica de programação e entendimento de fluxos de dados. Desenvolvimento de uma interface intuitiva para facilitar a experiência do usuário.",
      link: "",
      imagem: imgDacal
    },
    {
      titulo: "E-commerce de Produtos Tecnológicos",
      descricao: "Gostaria de compartilhar mais um projeto concluído durante minha jornada acadêmica, durante o período do 4º semestre do curso de ADS, na disciplina de WEB II: um Sistema de Gerência de Produtos Tecnológicos! Desta vez, fiquei responsável especialmente pelo back-end em PHP, obtendo a oportunidade de aprender e aplicar padrões de projeto (design patterns) para garantir um código mais organizado, escalável e de fácil manutenção; além da elaboração dos diagramas de classes UML.",
      tecnologias: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      paradigma: "Programação Orientada a Objetos",
      funcionalidades: [
        "Cadastro de Produtos: Inclusão, edição e exclusão de produtos tecnológicos no sistema.",
        "Gerenciamento de Pedidos: Criação e acompanhamento de pedidos feitos pelos clientes.",
        "Seleção de Pagamento: Escolha da forma de pagamento (PIX, cartão de crédito ou boleto).",
        "Cadastro de Usuários: Registro e autenticação de clientes e administradores."
      ],
      padroesDeProjeto: [
        "Singleton: para garantir uma única instância da conexão com o banco de dados.",
        "Factory Method: para delegar a criação de instâncias de produtos às subclasses correspondentes.",
        "Composite: para gerenciar os pedidos dos clientes de forma hierárquica.",
        "Facade: para simplificar operações complexas, como criação de pedido, gerência de produtos e cadastro de contas de clientes.",
        "Strategy: para definir a forma de pagamento dos pedidos (PIX, cartão de crédito ou boleto), com possíveis descontos a depender da escolha do usuário.",
        "Template Method: para definir o esqueleto de um algoritmo em uma operação, adiando a definição de alguns passos para as subclasses implementarem, utilizado no contexto das operações de CRUD do Sistema."
      ],
      link: "",
      imagem: imgEletrowonka
    },
    {
      titulo: "App para pessoas cegas e de baixa visão",
      descricao: "Gostaria de compartilhar com vocês o progresso, sendo desta vez a implementação do meu projeto de pesquisa desenvolvido durante meu curso de Análise e Desenvolvimento de Sistemas no IF Baiano Campus Catu. O projeto visa o desenvolvimento de um aplicativo com detecção de objetos orientado a comandos de voz personalizados que visa auxiliar pessoas cegas ou com baixa visão.",
      tecnologias: ["Kotlin"],
      funcionalidades: [
        "Navegação intuitiva: o usuário pode navegar pelas telas do aplicativo de maneira fácil e acessível.",
        "Captura de imagem: tirar fotos do ambiente ao redor diretamente pelo app.",
        "Repetição de resultados: pedir para repetir o resultado da detecção usando a voz.",
        "Comandos personalizados: interagir com o aplicativo através de comandos de voz personalizados.",
        "Comandos de voz integrados: todas as interações com o app podem ser feitas através de comandos de voz, sem a necessidade de aplicativos externos, como leitores de tela."
      ],
      comoFunciona: [
        "Foto do ambiente: o usuário captura uma foto do ambiente ao seu redor com o celular, dentro do próprio aplicativo.",
        "Comando de voz: o usuário informa por voz qual objeto deseja encontrar na imagem capturada.",
        "Análise da imagem: utilizando o modelo EfficientDet-Lite2, o aplicativo analisa a imagem e identifica os objetos presentes.",
        "Feedback ao usuário: o app comunica também por voz se o objeto específico está ou não presente na imagem, além dos demais objetos encontrados."
      ],
      link: "",
      imagem: imgMeuOlharArtificial    
    },
    {
      titulo: "Sistema Bancário",
      descricao: "Na data 02/06/2023, por meio da disciplina de LPOO (Linguagem de Programação Orientada a Objetos), do segundo semestre de ADS, dei início ao desenvolvimento de um Sistema Bancário. Feito totalmente no paradigma Orientado a Objetos, na linguagem Java, IDE NetBeans. As funcionalidades do sistema são: Cadastrar Cliente; Consultar Cliente; Excluir Cliente, Cadastrar Conta Bancária; Depositar; Sacar; Utilizar Cheque Especial; Consultar Conta Corrente; Consultar Conta Poupança e Calcular Rendimento. Nenhuma delas com integração com Banco de Dados, ainda, pois estou na fase de aprendizado.",
      tecnologias: ["Java"],
      desafios: "Foi a primeira vez que tive contato com um projeto tão complexo, usando o conceito de OO, durante o meu aprendizado na programação. Consegui finalizá-lo no dia 14/06/2023.",
      link: "",
      imagem: imgSistemaDelivery  
    },
    {
      titulo: "Sistema de Delivery",
      descricao: "Recentemente, especificamente na data 01/06/2023, por meio da disciplina de LPOO (Linguagem de Programação Orientada a Objetos) do segundo semestre em ADS, realizei o desenvolvimento de um Sistema de Delivery na linguagem Java, utilizando a IDE NetBeans. Inicialmente, foi um projeto 'básico', pois era apenas o princípio dos ensinamentos de Orientação a Objetos e eu estava iniciando no conhecimento da sintaxe desta linguagem de programação.",
      tecnologias: ["Java"],
      funcionalidades: [
        "Criar Pedido.",
        "Imprimir (mostrar na tela) um Pedido específico.",
        "Imprimir todos os pedidos.",
        "Pagar um Pedido.",
        "Cancelar Pedido.",
        "Verificar se o cliente é aniversariante.",
        "Encerramento do Sistema."
      ],
      desafios: "Essas funções foram feitas usando o conceito de OO (Orientação a Objetos). Com uma classe Pedido, possuindo atributos e métodos que possibilitaram a execução e o resultado esperado desse sistema. Foi algo 'simples', com uma interface básica, porém útil para o meu aprendizado e minha evolução na programação.",
      link: "",
      imagem: imgSistemaDelivery    
    }
  ];
  
  export { projetos };
  