import { ArrorDown } from "src/components/atoms/icons/ArrowDown/ArrowDown";
import { World } from "src/components/atoms/icons/World/World";

const CookieDeclaration = () => {
  return (
    <section className="flex flex-col items-center">
      <a
        href={"https://www.cyberpunk.net/br/en/#"}
        target="_blank"
        rel="noreferrer"
        className="font-bold mb-3 text-center"
      >
        Cookie Declaration {"<"}
      </a>
      <p className="text-xs px-4 mb-7">
        CD PROJEKT®, Cyberpunk®, Cyberpunk 2077® are registered trademarks of CD
        PROJEKT S.A. © 2022 CD PROJEKT S.A. All rights reserved. All other
        copyrights and trademarks are the property of their respective owners.
      </p>
      <div className="flex relative">
        <World classes="mr-2" />
        <select
          name="languages"
          className="appearance-none mb-7 pr-3 bg-yellow font-bold text-lg border-b border-black hover:cursor-pointer"
        >
          <option value="english">English</option>
          <option value="portuguese">Portuguese</option>
          <option value="spanish">Spanish</option>
        </select>

        <ArrorDown classes="absolute right-0 top-2.5" />
      </div>
    </section>
  );
};

export { CookieDeclaration };
