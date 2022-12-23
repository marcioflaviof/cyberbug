import { CardsList } from "@molecules/CardsList/CardsList";

const cards = [
  {
    title: "WHAT’S NEW IN THE EDGERUNNERS UPDATE",
    subtitle:
      "Create your own cyberpunk style with the Wardrobe — a clothing transmog system — equip yourself with fresh weapons and gear, take on new gigs, and enjoy a selection of preem goodies taken straight from our very first anime: Cyberpunk: Edgerunners!",
    link: "https://www.cyberpunk.net/en/news/45280/edgerunners-update-patch-1-6-list-of-changes",
    color: "green-100",
    imageSrc: "/cyberbug/media/card-images/highlights-1-mobile-1d3f48c7_mt2zts",
  },
  {
    title: "CYBERPUNK: EDGERUNNERS",
    subtitle:
      "Created in collaboration with the legendary Studio Trigger, Cyberpunk: Edgerunners is an action-packed anime that tells the story of David Martinez — a teenager who, in the aftermath of a personal tragedy, decides to take control of his own life by throwing himself deep into the deadly underworld of Night City.",
    link: "https://www.cyberpunk.net/en/edgerunners",
    color: "green-100",
    imageSrc: "/cyberbug/media/card-images/highlights-2-mobile-b2c2210b_l1foi6",
  },
  {
    title: "ENHANCED FOR NEXT-GEN CONSOLES",
    subtitle:
      "Equipped with a host of improvements built with next-gen in mind, explore Night City like never before thanks to the power of next-gen consoles.",
    link: "https://www.cyberpunk.net/us/en/next-gen",
    color: "blue-50",
    imageSrc: "/cyberbug/media/card-images/highlights-3-mobile-1344753b_gdvd73",
  },
  {
    title: "PACKED WITH FREE ADDITIONAL CONTENT",
    subtitle:
      "Enjoy all the free content added to the game and use it throughout your journey! From a wide arsenal of weapons and equipment to multiple apartments V can rent across the city, expanded customization options, and more, it’s time to discover all Night City has to offer.",
    link: "https://www.cyberpunk.net/en/dlc",
    color: "blue-50",
    imageSrc: "/cyberbug/media/card-images/highlights-4-mobile-c1f90f4c_uzhobu",
  },
];

const EdgerunnersUpdate = () => {
  return (
    <div className="flex flex-col justify-center items-center px-8">
      <h1 className="text-center text-[1.75rem] leading-7 uppercase">
        The Edgerunners update is here
      </h1>
      <p className="text-[1.125rem] leading-6 text-left mt-4 font-semibold">
        Say hello to the Edgerunners Update. In celebration of Cyberpunk:
        Edgerunners — the pulsating anime set in the world of Cyberpunk 2077 —
        this brand new free update brings in-game goodies inspired by the anime,
        as well as a host of new features and content to dig into.
      </p>
      <CardsList cards={cards} />
    </div>
  );
};

export { EdgerunnersUpdate };
