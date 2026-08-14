import AboutOutput from "./outputs/AboutOutput";
import DefaultOutput from "./outputs/DefaultOutput";
import EducationOutput from "./outputs/EducationOutput";
import ErrorOutput from "./outputs/ErrorOutput";
import HelpOutput from "./outputs/HelpOutput";
import ProjectsOutput from "./outputs/ProjectsOutput";
import SkillsOutput from "./outputs/SkillsOutput";
import SocialsOutput from "./outputs/SocialsOutput";
import WhoAmIOutput from "./outputs/WhoAmIOutput";
import WorkExperienceOutput from "./outputs/WorkExperienceOutput";
import { VALID_COMMANDS as COMMANDS } from "../constants";

const outputs: {
  [key: string]: () => React.JSX.Element;
} = {
  [COMMANDS.DEFAULT]: DefaultOutput,
  [COMMANDS.ERROR]: ErrorOutput,
  [COMMANDS.HELP]: HelpOutput,
  [COMMANDS.ABOUT]: AboutOutput,
  [COMMANDS.SOCIALS]: SocialsOutput,
  [COMMANDS.PROJECTS]: ProjectsOutput,
  [COMMANDS.WORK_EXPERIENCE]: WorkExperienceOutput,
  [COMMANDS.EDUCATION]: EducationOutput,
  [COMMANDS.SKILLS]: SkillsOutput,
  [COMMANDS.WHOAMI]: WhoAmIOutput,
};

const Output = ({ commandType }: { commandType: string }) => {
  const Component = outputs[commandType];
  return <Component />;
};
export default Output;
