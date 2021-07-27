import dynamic from "next/dynamic";
import Head from "next/head";

export default function Home() {
  const Home = dynamic(() => import("./color-gradients"));

  return (
    <>
      <Head>
        <title>Kewl Colors | Color Lib</title>
        <meta name="description" content="Kewl Colors | Color Lib" />
        <meta property="og:url" content="https://kewlcolors.vercel.app/ " key="ogurl" />
        <meta property="og:image" content="/favicon.ico" key="ogimage" />
        <meta property="og:site_name" content="Kewl Colors" key="ogsitename" />
        <meta property="og:title" content="Kewl Colors" key="ogtitle" />
        <meta property="og:description" content="Kewl Colors | Color Lib" key="ogdesc" />
      </Head>
      <Home />
    </>
  );
}
