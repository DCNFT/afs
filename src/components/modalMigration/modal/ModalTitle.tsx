type ModalTitleProps = {
  children: React.ReactNode;
};
const ModalTitle = ({ children }: ModalTitleProps) => {
  return <div className="flex items-center flex-1">{children}</div>;
};
export default ModalTitle;
