import Image from "next/legacy/image";
import { Header } from "./Header";

const Presentation = () => {
  return (
    <section>
      <Header />
      <div className="relative h-[73vh]">
        <Image
          src="/cyberbug/presentation/cover-mobile-en-27491add_ogush4.jpg"
          alt="background image"
          layout="fill"
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <p>Experience Night City on next-gen</p>

        <button>Available now</button>
      </div>
    </section>
  );
};

export { Presentation };
