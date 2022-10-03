import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Baby Kuna</title>
        <meta name="description" content="Tienda online de ropa para bebés de 0 a 12 meses." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Homepage
    </div>
  )
}
