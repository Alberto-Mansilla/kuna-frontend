import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard"
import translations from '../languages';

const ProductList = ({productList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{translations.es.FAVORITES_TITLE}</h1>

      <div className={styles.wrapper}>
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}  
      </div>
    </div>
  );
};

export default ProductList;