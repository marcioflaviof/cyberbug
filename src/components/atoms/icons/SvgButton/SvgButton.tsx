const SvgButton = () => {
  return (
    <a
      className="w-44 h-11 relative flex justify-center items-center after:content-['R25'] after:absolute after:text-[6px] after:text-yellow-200 after:font-blender-bold after:uppercase after:-bottom-[3px] after:right-4"
      href="https://www.cyberpunk.net/br/en/buy"
    >
      <span
        className="absolute uppercase text-white font-blender-bold"
        data-text="Available now"
      >
        Available now
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 339 85">
        <path
          d="M315 85v-8h-27v8H21.77L2 65.23V0h337v85z"
          fillRule="evenodd"
          fill="#02d8f3"
          opacity=".45"
        />
        <path
          d="M313 85v-8h-27v8H19.77L0 65.23V0h337v85z"
          fill="#ff003c"
          fillRule="evenodd"
        />
      </svg>
    </a>
  );
};
export { SvgButton };
