const directory: string = "C:\\Users\\Lav>";

type PromptProps = {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  submitPrompt: VoidFunction;
};

const Prompt = ({ message, setMessage, submitPrompt }: PromptProps) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleOnKeyboardEvent = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key == "Enter") {
      submitPrompt();
    }
  };

  return (
    <div className="w-full flex items-center gap-1">
      <div className="">{directory}</div>
      <input
        type="text"
        value={message}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyboardEvent}
        className="outline-none pl-2 w-full font-bold text-yellow-400"
        autoFocus
      />
    </div>
  );
};
export default Prompt;
