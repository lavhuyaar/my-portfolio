type HyperLinkProps = {
  children?: React.ReactNode;
  url: string;
};

const HyperLink = ({ children, url }: HyperLinkProps) => {
  return (
    <a
      className="underline underline-offset-4 text-[#d7d7d2] hover:text-[#9e9e9c]"
      target="main"
      href={url}
    >
      {children || url}
    </a>
  );
};

export default HyperLink;
