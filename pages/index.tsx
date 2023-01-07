import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import {useState} from 'react';
// import NavBar from '..components/NavBar';

//accepts time to delay a function in ms

// function delay(time: number){
//   return new Promise(resolve => setTimeout(resolve, time));
// }

const Home: NextPage = () => {
  const welcomes = [
    "Welcome",
    "欢迎",
    "bienvenidas",
    "willkomen"
  ]
  const [welcomeMessage, setWelcomeMessage] = useState("Welcome");

  // for(var i = 0; i < welcomes.length; i++){
  //   setWelcomeMessage(welcomes[i]);
  //   delay(1000);
  //   if(i == welcomes.length - 1){
  //     i = -1;
  //   }
  // }

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
            <p className={styles.title}>{welcomeMessage}</p>
          </div>
        </div>
      </main>

    </div>
  )
}

export default Home
