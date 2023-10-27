'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ModalProvider } from './ModalProvider';
import useBaseQueryClient from './hooks/queries/useBaseQueryClient';
export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = useBaseQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>{children}</ModalProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
