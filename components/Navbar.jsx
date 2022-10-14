import Image from "next/image";
import styles from '../styles/Navbar.module.css'
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.client}>
          <div>
            <div className={styles.texts}>
            <div className={styles.text}>Celphone</div>
              <div className={styles.text}>922 535 040</div>
            </div>
          </div>
      </div>
      <div className={styles.client}>
        <h1>Baby <span>Kuna</span></h1>
        
      </div>
      <div className={styles.client}>
        <div className={styles.cart}>
        <div className={styles.counter}>2</div>
          <Image className="carrito" src="/img/cart.png" height= '40px' width='40px'  alt="Carrito de compras" />
          
        </div>
      </div>
  
    </div>
  );
};

export default Navbar;