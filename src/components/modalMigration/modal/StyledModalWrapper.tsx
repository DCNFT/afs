import { forwardRef } from 'react';
import { motion, MotionProps } from 'framer-motion';
import {
  animationHandler,
  animationMap,
  animationVariants,
  appearAnimation,
  disappearAnimation,
} from '@/utils/animationToolkit';

import { m } from 'framer-motion';

interface StyledModalWrapperProps extends MotionProps {
  children: React.ReactNode;
}

const StyledModalWrapper = forwardRef<HTMLDivElement, StyledModalWrapperProps>(
  function StyledModalWrapper({ children, animate, variants, ...rest }, ref) {
    return (
      <motion.div
        ref={ref}
        className={`flex flex-col justify-center items-center fixed top-0 right-0 bottom-0 left-0 z-[${1}] will-change-opacity opacity-0 animate-${animate}`}
        variants={variants}
        {...rest}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    );
  },
);

StyledModalWrapper.displayName = 'StyledModalWrapper';

export default StyledModalWrapper;
