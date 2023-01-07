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

    useEffect(() => {
    const interval = setInterval(() => {
        setIndex((index + 1) % welcomes.length);
    }, 2000);
    return () => clearInterval(interval);
    }, [index]);

    return (
        <p className={styles.title}>{welcomes[index]}</p>
    );
};

export default Welcomes;