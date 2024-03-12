import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import styles from "../../styles/Product.module.css";

const Product = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const productSize = ["NEWBORN", "BABY", "TODDLER"]
  const [quantity, setQuantity] = useState(1);

  // Function to handle changes in the input
  const handleQuantityChange = (e) => {
    let inputValue = parseInt(e.target.value, 10);
    // Check if the parsed value is NaN or less than 1 and adjust accordingly
    if (isNaN(inputValue) || inputValue < 1) {
      setQuantity(1);
    } else {
      setQuantity(inputValue);
    }
  };

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
              {product.productVariations.map((productVariation, index) => (
                  <div
                      key={index}
                      className={`${styles.size} ${
                          selectedSize === productVariation.size ? styles.selected : ""
                      }`}
                      onClick={() => setSelectedSize(productVariation.size)}
                  >
                      <span className={styles.number}>{productVariation.size}</span>
                  </div>
              ))}
          </div>

         <h4 className={styles.add}>Cantidad</h4>
          <div className={styles.add}>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            className={styles.quantity}
          />
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
    try {
        const res = await axios.get(`http://localhost:8080/product/${params.id}`);
        console.log (res.data);
        return {
            props: {
                product: res.data,
            },
        };
    } catch (error) {
        console.error('Error fetching product:', error);
        return {
            notFound: true,
        };
    }
};

export default Product;
