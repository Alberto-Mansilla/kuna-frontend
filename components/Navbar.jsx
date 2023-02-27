import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Logo from "../components/Logo.jsx"
import NavbarMenu from "../components/NavbarMenu.jsx"
import Link from "next/link";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <Logo imageUrl="/img/logo_kuna.png" logoClass="logo" />
            
            <NavbarMenu/>

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
