import Output from "./Output";
import { VALID_COMMANDS as COMMANDS } from "../constants";

type OutputWrapperProps = {
  command: string;
  commandType: string;
};

const directory: string = "C:\\Users\\Lav>";

const OutputWrapper = ({ command, commandType }: OutputWrapperProps) => {
  if (commandType === COMMANDS.EMPTY)
    return <p className="w-full flex items-center gap-1 break-normal">{directory}</p>;

  return (
    <div className="w-full flex flex-col">
      {command && (
        <>
          <div className="w-full flex items-center gap-1">
            <div>{directory}</div>
            <span className="outline-none pl-2 w-full font-bold text-yellow-400">
              {command}
            </span>
          </div>
          <br />
        </>
      )}
      <Output commandType={commandType} />
      <br />
    </div>
  );
};
export default OutputWrapper;
