import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
// import NavBar from '..components/NavBar';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Akash's Portfolio</title>
        <meta name="description" content="Akash Atapattu Professional Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.background}>
          <div className={styles.homepage}>
            <p className={styles.title}>Hello</p>
          </div>
        </div>
      </main>

    </div>
  )
}

export default Home
