import useVideoCreatorStore from '@/store/useVideoCreatorStore';
import { useMemo } from 'react';

const useGetElements = (type: string) => {
  const currentState = useVideoCreatorStore((state) => state.state);

  const elements = useMemo(() => {
    return currentState?.elements.filter(
      (element) => element.source.type === type,
    );
  }, [currentState?.elements, type]);

  return elements;
};

export default useGetElements;
