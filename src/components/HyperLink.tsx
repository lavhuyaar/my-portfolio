type HyperLinkProps = {
  children?: React.ReactNode;
  url: string;
  title?: string;
  newWindow?: boolean;
  className?: string;
};

const HyperLink = ({
  children,
  url,
  title,
  newWindow = true,
  className,
}: HyperLinkProps) => {
  return (
    <a
      title={title}
      className={`underline underline-offset-4 outline-none text-[#d7d7d2] hover:text-[#9e9e9c] break-all ${className || ""} `}
      target={newWindow ? "main" : ""}
      href={url}
      onMouseDown={(e) => {
        e.preventDefault();
      }}
    >
      {children || url}
    </a>
  );
};

export default HyperLink;
