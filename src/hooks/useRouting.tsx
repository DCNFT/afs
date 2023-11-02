import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

type useRoutingProps = {
  path: string;
};
const useRouting = ({ path }: useRoutingProps) => {
  const router = useRouter();

  const handleRouting = useCallback(() => {
    router.push(path);
  }, [path, router]);

  return handleRouting;
};

export default useRouting;
