type Heading6Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({ children, className = "", onClick }: Heading6Props) {
  return (
    <h6
      onClick={onClick}
      className={` text-[8px] md:text-[12px] font-extralight ${className}`}
    >
      {children}
    </h6>
  );
}
