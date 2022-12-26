import { Card, CardType } from "@atoms/Card/Card";

type CardsListType = { cards: Array<CardType> };

const CardsList = ({ cards }: CardsListType) => {
  return (
    <div className="flex justify-center flex-wrap items-center mt-5 gap-4">
      {cards.map(({ title, subtitle, link, color, imageSrc }) => (
        <Card
          key={title}
          title={title}
          subtitle={subtitle}
          link={link}
          color={color}
          imageSrc={imageSrc}
        />
      ))}
    </div>
  );
};

export { CardsList };
