import { Link } from "react-router";
import HyperLink from "../HyperLink";

const DefaultOutput = () => {
  return (
    <div className="w-full flex flex-col">
      <h3 className="font-bold">Lav's Portfolio</h3>
      <p>Copyright (C) lavhuyaar. All rights reserved.</p>
      <br />
      <p>
        This is the terminal-style portfolio of B. Lav Kumar, a FullStack
        Developer based in Raipur, India.
      </p>
      <p>This is not at all a rip-off version of Microsoft's PowerShell.</p>
      <p>
        To see his resume click{" "}
        <HyperLink url="/lav-resume.pdf">here</HyperLink>.
      </p>
      <br />
      <p>Type "help" to see available commands.</p>
      <br />
      <p>
        Prefer the traditional-style portfolio? Switch to the{" "}
        <Link
          to="/simple"
          className="underline underline-offset-4 outline-none text-[#d7d7d2] hover:text-[#9e9e9c] break-all "
        >
          Simple View
        </Link>
      </p>
    </div>
  );
};
export default DefaultOutput;
