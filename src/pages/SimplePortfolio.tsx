import { Link } from "react-router";
import { IoLogoGithub, IoLogoLinkedin, IoMdMail } from "react-icons/io";
import { HiOutlineExternalLink } from "react-icons/hi";
import { VscTerminalPowershell } from "react-icons/vsc";
import { SiLeetcode } from "react-icons/si";
import type { IconType } from "react-icons";
import HyperLink from "../components/HyperLink";
import { projects } from "../data/projects";
import { skills } from "../data/skills";
import { workExperience } from "../data/workExperience";
import { whoAmI } from "../data/aboutMe";
import { socials } from "../data/socials";

const navLinks = [
  { title: "About", url: "#about" },
  { title: "Projects", url: "#projects" },
  { title: "Experience", url: "#experience" },
  { title: "Skills", url: "#skills" },
  { title: "Contact", url: "#contact" },
];

// constants
const GITHUB: string = "Github";
const LINKEDIN: string = "LinkedIn";
const EMAIL: string = "E-Mail";
const LEETCODE: string = "LeetCode";

type SocialLinkProps = {
  title: string;
  url: string;
  logo: IconType;
  isMail?: boolean;
};

const socialLinks: SocialLinkProps[] = [
  {
    title: GITHUB,
    url: socials[GITHUB],
    logo: IoLogoGithub,
  },
  {
    title: LINKEDIN,
    url: socials[LINKEDIN],
    logo: IoLogoLinkedin,
  },
  { title: LEETCODE, url: socials[LEETCODE], logo: SiLeetcode },
  {
    title: EMAIL,
    url: `mailto:${import.meta.env.VITE_EMAIL}`,
    logo: IoMdMail,
  },
];

const Social = ({ socialLink }: { socialLink: SocialLinkProps }) => {
  const Logo = socialLink.logo;
  return (
    <>
      <HyperLink url={socialLink.url} title={socialLink.title}>
        <Logo className="fill-white size-8" />
      </HyperLink>
    </>
  );
};

const SimplePortfolio = () => {
  return (
    <main className="min-h-screen text-[#e8e8e3]">
      {/* Header */}
      <header className="border-b border-[#292d2e]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <a href="/" className="font-bold tracking-tight">
            <img src="/logo.png" className="w-10 h-6" alt="" />
          </a>

          <nav className="hidden gap-6 text-sm text-gray-400 sm:flex">
            {navLinks.map((link) => (
              <HyperLink
                title={link.title}
                key={link.title}
                url={link.url}
                newWindow={false}
                className="transition hover:text-white text-gray-400 no-underline!"
              >
                {link.title}
              </HyperLink>
            ))}
          </nav>

          <Link
            to="/"
            className="text-sm text-gray-400 transition hover:text-white flex gap-1 items-center"
          >
            Terminal View
            <VscTerminalPowershell className="size-6" />
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-28 pt-28">
        <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-7xl">
          Hi, I'm Lav.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          I build web applications and enjoy understanding the systems behind
          them. I work across both frontend and backend development.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-md bg-[#e8e8e3] px-5 py-2.5 text-sm font-medium text-[#0d0f10] transition hover:opacity-90"
          >
            View projects
          </a>

          <a
            href="#contact"
            className="rounded-md border border-[#363b3c] px-5 py-2.5 text-sm text-gray-300 transition hover:border-gray-500"
          >
            Contact me
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-[#292d2e] px-6 py-24">
        <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-[180px_1fr]">
          <h2 className="text-2xl font-semibold">About</h2>
          <div className="max-w-2xl space-y-5 text-gray-400 leading-7">
            {whoAmI.map((content, idx) => (
              <div key={idx}>
                {content.map((nestedContent) => (
                  <p key={nestedContent}>{nestedContent}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-[#292d2e] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold">Projects</h2>

          <div className="grid gap-5 md:grid-cols-2 mt-12">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-lg border border-[#292d2e] bg-[#111415] p-6 transition hover:border-[#454a4b]"
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>

                <p className="mt-3 leading-6 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <span
                      key={technology}
                      className="rounded border border-[#292d2e] px-2.5 py-1 text-xs text-gray-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-5 text-sm">
                  <HyperLink
                    className="text-gray-300 hover:text-white no-underline! flex items-center gap-1"
                    url={project.liveUrl}
                  >
                    Live <HiOutlineExternalLink />
                  </HyperLink>
                  <HyperLink
                    className="text-gray-300 hover:text-white no-underline! flex items-center gap-1"
                    url={project.frontRepoUrl}
                  >
                    Frontend <HiOutlineExternalLink />
                  </HyperLink>
                  <HyperLink
                    className="text-gray-300 hover:text-white no-underline! flex items-center gap-1"
                    url={project.backendRepoUrl}
                  >
                    Backend <HiOutlineExternalLink />
                  </HyperLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-t border-[#292d2e] px-6 py-24">
        <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-[180px_1fr]">
          <h2 className="text-2xl font-semibold">Experience</h2>

          <div className="space-y-12">
            {workExperience.map((experience) => (
              <article
                key={`${experience.company}-${experience.role}`}
                className="border-l border-[#363b3c] pl-6"
              >
                <h3 className="mt-2 text-xl font-semibold">
                  {experience.role}
                </h3>

                <p className="text-yellow-400">{experience.company}</p>
                <p className="text-sm text-gray-500">
                  {experience.duration}{" "}
                  {`( ${experience.durationStart} - ${experience.durationEnd} )`}
                </p>

                <p className="mt-4 max-w-2xl leading-7 text-gray-400">
                  {experience.description}
                </p>

                <ul className="mt-5 space-y-2 text-sm text-gray-400">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>- {highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-[#292d2e] px-6 py-24">
        <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-[180px_1fr]">
          <h2 className="text-2xl font-semibold">Skills</h2>

          <div className="space-y-6">
            {skills.map((category) => (
              <div
                key={category.title}
                className="grid gap-2 sm:grid-cols-[140px_1fr]"
              >
                <p className="text-sm text-gray-500">{category.title}</p>

                <div className="flex flex-wrap gap-2">
                  {category.stack.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-[#151819] px-3 py-1.5 text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-[#292d2e] px-6 py-24">
        <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-[180px_1fr]">
          <h2 className="text-2xl font-semibold">Contact</h2>

          <div>
            <p className="max-w-xl text-lg leading-8 text-gray-400">
              Interested in working together or just want to talk? You can find
              me here.
            </p>

            <div className="mt-7 flex items-center flex-wrap gap-6 text-sm">
              {socialLinks.map((link) => (
                <Social key={link.title} socialLink={link} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#292d2e] px-6 py-6">
        <div className="mx-auto flex max-w-5xl flex-col justify-between gap-3 text-xs text-gray-600 sm:flex-row">
          <span>© {new Date().getFullYear()} B. Lav Kumar</span>
          <Link to="/" className="text-sm transition flex gap-1 items-center">
            Terminal View
            <VscTerminalPowershell className="size-6" />
          </Link>
        </div>
      </footer>
    </main>
  );
};

export default SimplePortfolio;
