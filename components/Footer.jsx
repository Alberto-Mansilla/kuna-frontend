import Image from "next/image";
import styles from "../styles/Footer.module.css";
import translations from '../languages';

const Footer = () => {
  return (
    <div className={styles.container} >
      <div className={styles.item}>
        <Image src="/img/footer_img.jpg" objectFit="cover" layout="fill" alt="Footer image" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            {translations.es.MOTTO_TEXT}
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>{translations.es.CONTACT_US}</h1>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>{translations.es.OUR_SOCIAL_NETWORKS}</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;