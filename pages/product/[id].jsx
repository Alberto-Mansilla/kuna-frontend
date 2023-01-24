
import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

const Product = ({product}) => {

  const [setSize] = useState(0);
  
  var item = product.item

  return (
    <div className={styles.container}> 
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src="/img/body-teddy.jpeg" objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
          <div className={styles.right}>
          <h2 className={styles.title}>{item.name_item}</h2>

          <span className={styles.price}>$ {item.price}</span>
          <p className={styles.desc}>{item.desc_item}</p>
        
         <h4 className={styles.choose}>Talla</h4>

          <div className={styles.sizes}>
            <div className={styles.size} onClick={() => setSize(0)}>
              <span className={styles.number}>{item.size}</span>
            </div>
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
    `https://63854156875ca3273d39768a.mockapi.io/item/${params.id}`
    );
    console.log (res.data)
  return {
    props:{
      product:res.data,  
    },
  };
}; 

export default Product;
