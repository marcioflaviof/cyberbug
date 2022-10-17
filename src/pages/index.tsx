import { NextPage } from "next";
import Head from "next/head";
import { Footer } from "src/components/molecules/Footer/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CyberBug 2022</title>
        <meta name="description" content="Copy of cyberpunk 2077 homepage" />
      </Head>

      <main>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
