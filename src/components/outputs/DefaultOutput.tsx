import HyperLink from "../HyperLink";

const DefaultOutput = () => {
  return (
    <div className="w-full flex flex-col">
      <h3>Lav's Portfolio</h3>
      <p>Copyright (C) lavhuyaar. All rights reserved.</p>
      <br />
      <p>
        This is the terminal-style portfolio of B. Lav Kumar, a FullStack
        Developer based on Raipur, India.
      </p>
      <p>This is not at all a rip-off version of Microsoft's PowerShell.</p>
      <br />
      <p>Type "help" to see available commands.</p>
      <br />
      <p>
        Prefer the traditional-style portfolio? Click{" "}
        {/* later change the url here */}
        <HyperLink url="https://www.dummylink.com/simple"></HyperLink> 
      </p>
    </div>
  );
};
export default DefaultOutput;
