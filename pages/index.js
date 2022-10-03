import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import Featured from "../components/Featured";
import ProductList from "../components/ProductList";
import styles from '../styles/Home.module.css';


export default function Home({productList}) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Baby Kuna</title>
        <meta name="description" content="Tienda online de ropa para bebés de 0 a 12 meses." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <ProductList productList={productList} />
    </div>
  );
}

export const getServerSideProps = async () =>{
  const res = await axios.get("http://localhost:3000/api/items/");
  return {
    props:{
      productList:res.data,  
    },
  };
}; 