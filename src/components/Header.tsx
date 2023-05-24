import styles from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg'

export default function Header(){
  return (
    <strong className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
      Ignite Feed
    </strong>
  );
}