/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useEffect, useState } from "react";
import { Logo } from "src/components/atoms/icons/Logo/Logo";

const Footer = () => {
  const [links, setLinks] = useState<string[]>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/footer/links");
      setLinks(await data.json());
    };

    fetchData();
  }, []);

  return (
    <footer className="flex bg-black text-yellow flex-col flex-wrap text-center justify-center align-middle py-20vw">
      <ul>
        {links &&
          links.map((link) => (
            <li key={link} className="m-3">
              <a
                href={`https://${link}`}
                target="_blank"
                rel="noreferrer"
                className="text-yellow text-xl p-2"
              >
                {link}
              </a>
            </li>
          ))}
        <li className="flex justify-center">
          <a href="https://cdprojektred.com/" target="_blank" rel="noreferrer">
            <Logo classes="h-16 w-full" />
          </a>
        </li>
        <li className="flex mt-4  justify-center">
          <Image
            src="/cyberbug/rating_h8vfn3"
            alt="age advice"
            layout="fixed"
            height="72px"
            width="72px"
          />
        </li>
      </ul>
    </footer>
  );
};

export { Footer };
