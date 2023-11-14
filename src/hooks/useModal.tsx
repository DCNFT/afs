import React, { useCallback, useState } from 'react';
export type UseModalProps = ReturnType<typeof useModal>;

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const onDismiss = useCallback(() => setIsOpen(false), []);
  const onOpen = useCallback(() => setIsOpen(true), []);

  return {
    onDismiss,
    onOpen,
    isOpen,
    setIsOpen,
  };
}

export default useModal;
