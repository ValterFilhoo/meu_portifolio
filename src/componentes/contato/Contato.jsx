import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Modal from 'react-modal';
import Header from '../header/Header';
import RedesLaterais from '../asideRedesSociais/RedesLaterais';
import Footer from '../footer/Footer';

Modal.setAppElement('#root'); // Defina o elemento principal do app para acessibilidade

function Contato() {

  const form = useRef();
  const [modalEstaAberto, setModalEstaAberto] = useState(false);
  const [mensagemModal, setMensagemModal] = useState('');

  // Função para abrir o modal com uma mensagem
  const abrirModal = (mensagem) => {
    setMensagemModal(mensagem);
    setModalEstaAberto(true);
  };

  // Função para fechar o modal
  const fecharModal = () => {
    setModalEstaAberto(false);
    setMensagemModal('');
  };

  // Função para enviar o e-mail usando EmailJS
  const enviarEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_5kw02cl', 'template_zci0qgr', form.current, 'm_RZxmIgDjZrJZznW')
      .then((result) => {
          console.log(result.text);
          abrirModal("Mensagem enviada com sucesso!");
      }, (error) => {
          console.log(error.text);
          abrirModal("Houve um erro ao enviar a mensagem. Tente novamente mais tarde.");
      });
  };

  return (

    <>

      <Header />
      <RedesLaterais />
      <main className='w-full h-full flex justify-center items-center mt-20 mb-6'>

        <section className='w-[70%] m-auto'>

            <div className='mb-10'>
                <h1 className='text-5xl font-bold text-center'>Contato</h1>
            </div>
          
            <div>
                <p className='text-center text-lg mb-8'>Se você tem alguma pergunta ou gostaria de entrar em contato, por favor preencha o formulário abaixo. Estou em busca de minha primeira oportunidade profissional e ficarei feliz em conversar contigo!</p>
            </div>
          
          {/* Formulário de contato */}
          <form ref={form} onSubmit={enviarEmail} className=' w-[80%] m-auto flex flex-col gap-4'>
            
            <input type='text' name='name' placeholder='Nome Completo' className='border-2 border-gray-200 p-2 rounded focus:outline-none' maxLength={"100"} required/>
            <input type='email' name='email' placeholder='E-mail' className='border-2 border-gray-200 p-2 rounded focus:outline-none' maxLength="50" required/>
            <input type='text' name='subject' placeholder='Assunto' className='border-2 border-gray-200 p-2 rounded focus:outline-none' required/>
            <textarea name='message' placeholder='Sua mensagem' className='border-2 border-gray-200 p-2 rounded h-32 resize-none focus:outline-none'maxLength="500" required></textarea>
            <button type='submit' className='bg-black text-2xl font-bold text-white p-2 rounded w-[50%] m-auto cursor-pointer max-sm:text-base focus:opacity-80'>Enviar</button>

          </form>

          {/* Seção de redes sociais */}
          <div className='mt-8 flex justify-center items-center flex-col'>

            <h2 className='text-3xl font-bold mb-4 max-sm:text-2xl'>Minhas Redes Sociais</h2>

            <div className='flex gap-4 justify-center'>
              <a href='https://www.linkedin.com/in/valter-dos-santos-filho-876073256'  target='_blank' className='text-2xl max-sm:text-base'>LinkedIn</a>
              <a href='https://github.com/ValterFilhoo' target='_blank'  className='text-2xl max-sm:text-base'>GitHub</a>
            </div>

          </div>

          {/* Modal para exibir mensagens */}
          <Modal
            isOpen={modalEstaAberto}
            onRequestClose={fecharModal}
            contentLabel="Mensagem"
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-lg max-w-lg w-full shadow-lg z-50"
            overlayClassName="fixed inset-0 bg-opacity-90 z-40"
                      >
            <h2 className="mb-4 text-lg text-center">{mensagemModal}</h2>
            <div className="flex justify-center">
              <button onClick={fecharModal} className="bg-black text-white p-2 rounded cursor-pointer">Fechar</button>
            </div>
          </Modal>

        </section>

      </main>

      <Footer />

    </>
    
  );

}

export default Contato;