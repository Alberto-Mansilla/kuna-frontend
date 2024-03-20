// Navbar component
import styles from "../styles/Navbar.module.css";
import Logo from "../components/Logo.jsx"
import NavbarMenu from "../components/NavbarMenu.jsx"
import LoginBar from "../components/LoginBar.jsx"

const Navbar = ({ toggleCart }) => {
    return (
        <div className={styles.container}>
            <Logo imageUrl="/img/logo_kuna.png" logoClass="logo" />
            <NavbarMenu />
            <LoginBar toggleCart={toggleCart} />
        </div>
    );
};

export default Navbar;
