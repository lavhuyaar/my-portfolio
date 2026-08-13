const TerminalScreen = ({ children }: { children?: React.ReactNode }) => {

  // const [promptMessage, setPromptMessage] = useState<string>("");

  return (
    <div className="w-full bg-violet-400 h-[80vh] border-4 rounded-xl flex flex-col overflow-hidden p-1 mt-4">
      <div className="flex flex-col rounded-md w-full h-full overflow-hidden">
        <div className=" bg-blue-400 pt-1.5 pl-1.5 w-full flex">
          <div className="bg-amber-400 py-2 pl-2 pr-18 rounded-t-md flex items-center gap-3">
            <div className="size-6 bg-blue-600"></div>
            <p className="text-xs font-semibold ">Windows PowerShell</p>
          </div>
        </div>
        <div className=" bg-red-500 w-full h-full overflow-y-auto px-1.5 py-3">
        </div>
      </div>
      {children}
    </div>
  );
};

export default TerminalScreen;
