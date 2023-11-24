import { Button } from '@radix-ui/themes';
import { upsertVideo } from '@/api/internal/abs/http';
import useTemplateStore from '@/store/useTemplateStore';
import { useState } from 'react';
import MediaConceptContainer from './MediaConceptContainer';
import PreviewPanel from '../PreviewPanel';
import InformationContainer from './InformationContainer';
import { addObjectToFormData } from '@/utils/addObjectToFormData';
import useToast from '@/hooks/useToast';

type SidePanelProps = {
  handleMediaModal: () => void;
};
const SidePanel = ({ handleMediaModal }: SidePanelProps) => {
  const templateData = useTemplateStore((state) => state.templateData);
  const checkMediaSetList = useTemplateStore(
    (state) => state.checkMediaSetList,
  );
  const storeInfo = useTemplateStore((state) => state.storeInfo);
  const [isLoading, setIsLoading] = useState(false);
  const setCreateVideoInformation = useTemplateStore(
    (state) => state.setCreateVideoInformation,
  );
  const createVideoInformation = useTemplateStore(
    (state) => state.createVideoInformation,
  );

  const { enqueueSuccessBar, enqueueErrorBar, enqueueInfoBar } = useToast();
  const handleMakeVideo = async () => {
    //validatiog
    const isAllChecksTrue = checkMediaSetList.every(
      (checkMedia) => checkMedia.isCheck,
    );

    if (!isAllChecksTrue) {
      enqueueErrorBar('미디어를 모두 입력해주세요.!');
      return;
    }
    //일단 여기서 조립으로
    try {
      setIsLoading(true);
      enqueueInfoBar('video가 제작중이에요');
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
      enqueueSuccessBar('video가 생성되었습니다!');
      setCreateVideoInformation(response?.data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
      enqueueErrorBar('video 생성에 실패했습니다.');
    }
  };

  return (
    <div className="flex-1 pl-4 border-l-2">
      <h3 className="font-bold">
        템플릿에 어울리는 미디어 콘셉트를 추천합니다!
      </h3>
      <MediaConceptContainer />

      <PreviewPanel />
      <InformationContainer />
      <div className="flex gap-3">
        <Button
          className={'bg-violet-500'}
          onClick={handleMakeVideo}
          disabled={isLoading}
        >
          {isLoading ? '제작 중이에요.' : '15초 영상 만들기'}
        </Button>
        {!isLoading && createVideoInformation?.video_url && (
          <Button onClick={handleMediaModal}>영상보기</Button>
        )}
      </div>
    </div>
  );
};

export default SidePanel;
