import { LazyComponent } from '@/components/modal/LazyComponent';
import { useModal } from '@/hooks/queries/useModal';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

// ./typings/modal.ts
export interface ModalMeta {
  [name: string]: any;
}

export type Modal = {
  id: string;
  open: boolean;
  meta?: ModalMeta;
};

export type ModalMap = {
  [id: string]: Modal;
};

interface IModalProviderProps {
  children: React.ReactNode;
}

export function ModalProvider(props: IModalProviderProps) {
  const { getOpenModalsList } = useModal();
  const modals = getOpenModalsList();
  console.log('modals= ', modals);
  return (
    <>
      {modals.map((filename) => (
        <LazyComponent key={filename} filename={filename} />
      ))}
      {props.children}
    </>
  );
}
