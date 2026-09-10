type Heading1Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({ children, className = "", onClick }: Heading1Props) {
  return (
    <h1
      onClick={onClick}
      className={` text-[32px] md:text-[50px] font-light text-center ${className}`}
    >
      {children}
    </h1>
  );
}
