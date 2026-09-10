type Heading3Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({ children, className = "", onClick }: Heading3Props) {
  return (
    <h3
      onClick={onClick}
      className={` text-[14px] md:text-[18px] font-extralight mb-[6px] md:mb-[10px] ${className}`}
    >
      {children}
    </h3>
  );
}
