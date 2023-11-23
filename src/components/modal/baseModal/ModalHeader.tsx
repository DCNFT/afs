type ModalHeaderProps = {
  children: React.ReactNode;
  background: string;
  p: string;
  headerBorderColor: string;
};

const ModalHeader = ({
  children,
  background,
  p,
  headerBorderColor,
}: ModalHeaderProps) => {
  return (
    <div
      className={`border-b ${headerBorderColor} flex items-center ${p} md:items-center md:bg-transparent md:border-none md:p-0 text-black`}
    >
      {children}
    </div>
  );
};

export default ModalHeader;
