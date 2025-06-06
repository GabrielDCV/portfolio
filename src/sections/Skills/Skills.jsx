import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';
import { useContext } from 'react';
import { LanguageContext } from '../../common/LanguageContext';

function Skills() {
  const {theme} = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  const { texts } = useContext(LanguageContext);

  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>{texts.skills.title}</h1>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="Python" />
          <SkillList src={checkMarkIcon} skill="FastAPI" />
          <SkillList src={checkMarkIcon} skill="Gradio" />
          <SkillList src={checkMarkIcon} skill="Streamlit" />
          <SkillList src={checkMarkIcon} skill="Pytest" />
        </div>
        <hr />

        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="Tensorflow/Keras" />
          <SkillList src={checkMarkIcon} skill="Pytorch" />
          <SkillList src={checkMarkIcon} skill="Langchain" />
          <SkillList src={checkMarkIcon} skill="LlamaIndex" />
        </div>
        <hr />

        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="Pandas" />
          <SkillList src={checkMarkIcon} skill="SQL" />
          <SkillList src={checkMarkIcon} skill="Git" />
          <SkillList src={checkMarkIcon} skill="Boto3/AWS" />
        </div>
        <hr />
    </section>
  );
}

export default Skills;