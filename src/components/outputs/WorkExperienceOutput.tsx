const workExperience = [
  {
    role: "Frontend Developer Intern",
    company: "Digikraft Social",
    duration: "6 months",
    durationStart: "Nov 2025",
    durationEnd: "May 2026",
    description:
      "Worked on B2C and admin dashboard applications, building and maintaining frontend features and integrating backend APIs.",
    highlights: [
      "Built and updated UI features using Next.js and Tailwind CSS",
      "Integrated authentication and application state using Redux Toolkit",
      "Worked extensively with REST API integrations",
      "Built and validated forms using Formik and Yup",
      "Worked on responsive interfaces and existing production codebases",
    ],
    stack: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Formik",
      "Yup",
    ],
  },
];

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
            {experience.duration} ({experience.durationStart}{" - "}
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
