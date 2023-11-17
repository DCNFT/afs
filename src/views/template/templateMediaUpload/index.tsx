'use client';

import Icon from '@/components/Icon';
import TemplateBanner from '../components/TemplateBanner';
import useModal from '@/hooks/useModal';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { TemplateAiRecommendFallback } from '../templateSelect/TemplateTab';
import SidePanel from './SidePanel';
import SceneContainer from './scene/SceneContainer';

const Upload = () => {
  const playerModal = useModal();

  const handleMediaModal = () => {
    playerModal.onOpen();
  };

  return (
    <>
      <TemplateBanner
        title={'템플릿 선택'}
        description={'광고 영상에 필요한 미디어 5개를 업로드해주세요'}
      />
      <div className="flex flex-col p-5">
        <div className="flex">
          <div className="flex" style={{ flex: '2 1 0%' }}>
            <div className="flex-col w-full">
              <ErrorBoundary FallbackComponent={TemplateAiRecommendFallback}>
                <Suspense fallback={<div>fall</div>}>
                  <SceneContainer />
                </Suspense>
              </ErrorBoundary>
            </div>
          </div>
          <SidePanel />
        </div>
      </div>
    </>
  );
};

export default Upload;
