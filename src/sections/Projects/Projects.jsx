import { useState } from 'react';
import styles from './ProjectsStyles.module.css';
import musique from '../../assets/musique.png';
import ProjectCard from '../../common/ProjectCard';
import secretNumber from '../../assets/Secret Number.jpg';
import brickStore from '../../assets/BrickStore Logo.png';
import { useContext } from 'react';
import { LanguageContext } from '../../common/LanguageContext';
import ProjectModal from '../../common/ProjectModal';

function Projects() {
  const { texts } = useContext(LanguageContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const projectDetails = {
    musique: {
      title: "CESAR",
      description: `• Trabalho desenvolvendo aplicações utilizando ferramentas e tecnologias de desenvolvimento com
dados, usando Python/FastAPI, com frameworks como Pandas e Langchain. Além disso, desenvolvo
testes unitários com Pytest.<br><br>
• Também trabalhei no desenvolvimento da aplicação GABI Chat SQL, utilizando Langchain, a
aplicação traduz linguagem natural em conteúdo SQL.<br><br>
• Trabalhei como desenvolvedor back-end e cientista de dados na implementação da aplicação GABI, o
qual consiste em um sistema de Revenue Management hoteleiro. Participando ativamente em aplicações
como Compset (Recomendador de Concorrentes) e Figex (Figure Explanation) que integram a GABI. <br><br>
<a href="https://www.cesar.org.br/" target="_blank" rel="noopener noreferrer">Link CESAR</a>`,
      image: musique
    },
    secret: {
      title: "EDEN",
      description: `• Trabalhei desenvolvendo a aplicação de detecção de palavra de ativação do projeto EDEN, que
consiste num Home Assistant com o objetivo de auxiliar crianças e adolescentes em seus estudos.<br><br>
• Ajudei no gerenciamento da equipe na tomada de decisões com relação ao futuro do projeto e nas
aplicações a serem desenvolvidas.<br><br>
• Desenvolvi o modelo de Rede Neural da aplicação EDEN para detecção de palavra de ativação.<br><br>
<a href="https://github.com/periclesbgf/home-assistant-model" target="_blank" rel="noopener noreferrer">Link EDEN</a>`,
      image: secretNumber
    },
    brick: {
      title: "NExT",
      description: `• Atuei como monitor do curso NExT, desenvolvido pela CESAR School com o objetivo de auxiliar
pessoas a ingressar na carreira tecnológica.<br><br>
• Responsável por auxiliar os estudantes a desenvolver as atividades e tirar dúvidas quando
necessário, além de, ajudar na construção do material de aula.<br><br>
• Trabalhei no curso de ‘Gerência de Configuração’ que consiste no estudo da utilização de aplicações
para gerenciar projetos, como Github e Git.<br><br>
<a href="https://www.cesar.school/curso-de-extensao/next-nova-experiencia-de-trabalho/" target="_blank" rel="noopener noreferrer">Link NExT</a>`,
      image: brickStore
    }
  };
  const openModal = (key) => {
    setModalContent(projectDetails[key]);
    setModalOpen(true);
  };

  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projetos e Experiências</h1>
      <div className={styles.projectsContainer}>
        <div onClick={() => openModal('musique')}>
          <ProjectCard
            src={musique}
            link=""
            h3="CESAR"
            p={texts.projects.musique}
          />
        </div>
        <div onClick={() => openModal('secret')} className={styles.centeredProject}>
          <ProjectCard
            src={secretNumber}
            link=""
            h3="EDEN"
            p={texts.projects.secret}
          />
        </div>
        <div onClick={() => openModal('brick')}>
          <ProjectCard
            src={brickStore}
            link=""
            h3="NExT"
            p={texts.projects.brick}
          />
        </div>
      </div>
      <ProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalContent.title}
        description={modalContent.description}
        image={modalContent.image}
      />
    </section>
  );
}

export default Projects;