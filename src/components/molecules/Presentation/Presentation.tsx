import { GlitchButton } from "@atoms/buttons/GlitchButton/GlitchButton";
import { Logo } from "@atoms/icons/Logo/Logo";
import Image from "next/legacy/image";
import Link from "next/link";
import { Header } from "./Header";

const Presentation = () => {
  return (
    <section className="relative">
      <Header />
      <div className="relative h-[120vw] z-10 text-center uppercase">
        <div className="absolute -z-10 h-full w-full">
          <Image
            src="/cyberbug/presentation/cover-mobile-en-27491add_ogush4.jpg"
            alt="background image"
            layout="fill"
            sizes="100vw"
          />
        </div>
        <Link href="/" className="flex justify-end pt-3 pr-4">
          <Logo className="w-20 h-9 fill-black" black />
        </Link>
        <div className="absolute bottom-0 flex flex-col px-6 gap-5 mb-12 items-center">
          <p className="font-blender-bold text-[1.75rem] text-white text-shadow-default">
            Experience Night City on next-gen
          </p>

          <GlitchButton />
        </div>
      </div>

      <div className="after:bg-bottom-bar after:content-[' '] after:h-10 after:w-full after:absolute after:z-10 after:-bottom-1 after:bg-repeat-x after:bg-bottom-bar-size after:bg-bottom-bar-position" />
    </section>
  );
};

export { Presentation };
