import { useEffect, useRef, useState } from "react";
import Prompt from "./Prompt";
import OutputWrapper from "./OutputWrapper";
import { checkCommandValidity } from "../utils/checkCommandValidity";
import { VALID_COMMANDS as COMMANDS } from "../constants";

type OutputHistory = {
  command: string;
  type: string;
};

const TerminalScreen = () => {
  const [promptValue, setPromptValue] = useState<string>("");
  const [history, setHistory] = useState<OutputHistory[]>([
    { command: "", type: "default" },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const clearHistory = () => {
    setHistory([]);
    setPromptValue("");
  };

  const submitPrompt = () => {
    const cmd: string = promptValue.trim().toLowerCase();

    // Clears history
    if (cmd == COMMANDS.CLEAR) {
      clearHistory();
      return;
    }

    // Reflects Powershell's behavior when empty command is entered
    if (cmd == "") {
      setHistory((prev) => [...prev, { command: "", type: COMMANDS.EMPTY }]);
      return;
    }

    // Appends entry or error
    setHistory((prev) => [
      ...prev,
      checkCommandValidity(cmd)
        ? { command: cmd, type: cmd }
        : { command: cmd, type: COMMANDS.ERROR },
    ]);
    setPromptValue(""); // resets the prompt
  };

  return (
    <div className="w-full bg-[#2e3436] h-[80vh] rounded-xl flex flex-col overflow-hidden p-1 mt-4">
      <div className="flex flex-col rounded-md w-full h-full overflow-hidden">
        <div className=" bg-blue-400 pt-1.5 pl-1.5 w-full flex">
          <div className="bg-amber-400 py-2 pl-2 pr-18 rounded-t-md flex items-center gap-3">
            <div className="size-6 bg-blue-600"></div>
            <p className="text-xs font-semibold ">Lav's Portfolio</p>
          </div>
        </div>
        <div className="bg-[#202020] text-[#d7d7d2] w-full h-full overflow-y-auto px-1.5 py-2 text-lg font-[Cascadia_Mono]">
          {/* Outputs */}
          {history.map((entry, index) => (
            <OutputWrapper
              key={index}
              command={entry.command}
              commandType={entry.type}
            />
          ))}
          <div className="w-0 h-0" ref={bottomRef}></div>
          <Prompt
            promptValue={promptValue}
            setPromptValue={setPromptValue}
            submitPrompt={submitPrompt}
          />
        </div>
      </div>
    </div>
  );
};

export default TerminalScreen;
