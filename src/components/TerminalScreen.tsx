import { useEffect, useRef, useState } from "react";
import Prompt from "./Prompt";
import OutputWrapper from "./OutputWrapper";
import { checkCommandValidity } from "../utils/checkCommandValidity";
import { VALID_COMMANDS as COMMANDS } from "../constants";

type Outputenteries = {
  command: string;
  type: string;
};

const TerminalScreen = () => {
  const [promptValue, setPromptValue] = useState<string>("");
  const [enteries, setTerminalEnteries] = useState<Outputenteries[]>([
    { command: "", type: "default" },
  ]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyPosition, setHistoryPosition] = useState<number>(0);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [enteries]);

  const handleOnArrowUp = () => {
    if (history.length === 0 || historyPosition === 0) return;
    setPromptValue(history[historyPosition - 1]);
    if (historyPosition - 1 === 0) return;
    setHistoryPosition((prev) => prev - 1);
  };

  const handleOnArrowDown = () => {
    if (history.length === 0 || historyPosition >= history.length) {
      setPromptValue("");
      return;
    }
    setPromptValue(history[historyPosition]);
    setHistoryPosition((prev) => prev + 1);
  };

  const clearEnteries = () => {
    setTerminalEnteries([]);
    setPromptValue("");
  };

  const submitPrompt = () => {
    const cmd: string = promptValue.trim().toLowerCase();

    // Reflects Powershell's behavior when empty command is entered
    if (cmd == "") {
      setTerminalEnteries((prev) => [
        ...prev,
        { command: "", type: COMMANDS.EMPTY },
      ]);
      return;
    }

    setHistory((prev) => {
      setHistoryPosition(prev.length + 1);
      return [...prev, cmd];
    });

    // Clears enteries
    if (cmd == COMMANDS.CLEAR) {
      clearEnteries();
      return;
    }

    // Appends entry or error
    setTerminalEnteries((prev) => [
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
        <div className=" bg-[#383e3f] pt-1.5 pl-1.5 w-full flex">
          <div className="bg-[#272b2b] py-2 pl-2 pr-18 rounded-t-md flex items-center gap-2">
            <img className="w-10 h-6 shrink-0" src="/logo.png" />
            <p className="text-xs font-bold text-white">Lav's Portfolio</p>
          </div>
        </div>
        <div className="bg-[#202020] text-[#d7d7d2] w-full h-full overflow-y-auto px-1.5 py-2 text-sm sm:text-lg font-[Cascadia_Mono] break-normal">
          {/* Outputs */}
          {enteries.map((entry, index) => (
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
            onArrowDown={handleOnArrowDown}
            onArrowUp={handleOnArrowUp}
          />
        </div>
      </div>
    </div>
  );
};

export default TerminalScreen;
