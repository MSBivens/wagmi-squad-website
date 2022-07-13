import Head from "next/head";
import Main from "../components/Main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>WAGMI Squad</title>
        <meta name="description" content="A squad DAO for web3 developers" />
        <meta
          name="keywords"
          content="programming, web3, smart contracts, DAO, blockend"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </div>
  );
}
