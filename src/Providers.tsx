'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import useBaseQueryClient from './hooks/queries/useBaseQueryClient';
import { MatchBreakpointsProvider } from './components/MatchBreakpoints/Provider';
export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = useBaseQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MatchBreakpointsProvider>{children}</MatchBreakpointsProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
