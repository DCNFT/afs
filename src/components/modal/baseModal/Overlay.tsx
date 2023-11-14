import { useEffect } from 'react';
interface OverlayProps extends React.HTMLAttributes<HTMLElement> {
  isUnmounting?: boolean;
}

const BodyLock = () => {
  useEffect(() => {
    document.body.style.cssText = `
        overflow: hidden;
      `;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.cssText = `
          overflow: visible;
          overflow: overlay;
        `;
    };
  }, []);

  return null;
};

const Overlay: React.FC<OverlayProps> = ({ isUnmounting, ...props }) => {
  return (
    <>
      <BodyLock />
      <div
        className={`fixed top-0 left-0 w-full h-full bg-opacity-90 bg-gray-300 z-20 transition-opacity opacity-mount animate-mount`}
        role="presentation"
        {...props}
      />
    </>
  );
};

export default Overlay;
