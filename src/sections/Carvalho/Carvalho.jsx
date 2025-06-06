import styles from './CarvalhoStyles.module.css';
import spideygab from '../../assets/spideygab.png';
import linkedinLight from '../../assets/linkedin light.png';
import linkedinDark from '../../assets/linkedin dark.png';
import githubLight from '../../assets/github light.png';
import githubDark from '../../assets/github dark.png';
import instagramLight from '../../assets/instagram light.png';
import instagramDark from '../../assets/instagram.png';
import CVen from '../../assets/Gabriel Carvalho Resume.pdf';
import CVfr from '../../assets/Gabriel Carvalho Resume.pdf';
import CVpt from '../../assets/Gabriel Carvalho Resume.pdf';
import {useTheme} from '../../common/ThemeContext';
import { useContext } from 'react';
import { LanguageContext } from '../../common/LanguageContext';

function Carvalho() {
  const { theme } = useTheme();
  const { texts } = useContext(LanguageContext);

  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const instagramIcon = theme === 'light' ? instagramLight : instagramDark;

  const currentCV = cvMap[texts.language];

  return (
    <section id='carvalho' className={styles.container}>
      <div className={styles.colorModeContainer}> 
        <img className={styles.carvalho} src={spideygab} alt="Profile Picture of Gabriel Vasconcelos" />
        {/* Removidos os ícones de troca de tema e linguagem */}
      </div>
    
      <div className={styles.info}>
        <h1 >Gabriel <br /> Vasconcelos</h1>
        <h2>{texts.header.role}</h2>
        <span>
          <a href="https://linkedin.com/in/gabrieldcv/" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn Icon" />
          </a>
          <a href="https://github.com/gabrieldcv/" target="_blank">
            <img src={githubIcon} alt="GitHub Icon" />
          </a>
        </span>
        <p className={styles.description}>{texts.header.description}</p>
        <a href={currentCV} download>
          <button className="hover">{texts.header.resume}</button>
        </a>
      </div>
    </section>
  );    
}

export default Carvalho;