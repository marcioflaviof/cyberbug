const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h2 className="relative pb-3 mb-5 font-blender-bold text-4xl text-center text-yellow-200 uppercase tracking-[2px] after:bg-header-bottom-yellow after:bg-center  after:bg-no-repeat after:w-full after:bottom-0 after:content-[''] after:h-2 after:left-0 after:absolute after:scale-75">
      {title}
    </h2>
  );
};

export { SectionTitle };
