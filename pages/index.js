import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Calculator from "../components";

export default function Home() {
  return (
    <div className={styles.container}>
        <Calculator/>

    </div>
  )
}
