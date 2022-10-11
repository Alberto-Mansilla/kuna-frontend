
import styles from "../../styles/Product.module.css";
import Image from "next/image";
import {useEffect, useState} from "react";
import { useRouter} from "next/router";

const Product = () => {

  const router = useRouter();
  const {id} = router.query;
  const [dataResponse, setdataResponse] = useState([]);

  useEffect(() => {
    if (!router.isReady) return;
    async function getPageData() {
      const apiUrlEndpoint = `http://localhost:3000/api/getdata-lib`;
      const postData = {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: id, 
        })
      };

      const response = await fetch(apiUrlEndpoint, postData );
      const res = await response.json();
      setdataResponse(res.items);
    }
    getPageData();
  }, [router.query.id, router.isReady]);

  const [size, setSize] = useState(0);

  const product = {
    img: "/img/body-teddy.jpeg",
  };

  return (
    <div className={styles.container}>
      
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={product.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>

      {dataResponse.map((item) => {

        return (
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
            <div class="divider"/>
            <button className={styles.button}>Comprar Ahora</button>
          </div>
        </div>
        );
      })}
      </div>
  );
};

export default Product;