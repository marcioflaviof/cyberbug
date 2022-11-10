const News = () => {
  return (
    <section className="items-center bg-black p-3">
      <h2 className="relative pb-3 mb-5 font-blender-bold text-4xl text-center text-yellow-200 uppercase after:bg-header-bottom-yellow after:bg-center  after:bg-no-repeat after:w-full after:bottom-0 after:content-[''] after:h-2 after:left-0 after:absolute after:scale-75">
        News
      </h2>
      <ul className="flex flex-col items-center">
        <li className="bg-blue-50 p-7">
          <a href="https://www.cyberpunk.net/en/news/46420/patch-1-61-list-of-changes">
            <div className="flex justify-between items-center">
              <div className="bg-black h-[2px] w-7 content-['']" />
              <div className="font-blender-bold uppercase text-[7px] tracking-[2px]">
                05.11.2022
              </div>
            </div>
            <h3 className="text-left text-xl font-blender-bold mt-16">
              Patch 1.61 - list of changes
            </h3>
            <p className="text-xs mt-8 font-bold ml-12">
              Patch 1.61 for Cyberpunk 2077 is being rolled out and will soon be
              available on all platforms!
            </p>
          </a>
        </li>
      </ul>
    </section>
  );
};

export { News };
