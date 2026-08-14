const ErrorOutput = () => {
  return (
    <div className="w-full flex flex-col text-red-500">
      <p>This command is not recognized as one of the available commands.</p>
      <p>
        Check the spelling of the name, or verify the available commands by
        typing "help".
      </p>
    </div>
  );
};
export default ErrorOutput;
