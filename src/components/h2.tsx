type Heading2Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({ children, className = "", onClick }: Heading2Props) {
  return (
    <h2
      onClick={onClick}
      className={` text-[28px] md:text-[50px] mb-[25px] font-light text-center ${className}`}
    >
      {children}
    </h2>
  );
}
