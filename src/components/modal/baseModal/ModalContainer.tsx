import { m as motion, Variants, HTMLMotionProps, PanInfo } from 'framer-motion';

type ModalContainerProps = {
  children: React.ReactNode;
  drag?: boolean | 'x' | 'y' | false;
  ref: React.RefObject<HTMLDivElement>;
} & HTMLMotionProps<'div'>;

const ModalContainer = ({ children, ...props }: ModalContainerProps) => {
  return (
    <motion.div
      className="overflow-hidden bg-white shadow-md border border-cardBorder rounded-b-lg w-full max-h-[calc(var(--vh,1vh)*100)] z-40 bottom-0 min-h-300 md:w-auto md:relative md:bottom-auto md:rounded-md md:max-h-screen"
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ModalContainer;
