import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WAGMI Squad</title>
        <meta name="description" content="A squad DAO for web3 developers" />
        <meta
          name="keywords"
          content="programming, web3, smart contracts, DAO, blockend"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
