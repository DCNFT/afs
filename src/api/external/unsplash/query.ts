import { useFetch } from '@/module/reactQueryManager';

export const useFetchUnsplashRandomImages = () =>
  useFetch<any[]>({
    url: `https://api.unsplash.com/photos/random?count=20&client_id=${process.env.NEXT_PUBLIC_UNSPLSH_API_KEY}`,
    customQueryKey: 'image',
  });
