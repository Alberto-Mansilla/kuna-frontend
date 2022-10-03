import styles from "../styles/ProductList.module.css";
import productList from "../pages/index"
import ProductCard from "./ProductCard"

const ProductList = ({productList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Nuestros favoritos para esta estación</h1>

      <div className={styles.wrapper}>
        {productList.items.map((product) => (
          <ProductCard key={product.item_id} product={product} />
        ))}  
      </div>
    </div>
  );
};

export default ProductList;