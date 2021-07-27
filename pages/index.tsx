import dynamic from "next/dynamic";
import Head from "next/head";

export default function Home() {
  const Home = dynamic(() => import("./color-gradients"));

  return (
    <>
      <Head>
        <title>Kewl Colors | Color Lib</title>
        <meta
          name="description"
          content="Kewl Colors | Color Lib"
        />
      </Head>
      <Home />
    </>
  );
}
