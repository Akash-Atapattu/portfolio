import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

const welcomes = [
    "Welcome",
    "欢迎",
    "Bienvenidas",
    "Willkomen"
    ];

const Welcomes: NextPage = () => {
    const [index, setIndex] = useState(0);
    const [index_two, set_index_two] = useState(0);
    const [welcomeMessage, setWelcomeMessage] = useState("");

    useEffect(() => {
    const interval = setInterval(() => {
        // const typing = setInterval(() => {
        //     // setWelcomeMessage()
        // }, 10);
        setIndex((index + 1) % welcomes.length);
        // setWelcomeMessage("");
    }, 2000);
    return () => clearInterval(interval);
    }, [index]);

    return (
        <div style={{height: "auto"}}>
            <p className={styles.title}>{welcomes[index]}</p>
            <div className={styles.typewriter_block}></div>
            {/* <p className={styles.title}>&nbsp;to Akash Atapattu's Portfolio</p> */}
            <div className={styles.cover_title}></div>
        </div>
    );
};

export default Welcomes;