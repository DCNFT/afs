import { useEffect } from 'react';
interface OverlayProps {
  isUnmounting?: boolean;
}

const Overlay = ({ isUnmounting, ...props }: OverlayProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-text99 z-20 transition-opacity ${
          isUnmounting ? 'animate-unmount' : 'animate-mount'
        }`}
        role="presentation"
        {...props}
      />
    </>
  );
};

export default Overlay;
