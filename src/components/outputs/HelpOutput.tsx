import { VALID_COMMANDS as COMMANDS } from "../../constants";

const aboutCommands: {
  [key: string]: string;
} = {
  [COMMANDS.DEFAULT]: "Display the portfolio welcome screen.",
  [COMMANDS.CLEAR]: "Clear the terminal screen.",
  [COMMANDS.HELP]: "Display a list of available commands.",
  [COMMANDS.ABOUT]: "Learn more about this project.",
  [COMMANDS.SOCIALS]: "View my social profiles and contact links.",
  [COMMANDS.PROJECTS]: "Browse my projects and things I've built.",
  [COMMANDS.WORK_EXPERIENCE]: "View my professional work experience.",
  [COMMANDS.EDUCATION]: "View my educational background.",
  [COMMANDS.SKILLS]: "View my technical skills and technologies.",
  [COMMANDS.WHOAMI]: "Display a brief introduction about me.",
};

const HelpOutput = () => {
  return (
    <div className="w-full flex flex-col">
      <h4>TOPIC</h4>
      <p className="pl-6">{"  "}Portfolio Help System</p>
      <br />
      <h4>SHORT DESCRIPTION</h4>
      <p className="pl-6">
        {"  "}Displays this Portfolio's available commands.
      </p>
      <br />
      <h4>AVAILABLE COMMANDS</h4>
      <ul className="pl-6">
        {Object.keys(aboutCommands).map((command, index) => (
          <li key={index} className="flex gap-4">
            <p className="md:w-50">{`"${command}"`}</p>
            <p className="md:w-20">{"-->"}</p>
            <p className="">{aboutCommands[command]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default HelpOutput;
