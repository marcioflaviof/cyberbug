import "./GlitchButton.modules.css";

const GlitchButton = () => {
  return (
    <div className="container ">
      <button className="cybr-btn font-blender-bold w-44 h-11 text-xs">
        Available Now
        <span aria-hidden className="cybr-btn__glitch font-blender-bold">
          Available Now
        </span>
        <span aria-hidden className="cybr-btn__tag">
          R25
        </span>
      </button>
    </div>
  );
};

export { GlitchButton };
