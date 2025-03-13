import imgDacal from "../assets/imagens/dacal_img.jpg";
import imgEletrowonka from "../assets/imagens/eletrowonka.jpg";
import imgMeuOlharArtificial from "../assets/imagens/meu_olhar_artificial.jpg";
import imgSistemaDelivery from "../assets/imagens/sistema_delivery.jpg";
import imgPanoramaCatuense from "../assets/imagens/panorama_catuense.jpg";
import imgSistemaBancario from "../assets/imagens/sistema_bancario.jpg";

const projetos = [

  {
    titulo: "Orçamento de Produtos",
    descricao: "Desenvolvi durante minha jornada acadêmica do 4º semestre do curso de ADS, na disciplina de Planejamento e Gerência de Projetos: um site de Orçamento de Produtos para um cliente real! Trabalhei em equipe com dois colegas, e minha principal responsabilidade de implementação foi o desenvolvimento do back-end, garantindo que o sistema fosse funcional, seguro e eficiente.",
    tecnologias: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    funcionalidades: [
      "Gerência de Produtos: inclusão de produtos no sistema com detalhes como imagem, nome, descrição, preço e categoria, além de edição e exclusão.",
      "Realização de Orçamentos: os clientes podem selecionar produtos e inseri-los em um orçamento, durante a execução de 3 passos.",
      "Gerenciamento de Orçamentos: a empresa pode visualizar, editar e aprovar o status dos orçamentos solicitados pelos clientes.",
      "Autenticação de Usuários: sistema de login para administradores, funcionários e clientes.",
      "Gerência de Contas: sistema de cadastro, edição e exclusão de contas de clientes e funcionários."
    ],
    padroesDeProjeto: [],
    comoFunciona: ["Cadastro de Produtos: inclusão de produtos no sistema com detalhes como imagem, nome, descrição, preço e categoria, além de edição e exclusão.",
      " Realização de Orçamentos: os clientes podem selecionar produtos e inseri-los em um orçamento, durante a execução de 3 passos.",
      " Gerenciamento de Orçamentos: a empresa pode visualizar, editar e aprovar o status dos orçamentos solicitados pelos clientes.",],
    desafios: "integração do back-end em PHP com o banco de dados relacional para gerenciar os orçamentos, produtos e os usuários de maneira eficiente. Trabalho em equipe, com divisão de tarefas e integração das partes desenvolvidas por cada membro. Melhoria na lógica de programação e entendimento de fluxos de dados. Desenvolvimento de uma interface intuitiva para facilitar a experiência do usuário.",
    link: "",
    imagem: imgDacal
  },

  {
    titulo: "E-commerce Tecnológico",
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
    comoFunciona: ["Cadastro de Produtos: inclusão de produtos individuais ou kits de produtos no sistema com detalhes como imagem, nome, descrição, quantidade, preço e categoria, além de edição e exclusão.", " Gerenciamento de Pedidos: criação de pedidos com produtos selecionados pelos clientes.", " Seleção de Pagamento: escolha da forma de pagamento (PIX, cartão de crédito ou boleto), com possíveis descontos a depender da escolha do usuário.", " Cadastro de Usuários: registro e autenticação de clientes e administradores, com diferentes permissões de acesso ao sistema."],
    desafios: "implementação dos Padroes de Projeto para garantir um código mais organizado, escalável e de fácil manutenção. Desenvolvimento de uma interface intuitiva para facilitar a experiência do usuário. Integração do back-end em PHP com o banco de dados relacional para gerenciar os produtos e os pedidos de maneira eficiente.",
    link: "",
    imagem: imgEletrowonka
  },

  {
    titulo: "App — Meu Olhar Artificial",
    descricao: "Gostaria de compartilhar com vocês o progresso, sendo desta vez a implementação do meu projeto de pesquisa desenvolvido durante meu curso de Análise e Desenvolvimento de Sistemas no IF Baiano Campus Catu. O projeto visa o desenvolvimento de um aplicativo com detecção de objetos orientado a comandos de voz personalizados que visa auxiliar pessoas cegas ou com baixa visão.",
    tecnologias: ["Kotlin"],
    funcionalidades: [
      "Captura de imagem: tirar fotos do ambiente ao redor diretamente pelo app.",
      "Detecção de objetos: identificar objetos presentes na imagem capturada.",
      "Repetição de resultados: pedir para repetir o resultado da detecção usando a voz.",
      "Comandos personalizados: interagir com o aplicativo através de comandos de voz personalizados.",
      "Comandos de voz integrados: todas as interações com o app podem ser feitas através de comandos de voz, sem a necessidade de aplicativos externos, como leitores de tela."
    ],
    padroesDeProjeto: [],
    comoFunciona: [
      "Foto do ambiente: o usuário captura uma foto do ambiente ao seu redor com o celular, dentro do próprio aplicativo.",
      " Comando de voz: o usuário informa por voz qual objeto deseja encontrar na imagem capturada.",
      " Análise da imagem: utilizando o modelo EfficientDet-Lite2, o aplicativo analisa a imagem e identifica os objetos presentes.",
      " Feedback ao usuário: o app comunica também por voz se o objeto específico está ou não presente na imagem, além dos demais objetos encontrados."
    ],
    desafios: "o aplicativo está sendo desenvolvido em Kotlin, uma linguagem de programação moderna e intuitiva, mas que eu ainda não tinha experiência. A integração do modelo de Machine Learning EfficientDet-Lite2 para a detecção de objetos foi um grande desafio no inicio. A implementação de comandos de voz personalizados também está sendo um desafio, pois exige a integração do recurso de reconhecimento de voz e o processamento dos comandos. O aplicativo ainda está em fase de desenvolvimento, mas estou muito animado com o progresso e com o impacto positivo que ele pode trazer para a vida das pessoas.",
    link: "",
    imagem: imgMeuOlharArtificial    
  },

  {
    titulo: "Portal — Panorama Catuense",
    descricao: "Para a finalização do primeiro semestre da faculdade de Análise e Desenvolvimento de Sistemas, ofertado pelo IF Baiano Campus Catu, a disciplina Interação Homem Máquina recomendou como projeto final para mim e meu colega de dupla da turma, a prototipação na ferramenta Figma de um portal de notícias da cidade de Catu e Região, além da sua implementação em HTML e CSS. Possuindo como pontuação máxima o valor 100, conseguimos atingir 93 pontos em nosso projeto.",
    tecnologias: ["Figma", "HTML", "CSS"],
    funcionalidades: [
      "Página Inicial: exibição das principais notícias do portal.",
      "Notícias: visualização das notícias completas, com imagens e textos.",
      "Categorias: navegação por categorias de notícias, como Política, Esportes e Cultura.",
    ],
    padroesDeProjeto: [],
    comoFunciona: "Os usuários podem acessar o portal de notícias e visualizar as principais notícias do dia, com imagens e textos completos. Além disso, é possível navegar por categorias de notícias, como Política, Esportes e Cultura, para encontrar notícias específicas.",
    desafios: "trabalhar com a ferramenta Figma para criar um protótipo interativo. Implementar o design criado no Figma utilizando HTML e CSS. Aprendizado sobre a importância da usabilidade e da experiência do usuário na criação de interfaces web.",
    link: "",
    imagem: imgPanoramaCatuense
  },

  {
    titulo: "Sistema Bancário",
    descricao: "Na data 02/06/2023, por meio da disciplina de LPOO (Linguagem de Programação Orientada a Objetos), do segundo semestre de ADS, dei início ao desenvolvimento de um Sistema Bancário. Feito totalmente no paradigma Orientado a Objetos, na linguagem Java, IDE NetBeans. As funcionalidades do sistema são: Cadastrar Cliente; Consultar Cliente; Excluir Cliente, Cadastrar Conta Bancária; Depositar; Sacar; Utilizar Cheque Especial; Consultar Conta Corrente; Consultar Conta Poupança e Calcular Rendimento. Nenhuma delas com integração com Banco de Dados, ainda, pois estou na fase de aprendizado.",
    tecnologias: ["Java"],
    funcionalidades: [
      "Cadastrar Cliente.",
      "Consultar Cliente.",
      "Excluir Cliente.",
      "Cadastrar Conta Bancária.",
      "Depositar.",
      "Sacar.",
      "Utilizar Cheque Especial.",
      "Consultar Conta Corrente.",
      "Consultar Conta Poupança.",
      "Calcular Rendimento."
    ],
    padroesDeProjeto: [],
    comoFunciona: ["Cadastro de Cliente: inclusão de clientes no sistema com detalhes como nome, CPF, endereço, telefone e e-mail, além de edição e exclusão.", " Cadastro de Conta Bancária: criação de contas correntes e poupanças para os clientes, com detalhes como número da conta, saldo, limite do cheque especial e rendimento da poupança.", " Depositar: adição de valores ao saldo da conta corrente ou poupança.", " Sacar: retirada de valores do saldo da conta corrente ou poupança.", "Utilizar Cheque Especial: adição de valores ao saldo da conta corrente, mesmo que ultrapasse o saldo disponível.", " Consultar Conta Corrente: visualização do saldo e do limite do cheque especial da conta corrente.", " Consultar Conta Poupança: visualização do saldo e do rendimento da poupança.", " Calcular Rendimento: cálculo do rendimento da poupança, baseado na taxa de juros."],
    desafios: "foi a primeira vez que tive contato com um projeto tão complexo, usando o conceito de OO, durante o meu aprendizado na programação. Consegui finalizá-lo no dia 14/06/2023.",
    link: "",
    imagem: imgSistemaBancario 
  },

  {
    titulo: "Sistema de Delivery",
    descricao: "Especificamente na data 01/06/2023, por meio da disciplina de LPOO (Linguagem de Programação Orientada a Objetos) do segundo semestre em ADS, realizei o desenvolvimento de um Sistema de Delivery na linguagem Java, utilizando a IDE NetBeans. Inicialmente, foi um projeto 'básico', pois era apenas o princípio dos ensinamentos de Orientação a Objetos e eu estava iniciando no conhecimento da sintaxe desta linguagem de programação.",
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
    padroesDeProjeto: [],
    comoFunciona: ["Criar Pedido: inclusão de pedidos no sistema com detalhes como nome do cliente, endereço de entrega, produtos escolhidos e valor total.", " Imprimir Pedido: visualização dos detalhes de um pedido específico, como nome do cliente, endereço de entrega, produtos escolhidos e valor total.", " Imprimir todos os pedidos: listagem de todos os pedidos realizados, com detalhes de cada um.", "Pagar Pedido: confirmação do pagamento de um pedido específico.", "Cancelar Pedido: exclusão de um pedido específico.", "Verificar Aniversariante: identificação se o cliente que fez o pedido é aniversariante do dia.", "Encerramento do Sistema: finalização do sistema de delivery."],
    desafios: "Essas funções foram feitas usando o conceito de OO (Orientação a Objetos). Com uma classe Pedido, possuindo atributos e métodos que possibilitaram a execução e o resultado esperado desse sistema. Foi algo 'simples', com uma interface básica, porém útil para o meu aprendizado e minha evolução na programação.",
    link: "",
    imagem: imgSistemaDelivery    
  }

];

export { projetos };
