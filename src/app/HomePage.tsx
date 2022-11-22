import RootLayout from "src/app/layout";

import { Alienware } from "@atoms/icons/Alienware/Alienware";
import { Nvidia } from "@atoms/icons/Nvidia/Nvidia";
import { CookieDeclaration } from "@molecules/CookieDeclaration/CookieDeclaration";
import { Footer } from "@molecules/Footer/Footer";
import { Medias } from "@molecules/Medias/Medias";
import { Terms } from "@molecules/Terms/Terms";
import { Newsletter } from "@molecules/Newsletter/Newsletter";

const HomePage = () => {
  return (
    <main>
      <RootLayout>
        <div className="bg-yellow-200 pt-20">
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
  );
};

export default HomePage;
