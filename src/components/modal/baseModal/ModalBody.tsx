type ModalBodyProps = {
  children: React.ReactNode;
  position?: string;
  top?: string;
  p?: string;
  onPointerDownCapture: (e: any) => void;
  style?: React.CSSProperties;
};

const ModalBody = ({ children, ...props }: ModalBodyProps) => {
  return (
    <div className="flex items-center justify-center border-b p-12 " {...props}>
      {children}
    </div>
  );
};

export default ModalBody;
