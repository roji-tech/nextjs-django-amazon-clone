import Head from "next/head";
import Header from "../components/header/Header";
import App from "../components/home/Home";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon Clone</title>
        <meta name="description" content="Nextjs Django Amazon Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <App />
    </div>
  );
}
