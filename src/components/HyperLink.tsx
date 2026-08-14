type HyperLinkProps = {
  children?: React.ReactNode;
  url: string;
  isMail?: boolean;
  newWindow?: boolean;
};

const HyperLink = ({
  children,
  url,
  isMail = false,
  newWindow = true,
}: HyperLinkProps) => {
  return (
    <a
      className="underline underline-offset-4 outline-none text-[#d7d7d2] hover:text-[#9e9e9c] break-all"
      target={newWindow ? "main" : ""}
      href={isMail ? `mailto:${url}` : url}
      onMouseDown={(e) => {
        e.preventDefault();
      }}
    >
      {children || url}
    </a>
  );
};

export default HyperLink;
