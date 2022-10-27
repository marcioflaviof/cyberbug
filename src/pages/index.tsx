import { NextPage } from "next";
import Head from "next/head";

import { Alienware } from "src/components/atoms/icons/Alienware/Alienware";
import { Nvidia } from "src/components/atoms/icons/Nvidia/Nvidia";
import { CookieDeclaration } from "src/components/molecules/CookieDeclaration/CookieDeclaration";
import { Footer } from "src/components/molecules/Footer/Footer";
import { Medias } from "src/components/molecules/Medias/Medias";
import { Terms } from "src/components/molecules/Terms/Terms";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CyberBug 2022</title>
        <meta name="description" content="Copy of cyberpunk 2077 homepage" />
      </Head>

      <main>
        <div className="bg-yellow pt-20">
          <section className="flex flex-col items-center mb-10">
            <Terms />
            <Medias />
          </section>
          <section className="flex flex-col items-center gap-5 mb-14">
            <Alienware className="max-w-60" />
            <Nvidia className="max-w-45" />
          </section>
          <CookieDeclaration />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
