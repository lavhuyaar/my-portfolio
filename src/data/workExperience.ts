type WorkExpProps = {
  role: string;
  company: string;
  duration: string;
  durationStart: string;
  durationEnd: string;
  description: string;
  highlights: string[];
  stack: string[];
};

export const workExperience: WorkExpProps[] = [
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
