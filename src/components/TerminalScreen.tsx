import { useState } from "react";
import Prompt from "./Prompt";
import Output from "./Output";
import { checkCommandValidity } from "../utils/checkCommandValidity";

const TerminalScreen = () => {
  const [promptMessage, setPromptMessage] = useState<string>("");
  const [outputHistory, setOutputHistory] = useState<string[]>(["default"]);

  const clearHistory = () => {
    setOutputHistory([]);
    setPromptMessage("");
  };

  const submitPrompt = () => {
    // Clears history
    if (promptMessage == "clear") {
      clearHistory();
      return;
    }

    // Appends output or error
    setOutputHistory((prev) => [
      ...prev,
      checkCommandValidity(promptMessage) ? promptMessage : "error",
    ]);
    // either pushes a valid command or tells an error must be printed
    setPromptMessage(""); // resets the prompt
  };

  return (
    <div className="w-full bg-[#2e3436] h-[80vh] rounded-xl flex flex-col overflow-hidden p-1 mt-4">
      <div className="flex flex-col rounded-md w-full h-full overflow-hidden">
        <div className=" bg-blue-400 pt-1.5 pl-1.5 w-full flex">
          <div className="bg-amber-400 py-2 pl-2 pr-18 rounded-t-md flex items-center gap-3">
            <div className="size-6 bg-blue-600"></div>
            <p className="text-xs font-semibold ">Windows PowerShell</p>
          </div>
        </div>
        <div className="bg-[#202020] text-[#eeeeec] w-full h-full overflow-y-auto px-1.5 py-2 text-lg font-[Cascadia_Mono]">
          {/* Outputs */}
          {outputHistory.map((outputType, index) => (
            <Output key={index} type={outputType} />
          ))}

          <Prompt
            message={promptMessage}
            setMessage={setPromptMessage}
            submitPrompt={submitPrompt}
          />
        </div>
      </div>
    </div>
  );
};

export default TerminalScreen;
