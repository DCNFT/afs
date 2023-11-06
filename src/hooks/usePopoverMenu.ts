import { usePopper } from 'react-popper';
import { useCallback, useRef, useState } from 'react';
import useOnClickOutside from './useOnClickOutside';

function usePopoverMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [targetRef, setTargetRef] = useState<HTMLDivElement | null>(null);
  const [tooltipRef, setTooltipRef] = useState<HTMLDivElement | null>(null);

  // usePopper configuration
  const { styles, attributes } = usePopper(targetRef, tooltipRef, {
    strategy: 'absolute',
    placement: 'bottom-start',
    modifiers: [{ name: 'offset', options: { offset: [0, 0] } }],
  });

  // Handle clicks outside the popover menu
  // useOnClickOutside(
  //   {
  //     current: targetRef,
  //   },
  //   () => {
  //     setIsOpen(false);
  //   },
  // );

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return {
    isOpen,
    targetRef,
    setTargetRef,
    tooltipRef,
    setTooltipRef,
    toggleMenu,
    styles,
    attributes,
  };
}
export default usePopoverMenu;
