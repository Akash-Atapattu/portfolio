import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import {useState} from 'react';
import Welcomes from '../components/Welcomes';

//accepts time to delay a function in ms


const Home: NextPage = () => {

  const welcomes = [
    "Welcome",
    "欢迎",
    "bienvenidas",
    "willkomen"
  ]
  const [welcomeMessage, setWelcomeMessage] = useState("Welcome");

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Akash Atapattu Professional Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.background}>
          <div className={styles.homepage}>
            <div className={styles.title_container}>
              <Welcomes />
              <p className={styles.title}>&nbsp;to Akash Atapattu's Portfolio</p>
            </div>
            
          </div>
        </div>
      </main>

    </div>
  )
}

export default Home
