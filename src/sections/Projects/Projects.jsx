import styles from './ProjectsStyles.module.css';
import musique from '../../assets/musique.png';
import ProjectCard from '../../common/ProjectCard';
import secretNumber from '../../assets/Secret Number.jpg'
import brickStore from '../../assets/BrickStore Logo.png';
import { useContext } from 'react';
import { LanguageContext } from '../../common/LanguageContext';

function Projects() {

    const { texts } = useContext(LanguageContext);

  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>{texts.projects.title}</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard
                src={musique} link="" 
                h3="CESAR"
                p={texts.projects.musique}
            />

            <ProjectCard
                src={secretNumber} link="" 
                h3="EDEN"
                p={texts.projects.secret}
            />

            <ProjectCard
                src={brickStore} link="" 
                h3="NExT"
                p={texts.projects.brick}
            />

        </div>
    </section>

);
  
}

export default Projects