import HyperLink from "../HyperLink";

type SocialProps = {
  name: string;
  url: string;
};

const socials: SocialProps[] = [
  {
    name: "Github",
    url: "https://www.github.com/lavhuyaar",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/b-lav-kumar",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/I3BUA2Fn4B",
  },
];

const SocialsOutput = () => {
  return (
    <div className="flex flex-col w-full">
      <p>Here's where you can find me (or find what I do)</p>
      <br />
      <ul className="pl-3 sm:pl-6">
        {socials.map((_, index) => (
          <li key={index} className="flex gap-3 mb-2 sm:justify-normal">
            <h4 className="w-40">{_.name}</h4>
            <HyperLink url={_.url}></HyperLink>
          </li>
        ))}
      </ul>
      <br />
      <p>
        Or you can mail me at{" "}
        <HyperLink url="lavhuyaar@gmail.com" isMail={true}></HyperLink>
      </p>
    </div>
  );
};
export default SocialsOutput;
