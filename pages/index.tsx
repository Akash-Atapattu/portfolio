import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import {useState} from 'react';
import Welcomes from '../components/Welcomes';
import 'bootstrap/dist/css/bootstrap.css';

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
        <title>Akash Atapattu</title>
        <meta name="description" content="Akash Atapattu Professional Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.background} />
          <div className={styles.foreground}>
            <div style={{border: "2px solid black", width: "90vw", height: "90vh", position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
              <div className="w-100 h-25 p-3">
                <Welcomes />
              </div>
              <div className="w-25 h-75 d-inline-block">
                <div className={styles.sidenav_buttons}>
                  
                </div>
                <div className={styles.sidenav_buttons}>
                  
                </div>
                <div className={styles.sidenav_buttons}>
                  
                </div>
                <div className={styles.sidenav_buttons}>
                  
                </div>
              </div>
              <div className="w-75 h-75 d-inline-block">

              </div>
            </div>
          </div>
      </main>

    </div>
  )
}

export default Home
