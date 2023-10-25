// /components/modal/BaseModal.tsx

import { MouseEventHandler, ReactNode, useCallback } from 'react';
import { createPortal } from 'react-dom';

import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import '@/styles/modal.css';

export interface IBaseModalProps {
  show: boolean;
  title: string;
  children: string | ReactNode;
  footer?: string | ReactNode;
  closeOnTap?: boolean;
  onClose?: () => void;
}

const BaseModal = (props: IBaseModalProps) => {
  console.log('[seo] props =', props);
  const { title, footer, closeOnTap, onClose, children } = props;

  const root = document.getElementById('root');
  if (!root) throw new Error('Root node not found. Can`t render modal.');

  const handleInsideClick: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      if (!closeOnTap) {
        event.stopPropagation();
      }
    },
    [closeOnTap],
  );

  const handleOutsideClick: any = useCallback(
    (event: any) => {
      if (onClose) {
        onClose();
      }
    },
    [onClose],
  );

  return createPortal(
    <Dialog.Root open={props.show}>
      {/* <Dialog.Trigger asChild>
        <button className="Button violet">Edit profile</button>
      </Dialog.Trigger> */}
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        {children}
        <div
          style={{
            display: 'flex',
            marginTop: 25,
            justifyContent: 'flex-end',
          }}
        >
          <Dialog.Close asChild>
            <button className="Button green">Save changes</button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close" onClick={onClose}>
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>,

    root,
  );
};

export default BaseModal;
