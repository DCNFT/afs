import useVideoCreatorStore from '@/store/useVideoCreatorStore';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const useGetFormId = () => {
  const params = useParams<{ [key: string]: string | string[] }>();
  //   const [formId, setFormId] = useState<string | null>(null);
  const setFormId = useVideoCreatorStore((state) => state.setFormId);
  const formId = useVideoCreatorStore((state) => state.formId);
  useEffect(() => {
    if (!params.formId) return;
    setFormId(params?.formId as string);
  }, [params.formId, setFormId]);

  return formId;
};

export default useGetFormId;
