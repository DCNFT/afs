import { Button } from '@radix-ui/themes';
import { upsertVideo } from '@/api/internal/abs/http';
import useTemplateStore from '@/store/useTemplateStore';
import { useState } from 'react';
import MediaConceptContainer from './MediaConceptContainer';
import PreviewPanel from '../PreviewPanel';
import InformationContainer from './InformationContainer';
import { addObjectToFormData } from '@/utils/addObjectToFormData';
import useToast from '@/hooks/useToast';

const SidePanel = () => {
  const templateData = useTemplateStore((state) => state.templateData);
  const storeInfo = useTemplateStore((state) => state.storeInfo);
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSuccessBar, enqueueErrorBar } = useToast();
  const handleMakeVideo = async () => {
    //validation
    //일단 여기서 조립으로
    try {
      setIsLoading(true);
      const formData = new FormData();
      // FormData 객체 생성
      formData.append('if_id', 'IF-1110-002');
      formData.append('version', '1.0');
      formData.append('mcode', '1100');
      formData.append('scode', '1110');
      formData.append('template_id', templateData.info.template_id);
      addObjectToFormData('store_info', storeInfo, formData);
      addObjectToFormData(
        'compositions',
        templateData.info.compositions,
        formData,
      );
      const response = await upsertVideo({ data: formData });
      console.log('response = ', response);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 pl-4">
      <h3 className="font-bold">
        템플릿에 어울리는 미디어 콘셉트를 추천합니다!
      </h3>
      <MediaConceptContainer />
      <PreviewPanel />
      <InformationContainer />
      <Button
        className={'bg-violet-500'}
        onClick={handleMakeVideo}
        disabled={isLoading}
      >
        {isLoading ? '제작 중' : '15초 영상 만들기'}
      </Button>
    </div>
  );
};

export default SidePanel;
