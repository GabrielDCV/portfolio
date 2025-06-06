import styles from './ProjectModal.module.css';

function ProjectModal({ isOpen, onClose, title, description, image }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <img src={image} alt={title} className={styles.image} />
        <h2>{title}</h2>
        <p dangerouslySetInnerHTML={{ __html: description }} />
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}

export default ProjectModal;