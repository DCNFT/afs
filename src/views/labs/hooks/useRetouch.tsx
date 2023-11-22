import { retouch } from '@/api/internal/abs/http';
import useSnackBar from '@/hooks/useToast';
import { useState } from 'react';

type UseRetouchProps = {
  imageFile: {
    file: File;
    imageWidth: number;
    imageHeight: number;
  };
};
const useRetouch = ({ imageFile }: UseRetouchProps) => {
  const { enqueueErrorBar } = useSnackBar();
  const [isLoadingRetouch, setIsLoadingRetouch] = useState(false);
  const [retouchData, setRetouchData] = useState<any>();
  const [error, setError] = useState({
    error: '',
    path: '',
    status: 500,
    timestamp: '',
  });
  const handleIntegrationRequest = async () => {
    if (!imageFile?.file) return;
    try {
      setIsLoadingRetouch(true);
      const data = new FormData();
      data.append('if_id', 'IF-1210-001');
      data.append('version', '1.0');
      data.append('mcode', '1200');
      data.append('scode', '1210');
      data.append('image_file', imageFile.file);
      data.append('target_width', imageFile.imageWidth.toString());
      data.append('target_height', imageFile.imageHeight.toString());
      data.append('has_scale', 'true');
      data.append('has_animation', 'true');
      const response = await retouch({
        data,
      });

      setIsLoadingRetouch(false);
      console.log('response', response);
      setRetouchData(response.data);
    } catch (e: any) {
      console.log('에러 발생 ', e?.response?.data);
      setIsLoadingRetouch(false);
      setError(e?.response?.data);
      enqueueErrorBar(e?.response?.data.error);
    }
  };

  return {
    retouchData,
    isLoadingRetouch,
    handleIntegrationRequest,
    setRetouchData,
    setIsLoadingRetouch,
  };
};

export default useRetouch;
