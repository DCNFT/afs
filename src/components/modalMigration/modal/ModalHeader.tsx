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
    <div className="border-b border-cardBorder flex items-center p-3 md:items-center md:bg-transparent md:border-none md:p-0">
      {children}
    </div>
  );
};

export default ModalHeader;
