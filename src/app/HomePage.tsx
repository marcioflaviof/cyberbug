"use client";

import Head from "next/head";
import RootLayout from "src/app/layout";

import { Alienware } from "@atoms/icons/Alienware/Alienware";
import { Nvidia } from "@atoms/icons/Nvidia/Nvidia";
import { CookieDeclaration } from "@molecules/CookieDeclaration/CookieDeclaration";
import { Footer } from "@molecules/Footer/Footer";
import { Medias } from "@molecules/Medias/Medias";
import { Terms } from "@molecules/Terms/Terms";
import { Newsletter } from "@molecules/Newsletter/Newsletter";
import { News } from "@molecules/News/News";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>CyberBug 2022</title>
        <meta name="description" content="Copy of cyberpunk 2077 homepage" />
      </Head>

      <main>
        <RootLayout>
          <div className="bg-yellow-200">
            <News />
            <Newsletter />
            <section className="flex flex-col items-center mb-10 pt-20vw border-t border-yellow-400">
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
        </RootLayout>
      </main>
    </div>
  );
};

export default HomePage;
