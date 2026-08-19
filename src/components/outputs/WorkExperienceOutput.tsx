import { workExperience } from "../../data/workExperience";

const WorkExperienceOutput = () => {
  return (
    <div className="flex flex-col">
      <p className="font-bold uppercase">WORK EXPERIENCE</p>
      <br />
      {workExperience.map((experience) => (
        <div
          key={`${experience.company}-${experience.role}`}
          className="flex flex-col pl-3 sm:pl-6"
        >
          <p>
            <span className="text-yellow-400 font-bold">{experience.role}</span>
            <span> at </span>
            <span>{experience.company}</span>
          </p>
          <p className="text-gray-400">
            {experience.duration} ({experience.durationStart}
            {" - "}
            {experience.durationEnd})
          </p>
          <br />
          <p>{experience.description}</p>
          <br />
          {experience.highlights.map((highlight) => (
            <p key={highlight}>
              <span>-</span> {highlight}
            </p>
          ))}
          <br />
          <p>
            <span className="text-gray-400">Stack:</span>{" "}
            {experience.stack.join(" · ")}
          </p>
        </div>
      ))}
    </div>
  );
};

export default WorkExperienceOutput;
