import { blenderBold } from "src/app/layout";

const Terms = () => {
  return (
    <ul className="flex flex-col gap-6 text-center text-black mb-4">
      <li>
        <a className="font-blender-bold">
          Terms of User & Privacy Policy {"<"}
        </a>
      </li>
      <li>
        <a className="font-blender-bold">Careers {"<"}</a>
      </li>
      <li>
        <a className="font-blender-bold">User agreement {"<"}</a>
      </li>
      <li>
        <a className={blenderBold.className}>Fan Content Guidelines {"<"}</a>
      </li>
    </ul>
  );
};

export { Terms };
