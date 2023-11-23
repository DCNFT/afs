'use client';

import React, { useCallback, useEffect } from 'react';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import styles from '@/styles/Home.module.css';
import useVideoCreatorStore from '@/store/useVideoCreatorStore';
import { ro } from 'date-fns/locale';
import Skeleton from 'react-loading-skeleton';
import { Button } from '@radix-ui/themes';
import Template from '..';
import useTemplateStore from '@/store/useTemplateStore';

type PreviewProps = {
  formId: string;
  source?: Record<string, any>;
};
const SceneChangeButtonContainer = () => {
  const templateData = useTemplateStore((state) => state.templateData);
  const setTime = useVideoCreatorStore((state) => state.setTime);

  const handleSceneChange = useCallback(
    (time: number) => {
      setTime(time);
    },
    [setTime],
  );

  return (
    <div className="flex gap-1 mt-2 justify-center items-center">
      {templateData.info.compositions.map((composition, index) => {
        return (
          <Button
            className="bg-violet-600"
            key={`composition-scene-${index}`}
            onClick={() => handleSceneChange(composition?.time)}
          >{`장면 ${index + 1}`}</Button>
        );
      })}
    </div>
  );
};
const Preview = ({ formId, source }: PreviewProps) => {
  const setFormId = useVideoCreatorStore((state) => state.setFormId);
  const setSource = useVideoCreatorStore((state) => state.setSource);
  const isReady = useVideoCreatorStore((state) => state.isReady);
  const windowWidth = useWindowWidth();
  const preview = useVideoCreatorStore((state) => state.preview);
  const initializeVideoPlayer = useVideoCreatorStore(
    (state) => state.initializeVideoPlayer,
  );
  const videoAspectRatio = useVideoCreatorStore(
    (state) => state.videoAspectRatio,
  );

  useEffect(() => {
    setFormId(formId);
  }, [formId, setFormId]);

  useEffect(() => {
    if (!source) return;
    setSource(source);
  }, [source, setSource]);

  console.log(
    'window.innerWidth / videoAspectRatio',
    window.innerWidth / videoAspectRatio,
  );
  console.log('isLoading= ', isReady);
  return (
    <div className="flex-col md:flex-row p-4">
      <div
        className="w-full h-full max-h-[720px] max-w-[720px] mr-auto md:flex-1 md:p-20;"
        ref={(htmlElement) => {
          if (
            htmlElement &&
            htmlElement !== preview?.element &&
            formId !== ''
          ) {
            initializeVideoPlayer(htmlElement);
          }
        }}
        style={{
          height:
            videoAspectRatio && windowWidth && windowWidth < 768
              ? window.innerWidth / videoAspectRatio
              : undefined,
        }}
      />
      {!isReady && <Skeleton height={'200px'} width={'400px'} />}
      {isReady && <SceneChangeButtonContainer />}
    </div>
  );
};
export default Preview;
