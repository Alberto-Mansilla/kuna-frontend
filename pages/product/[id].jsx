
import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

const Product = ({product}) => {

  const productSize = ["NEWBORN", "BABY", "TODDLER"]
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div className={styles.container}> 
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src="/img/body-teddy.jpeg" objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
          <div className={styles.right}>
          <h2 className={styles.title}>{product.name}</h2>

          <span className={styles.price}>$ {product.price}</span>
          <p className={styles.desc}>{product.description}</p>
        
         <h4 className={styles.choose}>Talla</h4>
          <div className={styles.sizes}>
              {productSize.map((size, index) => (
                  <div
                      key={index}
                      className={`${styles.size} ${
                          selectedSize === size ? styles.selected : ""
                      }`}
                      onClick={() => setSelectedSize(size)}
                  >
                      <span className={styles.number}>{size}</span>
                  </div>
              ))}
          </div>

         <h4 className={styles.add}>Cantidad</h4>
         
          <div className={styles.add}>
              <input type="number" defaultValue={1} className={styles.quantity}/>
              
          </div>

          <div className="buttons">
           <button className={styles.button}>Agregar al Carrito</button>
            <div className="divider"/>
            <button className={styles.button}>Comprar Ahora</button>
          </div>
        </div>
        {/* );
      })} */}
      </div>
  );
};

export const getServerSideProps = async ({params}) => {
  const res = await axios.get(
    `http://localhost:8080/product/${params.id}`
    );
    console.log (res.data)
  return {
    props:{
      product:res.data,  
    },
  };
}; 

export default Product;
