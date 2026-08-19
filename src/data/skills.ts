type SkillsProps = {
  title: string;
  stack: string[];
};

export const skills: SkillsProps[] = [
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
