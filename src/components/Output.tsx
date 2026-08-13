type OutputProps = {
  type: string;
};

const Output = ({ type }: OutputProps) => {
  if (type == "default") return <p className="my-2">This is default output hihihihihihi</p>
};
export default Output;
