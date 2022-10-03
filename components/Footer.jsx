import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/footer_img.jpg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            LA MEJOR SELECCIÓN DE ROPA DE BEBÉ HECHA CON ALGODÓN ORGÁNICO
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>CONTÁCTANOS</h1>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>NUESTRAS REDES SOCIALES</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;