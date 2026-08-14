const skills = [
  {
    title: "Languages",
    stack: ["JavaScript", "TypeScript", "C++", "SQL", "Python"],
  },
  {
    title: "Frontend",
    stack: ["React", "Next.js", "TailwindCSS", "Redux Toolkit"],
  },
  {
    title: "Backend",
    stack: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Databases",
    stack: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase"],
  },
  {
    title: "ORM/ODM",
    stack: ["PrismaORM", "Mongoose"],
  },
  {
    title: "Testing",
    stack: ["Jest", "Supertest"],
  },
  {
    title: "DevOps/Tools",
    stack: ["Git", "Github", "Docker", "Vercel", "Render"],
  },
  {
    title: "Other",
    stack: ["Websockets", "OAuth2.0", "JWT", "Linux"],
  },
];
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
