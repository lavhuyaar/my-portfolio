import HyperLink from "../HyperLink";

type ProjectProps = {
  title: string;
  description: string;
  liveUrl: string;
  backendRepoUrl: string;
  frontRepoUrl: string;
  stack: string[];
};

const projects: ProjectProps[] = [
  {
    title: "Twinstagram",
    description:
      "A full-stack social media web application with authentication, posts, feeds, follows, profile privacy, and infinite scrolling.",
    liveUrl: "https://twinstagram.vercel.app",
    backendRepoUrl: "https://github.com/lavhuyaar/twinstagram_backend",
    frontRepoUrl: "https://github.com/lavhuyaar/twinstagram_frontend",
    stack: ["React", "TypeScript", "Express", "Prisma", "PostgreSQL", "JWT"],
  },
  {
    title: "Yappin",
    description:
      "A real-time messaging web application with WebSocket-based communication, chat rooms, and live message updates.",
    liveUrl: "https://yappin-fe.vercel.app",
    backendRepoUrl: "https://github.com/lavhuyaar/yappin_backend",
    frontRepoUrl: "https://github.com/lavhuyaar/yappin_frontend",
    stack: ["React", "TypeScript", "Express", "WebSockets", "JWT"],
  },
  {
    title: "Arqive",
    description:
      "A web application for organizing and managing folders and files (like Google Drive).",
    liveUrl: "https://arqive-il7v.onrender.com/",
    backendRepoUrl: "https://github.com/lavhuyaar/arqive",
    frontRepoUrl: "https://github.com/lavhuyaar/arqive",
    stack: ["Express", "EJS", "PostgreSQL", "Prisma", "Supabase"],
  },
];

const ProjectsOutput = () => {
  return (
    <div className="flex flex-col w-full">
      <h3>SOME OF THE PROJECTS I'VE MADE!!!</h3>
      <br />
      <ol className="flex flex-col w-full pl-3 sm:pl-6">
        {projects.map((project, index) => (
          <>
            <li key={index}>
              <h4 className="uppercase">
                {index + 1}. {project?.title}
              </h4>
              <div className="w-full md:w-1/2 flex flex-col pl-3 sm:pl-8">
                <p>{project?.description}</p>
                <br />
                <ul className="flex flex-wrap">
                  {project?.stack.map((st, index) => (
                    <li
                      key={index}
                    >{`${" "}${st}${index < project?.stack.length - 1 ? "," : "."}`}</li>
                  ))}
                </ul>
                <br />
                <div className="flex items-center gap-6">
                  <HyperLink url={project?.liveUrl}>Live</HyperLink>
                  <HyperLink url={project?.frontRepoUrl}>Frontend</HyperLink>
                  <HyperLink url={project?.backendRepoUrl}>Backend</HyperLink>
                </div>
              </div>
            </li>
            <br />
          </>
        ))}
      </ol>
    </div>
  );
};
export default ProjectsOutput;
