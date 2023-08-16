import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container} >
      <div className={styles.item}>
        <Image src="/img/footer_img.jpg" objectFit="cover" layout="fill" alt="Footer image" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            La mejor selección de ropa de bebé hecha con algodón orgánico.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Contactanos</h1>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Nuestras redes sociales</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;