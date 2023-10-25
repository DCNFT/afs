// ./components/modal/LazyComponent.tsx

import { Suspense, lazy, useCallback } from 'react';
import { useModal } from '@hooks/queries/useModal';
import { ErrorBoundary } from 'react-error-boundary';

interface ILazyComponentProps {
  filename: string;
}

export function LazyComponent({ filename }: ILazyComponentProps) {
  console.log(`loading ./${filename}/${filename}.tsx`);
  const { isOpen, onClose, getModalMeta } = useModal(filename);

  const meta = getModalMeta();
  console.log('[seo] meta ,', meta);

  const handleModalClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const Component = lazy(() => import(`@components/modal/${filename}.tsx`));

  return (
    <Suspense fallback={null}>
      <ErrorBoundary fallback={<>error!</>}>
        {filename ? (
          <Component isOpen={isOpen} onClose={handleModalClose} {...meta} />
        ) : null}
      </ErrorBoundary>
    </Suspense>
  );
}
