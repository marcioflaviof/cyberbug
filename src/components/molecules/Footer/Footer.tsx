import Image from "next/image";
import { useEffect, useState } from "react";

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
            <li className="m-3">
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
            <img
              src="https://res.cloudinary.com/ddfn8xvu3/image/upload/v1666034701/cyberbug/logo_huafh5.svg"
              className="h-16 w-full"
            />
          </a>
        </li>
        <li className="flex mt-4  justify-center">
          <Image
            src="/cyberbug/rating_h8vfn3"
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
