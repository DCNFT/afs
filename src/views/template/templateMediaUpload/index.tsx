'use client';

import TemplateBanner from '../components/TemplateBanner';
//import useModal from '@/hooks/useModal';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { TemplateAiRecommendFallback } from '../templateSelect/TemplateTab';
import SceneContainer from './scene/SceneContainer';
import SidePanel from './sidePanel';
//import useTemplateStore from '@/store/useTemplateStore';

const Upload = () => {
  //  const playerModal = useModal();
  // const templateData = useTemplateStore((state) => state.templateData);
  // const handleMediaModal = () => {
  //   playerModal.onOpen();
  // };

  // console.log('templateData= ', templateData);
  return (
    <>
      <TemplateBanner
        title={'템플릿 선택'}
        description={'광고 영상에 필요한 미디어 5개를 업로드해주세요'}
      />
      <div className="flex flex-col p-5">
        <div className="flex">
          <div
            className="flex h-screen overflow-auto"
            style={{ flex: '2 1 0%' }}
          >
            <div className="flex-col w-full">
              {/* <ErrorBoundary FallbackComponent={TemplateAiRecommendFallback}>
                <Suspense fallback={<div>fall</div>}>
                  <SceneContainer />
                </Suspense>
              </ErrorBoundary> */}
            </div>
          </div>
          <SidePanel />
        </div>
      </div>
    </>
  );
};

export default Upload;
