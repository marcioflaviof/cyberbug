import Image from "next/legacy/image";
import { Logo } from "src/components/atoms/icons/Logo/Logo";

function asyncComponent<T, R>(fn: (arg: T) => Promise<R>): (arg: T) => R {
  return fn as (arg: T) => R;
}

const getData = async () => {
  const links = await fetch("http://localhost:3000/api/footer/links");

  return links.json();
};

const Footer = asyncComponent(async () => {
  const links: string[] = await getData();

  return (
    <footer className="flex bg-black text-yellow-200 flex-col flex-wrap text-center justify-center align-middle py-[18vw]">
      <ul>
        {links &&
          links.map((link) => (
            <li key={link} className="m-4">
              <a
                href={`https://${link}`}
                target="_blank"
                rel="noreferrer"
                className="text-yellow-200 text-xl p-2"
              >
                {link}
              </a>
            </li>
          ))}
        <li className="flex justify-center">
          <a href="https://cdprojektred.com/" target="_blank" rel="noreferrer">
            <Logo className="h-16 w-full" />
          </a>
        </li>
        <li className="flex mt-6 justify-center">
          <Image
            src="/cyberbug/rating_h8vfn3"
            alt="age advice"
            height={72}
            width={72}
          />
        </li>
      </ul>
    </footer>
  );
});

export { Footer };
