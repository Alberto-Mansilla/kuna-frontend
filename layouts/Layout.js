import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CartSidebar from '../components/CartSidebar';
import { useState } from 'react';

const Layout = ({ children }) => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  return (
    <>
      <Navbar>
        <button onClick={() => setIsCartVisible(!isCartVisible)}>Cart</button>
      </Navbar>
      {children}
      {isCartVisible && <CartSidebar />}
      <Footer />
    </>
  );
};

export default Layout;