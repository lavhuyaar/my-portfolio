import { VALID_COMMANDS as COMMANDS } from "../constants";
import DefaultOutput from "./outputs/DefaultOutput";
import ErrorOutput from "./outputs/ErrorOutput";

const outputs: {
  [key: string]: () => React.JSX.Element;
} = {
  [COMMANDS.DEFAULT]: DefaultOutput,
  [COMMANDS.ERROR]: ErrorOutput,
};

const Output = ({ commandType }: { commandType: string }) => {
  const Component = outputs[commandType];
  return <Component />;
};
export default Output;
