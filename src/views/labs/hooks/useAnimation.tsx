import { animation } from '@/api/internal/abs/http';
import useSnackBar from '@/hooks/useToast';
import { useState } from 'react';

type UseRetouchProps = {
  imageFile: {
    file: File;
    imageWidth: number;
    imageHeight: number;
  };
};
const useAnimation = ({ imageFile }: UseRetouchProps) => {
  const { enqueueErrorBar } = useSnackBar();
  const [isLoadingAnimation, setIsLoadingAnimation] = useState(false);
  const [animationData, setAnimationData] = useState<any>();
  const [error, setError] = useState({
    error: '',
    path: '',
    status: 500,
    timestamp: '',
  });

  const handleAnimationRequest = async () => {
    if (!imageFile?.file) return;

    try {
      setIsLoadingAnimation(true);
      const data = new FormData();
      data.append('if_id', 'IF-1210-003');
      data.append('version', '1.0');
      data.append('mcode', '1200');
      data.append('scode', '1210');
      data.append('image_file', imageFile.file);
      const response = await animation({
        data,
      });

      setIsLoadingAnimation(false);
      console.log('response', response);
      setAnimationData(response.data);
    } catch (e: any) {
      console.log(e);
      setIsLoadingAnimation(false);
      setError(e?.response?.data);
      enqueueErrorBar(e?.response?.data.error);
    }
  };

  return {
    animationData,
    setAnimationData,
    isLoadingAnimation,
    setIsLoadingAnimation,
    handleAnimationRequest,
  };
};

export default useAnimation;
