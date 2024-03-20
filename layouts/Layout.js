import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CartSidebar from '../components/CartSidebar';
import { useState } from 'react';
import styles from "../styles/Cart.module.css";

const Layout = ({ children }) => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <>
      <Navbar toggleCart={toggleCartVisibility} />
      {children}
      {isCartVisible && (
        <CartSidebar
          isCartVisible={isCartVisible}
          className={`${styles.cartSidebar} ${isCartVisible ? styles.cartSidebarVisible : ''}`}
        />
      )}
      <Footer />
    </>
  );
};

export default Layout;
