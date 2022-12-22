export type CardType = {
  title: string;
  subtitle: string;
  link: string;
  color: string;
};

const Card = ({ title, subtitle, link, color }: CardType) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`bg-${color} basis-full border-black border-4 p-3`}
    >
      <div>Image</div>
      <div className="mt-4">
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
    </a>
  );
};

export { Card };
