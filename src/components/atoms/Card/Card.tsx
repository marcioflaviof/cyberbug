import Image from "next/legacy/image";

export type CardType = {
  title: string;
  subtitle: string;
  link: string;
  color: string;
  imageSrc: string;
};

const Card = ({ title, subtitle, link, color, imageSrc }: CardType) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`${color} relative basis-full border-black border-[5px] px-3 pt-3 pb-12`}
    >
      <div>
        <Image src={imageSrc} layout="responsive" width={100} height={60} />
      </div>
      <div className="mt-4 pr-12">
        <p className="font-blender-bold text-[1.375rem] leading-[1.375rem]">
          {title}
        </p>
        <p className="text-[1.25rem] mt-4">{subtitle}</p>
      </div>
      <span className="font-blender-bold text-4xl absolute right-4">{">"}</span>
    </a>
  );
};

export { Card };
