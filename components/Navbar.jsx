import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.container}>

            <div className={styles.item}>
                <div className={styles.texts}>
                    <Image src="/img/logo_kuna.png" alt="" width="10000px" height="10000px" />
                </div>
            </div>

            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Home</li>
                    <li className={styles.listItem}>Catálogo</li>
                    <li className={styles.listItem}>Accesorios</li>
                    <li className={styles.listItem}>Sale</li>
                    <li className={styles.listItem}>Conócenos</li>
                </ul>
            </div>

            <div className={styles.item}>
                <ul className={styles.list}>
                <li className={styles.listItem}>Sign in</li>
                <li className={styles.listItem}>Search</li>
                </ul>
                <div className={styles.cart}>
                    <Image src="/img/logo_cart.png" alt="" width="40px" height="40px" />
                    <div className={styles.counter}>2</div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;
