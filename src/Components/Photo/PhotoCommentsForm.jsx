import React from 'react';
import { ReactComponent as Enviar } from '../../Assets/sair.svg';
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate
import styles from './PhotoCommentsForm.module.css';

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const navigate = useNavigate(); // Use o hook useNavigate

  function handleIconClick() {
    navigate('/conta/estatisticas'); // Redirecione para "/conta" ao clicar no ícone
  }

  return (
    <div className={`${styles.form} ${single ? styles.single : ''}`}>
      <button className={styles.iconButton} onClick={handleIconClick}>
        <Enviar />
      </button>
    </div>
  );
};

export default PhotoCommentsForm;
