import aboutOutput from "./commandOutputs/aboutOutput";
import educationOutput from "./commandOutputs/educationOutput";
import helpOutput from "./commandOutputs/helpOutput";
import projectsOutput from "./commandOutputs/projectsOutput";
import skillsOutput from "./commandOutputs/skillsOutput";
import socialsOutput from "./commandOutputs/socialsOutput";
import whoAmIOutput from "./commandOutputs/whoAmIOutput";
import workExperienceOutput from "./commandOutputs/workExperienceOutput";

const commands = {
  about: aboutOutput,
  help: helpOutput,
  education: educationOutput,
  projects: projectsOutput,
  skills: skillsOutput,
  workexp: workExperienceOutput,
  socials: socialsOutput,
  whoami: whoAmIOutput,
};

export  {commands};
