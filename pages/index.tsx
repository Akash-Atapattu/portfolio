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
        <title>Akash Atapattu</title>
        <meta name="description" content="Akash Atapattu Professional Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.background} />
          <div className={styles.foreground}>
            <div style={{border: "2px solid black", width: "90vw", height: "90vh", position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
              <div style={{padding: "30px"}}>
                <Welcomes />
              </div>
            </div>
            {/* top portion of frame */}
            {/* <div style={{height: "5vh", width: "100vw", position: "fixed"}}>
              <div style={{backgroundColor: "black", position: "absolute", height: "2px", width: "90vw", bottom: 0, left: "5%", right: "5%"}}></div>
            </div>
            <div>
              <div style={{ float: "left", height: "90vh", width: "5vw", display: "inline-block"}}>
                <div style={{ position: "absolute", backgroundColor: "black", right: 0, height: "90vh", width: "2px", top: "5%"}} />
              </div>
            <div style={{height: "90vh", width: "90vw", position: "fixed", display: "inline-block"}}>

            </div>
              <div style={{ float: "right", height: "90vh", width: "5vw", display: "inline-block"}}>
                <div style={{ position: "absolute", backgroundColor: "black", left: 0, height: "90vh", width: "2px", top: "5%"}} />
              </div>
            </div> */}
          </div>
      </main>

    </div>
  )
}

export default Home
