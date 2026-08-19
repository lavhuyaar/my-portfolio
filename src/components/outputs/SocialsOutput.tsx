import { socials } from "../../data/socials";
import HyperLink from "../HyperLink";

const SocialsOutput = () => {
  const EMAIL: string = import.meta.env.VITE_EMAIL;
  return (
    <div className="flex flex-col w-full">
      <p>Here's where you can find me (or find what I do)</p>
      <br />
      <ul className="pl-3 sm:pl-6">
        {Object.keys(socials).map((platform, index) => (
          <li key={index} className="flex gap-3 mb-2 sm:justify-normal">
            <h4 className="w-40">{platform}</h4>
            <HyperLink url={socials[platform]}></HyperLink>
          </li>
        ))}
      </ul>
      <br />
      <p>
        Or you can mail me at{" "}
        <HyperLink url={`mailto:${EMAIL}`}>{EMAIL}</HyperLink>
      </p>
    </div>
  );
};
export default SocialsOutput;
