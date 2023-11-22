import { upscale } from '@/api/internal/abs/http';
import { DEFAULT_UPSCALE } from '@/constants/default';
import useSnackBar from '@/hooks/useToast';
import { Button } from '@radix-ui/themes';
import { useState } from 'react';

type RetouchButtonProps = {
  imageFile: {
    file: File;
    imageWidth: number;
    imageHeight: number;
  };
};
const useUpscale = ({ imageFile }: RetouchButtonProps) => {
  const { enqueueErrorBar } = useSnackBar();
  const [isLoadingUpscale, setIsLoadingUpscale] = useState(false);
  const [upscaleData, setUpscaleData] = useState<any>();
  const [error, setError] = useState({
    error: '',
    path: '',
    status: 500,
    timestamp: '',
  });
  const handleUpscaleRequest = async () => {
    if (!imageFile?.file) return;
    try {
      setIsLoadingUpscale(true);
      const data = new FormData();
      data.append('if_id', 'IF-1210-002');
      data.append('version', '1.0');
      data.append('mcode', '1200');
      data.append('scode', '1210');
      data.append('image_file', imageFile.file);
      data.append(
        'target_width',
        (imageFile.imageWidth * DEFAULT_UPSCALE).toString(),
      );
      data.append(
        'target_height',
        (imageFile.imageHeight * DEFAULT_UPSCALE).toString(),
      );
      const response = await upscale({
        data,
      });
      setIsLoadingUpscale(false);
      console.log('response', response.data);
      setUpscaleData(response?.data?.arrSignedUrl);
    } catch (e: any) {
      console.log('에러 발생 ', e?.response?.data);
      setError(e?.response?.data);
      enqueueErrorBar(e?.response?.data?.error);
      setIsLoadingUpscale(false);
    }
  };

  return {
    isLoadingUpscale,
    upscaleData,
    handleUpscaleRequest,
    setUpscaleData,
    setIsLoadingUpscale,
    error,
  };
};

export default useUpscale;
