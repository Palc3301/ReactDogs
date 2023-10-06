import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Dogs } from '../Assets/feed.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>Facisa. Alguns direitos reservados.</p>
      <p>REACT PROJECT FROM REST CLASS</p>
    </footer>
  );
};

export default Footer;
