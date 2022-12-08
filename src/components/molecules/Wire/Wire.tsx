import { FreeGodies } from "@atoms/icons/FreeGodies/FreeGodies";
import Image from "next/legacy/image";

const Wire = () => {
  return (
    <section className="flex flex-col items-center py-5">
      <div className="mb-6">
        <Image
          src="/cyberbug/logo-ncwire_eyozjc.png"
          height={192}
          width={256}
        />
      </div>
      <a
        className="px-20"
        href="https://www.gog.com/"
        target="_blank"
        rel="noreferrer"
      >
        <FreeGodies />
      </a>
    </section>
  );
};

export { Wire };
