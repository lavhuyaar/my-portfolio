import { commands } from "../json/commands";

const checkCommandValidity: (command: string) => boolean = (command) => {
  for (const key in commands) {
    if (key == command) return true;
  }
  return false;
};

export { checkCommandValidity };
