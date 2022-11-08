const Newsletter = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full mb-16 before:bg-razor-bottom-black before:content-[' '] before:h-10 before:absolute before:right-0 before:left-0 before:top-[-1px] before:bg-top before:bg-repeat-x">
      <h1 className="text-5xl uppercase">Always First!</h1>
      <span className="font-blender-bold text-xl mt-3">
        Sign up to the Cyberpunk 2077 newsletter.
      </span>
      <div className="relative mb-5">
        <label
          className="absolute text-yellow-400 required text-2xl bottom-1 left-2"
          htmlFor="newsletter_userEmail"
        >
          Enter your email address
        </label>
        <input
          className="bg-yellow-200 pb-1 text-2xl outline-none border-b-black border-b-2 break-words"
          id="newsletter_userEmail"
          type="email"
          required
          placeholder=""
        />
      </div>
      <div className="flex items-start max-w-[350px] px-9 mb-5">
        <input type="checkbox" className="flex-shrink-0 flex-grow-0 mr-2" />
        <div className="flex flex-col text-sm">
          <p>
            I would like to receive news, special offers and other information
            from CD PROJEKT and I am 16 years old or older.
            <br />
            <br />
            CD PROJEKT will be responsible for your personal data. For more
            information please check our{" "}
            <a
              className="underline"
              href="https://regulations.cdprojektred.com/en/privacy_policy"
            >
              CD PROJEKT Privacy Policy
            </a>
          </p>
        </div>
      </div>
      <button className="font-blender-bold bg-button bg-no-repeat text-2xl h-16 w-[264px]">
        Submit
      </button>
    </section>
  );
};

export { Newsletter };
