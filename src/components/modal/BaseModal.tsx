// /components/modal/BaseModal.tsx

import {
  MouseEventHandler,
  ReactNode,
  useCallback,
  Fragment,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { Dialog, Transition } from '@headlessui/react';

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
    <>
      <Transition appear show={props?.show ? props?.show : false} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={handleOutsideClick}
          id="out"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                  onClick={handleInsideClick}
                >
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {title}
                  </Dialog.Title>
                  <Dialog.Description>hihi</Dialog.Description>

                  <div className="mt-2">{children}</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>,

    root,
  );
};

export default BaseModal;
