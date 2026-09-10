type Heading4Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({ children, className = "", onClick }: Heading4Props) {
  return (
    <h4
      onClick={onClick}
      className={` text-[10px] md:text-[14px] font-extralight ${className}`}
    >
      {children}
    </h4>
  );
}
