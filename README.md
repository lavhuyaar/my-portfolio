# My Portfolio

Personal portfolio website of Lav, a full-stack web developer. The main page is an interactive terminal where visitors type commands to explore my work. A conventional single-page layout is also available for anyone who prefers it.

## Features

- Terminal-style interface with command history (arrow up and down)
- Commands for viewing about info, projects, work experience, skills, and social links
- Simple portfolio view at `/simple` with standard sections and navigation
- Responsive layout for desktop and mobile
- Custom 404 page
- Downloadable resume (served from `public/`)

## Terminal Commands

| Command    | Description                                   |
| ---------- | --------------------------------------------- |
| `help`     | Display a list of available commands          |
| `about`    | Learn more about this project                 |
| `whoami`   | Display a brief introduction                  |
| `projects` | Browse projects                               |
| `workexp`  | View professional work experience             |
| `skills`   | View technical skills and technologies        |
| `socials`  | View social profiles and contact links        |
| `default`  | Display the welcome screen                    |
| `clear`    | Clear the terminal screen                     |

## Tech Stack

- React 19 with TypeScript
- Vite
- React Router
- Tailwind CSS v4
- React Icons
- ESLint
- React Compiler (via Babel)

## Getting Started

### Prerequisites

- Node.js (a recent LTS version)
- npm

### Installation

```bash
git clone git@github.com:lavhuyaar/my-portfolio.git
cd my-portfolio
npm install
```

### Environment Variables

Create a `.env` file in the project root with the following values:

```env
VITE_GITHUB=
VITE_LINKEDIN=
VITE_LEETCODE=
VITE_EMAIL=
```

| Variable        | Used for                                          |
| --------------- | ------------------------------------------------- |
| `VITE_GITHUB`   | GitHub profile URL, also the base for repo links  |
| `VITE_LINKEDIN` | LinkedIn profile URL                              |
| `VITE_LEETCODE` | LeetCode profile URL                              |
| `VITE_EMAIL`    | Email address used for the contact link           |

`VITE_GITHUB` should be the profile URL without a trailing slash, since project repository links are built from it.

### Run Locally

```bash
npm run dev
```

The app will be available at the URL printed in the terminal.

## Scripts

| Script            | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the development server             |
| `npm run build`   | Type-check and create a production build |
| `npm run preview` | Preview the production build locally     |
| `npm run lint`    | Run ESLint                               |

## Project Structure

```
my-portfolio/
  public/                 Static assets (logos, resume PDF)
  src/
    components/           Terminal UI components
      outputs/            One component per terminal command
    data/                 Content: about, projects, skills, socials, experience
    pages/                Home (terminal), SimplePortfolio, PageNotFound
    routes/               Route definitions
    utils/                Helper functions
    constants.ts          List of valid terminal commands
    globals.css           Global styles
    main.tsx              App entry point
  index.html
  vite.config.ts
  vercel.json             SPA rewrite rule for deployment
```

## Updating Content

Most of the site's content lives in `src/data/`, so it can be updated without touching any components:

- `aboutMe.ts` for the introduction
- `projects.ts` for projects
- `skills.ts` for skills
- `workExperience.ts` for work experience
- `socials.ts` for social links

To add a new terminal command, add it to `src/constants.ts`, create an output component in `src/components/outputs/`, and register it in the output rendering logic.

To replace the resume, swap out the PDF in `public/`.

## Deployment

The site is configured for Vercel. `vercel.json` rewrites all routes to the root so client-side routing works on refresh. Set the environment variables listed above in the Vercel project settings before deploying.

## Contact

Reach out through the links in the `socials` command or on the `/simple` page.
