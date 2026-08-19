import { projects } from "../../data/projects";
import HyperLink from "../HyperLink";

const ProjectsOutput = () => {
  return (
    <div className="flex flex-col w-full">
      <h3 className="font-bold">SOME OF THE PROJECTS I'VE MADE!!!</h3>
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
                <p key={index}>
                  <span className="text-gray-400">Stack:</span>{" "}
                  {project?.stack.join(" · ")}
                </p>
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
