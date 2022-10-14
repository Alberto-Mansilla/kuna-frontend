import Head from 'next/head';
import Featured from '../components/Featured';
import ClientList from '../components/ClientList';
import ClientCard from '../components/ClientCard';
import Image from 'next/image';

import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <div className={styles.container}>
   
      <Head>
        <title>BabyKuna Clients</title>
        <meta name="description" content="Clients of BabyKuna Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <ClientList/>
      <ClientCard/>
      <Image src='/img/ajuar-bebe-celeste.jpg' alt='' width='100%' height='100%'/>
    
    </div>
  );
}
