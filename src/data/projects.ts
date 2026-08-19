type ProjectProps = {
  title: string;
  description: string;
  liveUrl: string;
  backendRepoUrl: string;
  frontRepoUrl: string;
  stack: string[];
};

const githubBaseUrl: string = import.meta.env.VITE_GITHUB;

export const projects: ProjectProps[] = [
  {
    title: "Twinstagram",
    description:
      "A full-stack social media web application with authentication, posts, feeds, follows, profile privacy, and pagination.",
    liveUrl: "https://twinstagram.vercel.app",
    backendRepoUrl: `${githubBaseUrl}/twinstagram_backend`,
    frontRepoUrl: `${githubBaseUrl}/twinstagram_frontend`,
    stack: ["React", "TypeScript", "Express", "Prisma", "PostgreSQL", "JWT"],
  },
  {
    title: "Yappin",
    description:
      "A real-time messaging web application with WebSocket-based communication, chat rooms, and live message updates.",
    liveUrl: "https://yappin-fe.vercel.app",
    backendRepoUrl: `${githubBaseUrl}/yappin_backend`,
    frontRepoUrl: `${githubBaseUrl}/yappin_frontend`,
    stack: ["React", "TypeScript", "Express", "WebSockets", "JWT"],
  },
  {
    title: "Arqive",
    description:
      "A web application for organizing and managing folders and files (like Google Drive).",
    liveUrl: "https://arqive-il7v.onrender.com/",
    backendRepoUrl: `${githubBaseUrl}/arqive`,
    frontRepoUrl: `${githubBaseUrl}/arqive`,
    stack: ["Express", "EJS", "PostgreSQL", "Prisma", "Supabase"],
  },
];
