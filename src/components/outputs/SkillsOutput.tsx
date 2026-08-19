import { skills } from "../../data/skills";

const SkillsOutput = () => {
  return (
    <div className="flex flex-col">
      <h3 className="font-bold">TECHNICAL SKILLS</h3>
      <br />
      {skills.map(({ title, stack }) => (
        <div key={title} className="flex gap-6 pl-3 sm:pl-6">
          <span className="text-yellow-400 min-w-32">{title}</span>
          <span>{stack.join(" · ")}</span>
        </div>
      ))}
    </div>
  );
};

export default SkillsOutput;
