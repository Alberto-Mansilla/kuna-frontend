import Image from "next/image";
import styles from "../styles/ProductCard.module.css";
import Link from "next/link";

const ProductCard = ({product}) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${product.item_id}`} passHref>
        <Image src = {product.image_path} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{product.name_item}</h1>
      <span className={styles.price}>${product.price}</span> 
      <p className={styles.desc}>
        {product.desc_item}
      </p>
    </div>
  );
};

export default ProductCard;