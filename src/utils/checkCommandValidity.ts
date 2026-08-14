import { VALID_COMMANDS as COMMANDS } from "../constants";

const checkCommandValidity: (command: string) => boolean = (command) => {
  for (const key in COMMANDS) {
    if (COMMANDS[key] == command) return true;
  }
  return false;
};

export { checkCommandValidity };
