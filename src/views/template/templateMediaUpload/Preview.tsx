'use client';

import React, { useCallback, useEffect } from 'react';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import useVideoCreatorStore from '@/store/useVideoCreatorStore';
import Skeleton from 'react-loading-skeleton';
import { Button } from '@radix-ui/themes';
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
      {templateData?.info?.compositions.map((composition, index) => {
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

  const reset = useVideoCreatorStore((state) => state.reset);

  useEffect(() => {
    setFormId(formId);
  }, [formId, setFormId]);

  useEffect(() => {
    if (!source) return;
    setSource(source);
  }, [source, setSource]);

  useEffect(() => {
    return () => {
      reset();
    };
  }, []);
  return (
    <div className="flex-col md:flex-row p-4">
      <div
        className={`w-full h-full max-h-[720px] max-w-[720px] mr-auto md:flex-1 md:p-20`}
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
              ? window?.innerWidth / videoAspectRatio
              : '400px',
          display: isReady ? 'block' : 'none',
        }}
      />

      {!isReady && (
        <div
          className={`w-full h-full max-h-[720px] max-w-[720px] mr-auto md:flex-1 md:p-20`}
        >
          <Skeleton height={'200px'} width={'400px'} />
        </div>
      )}
      {isReady && <SceneChangeButtonContainer />}
    </div>
  );
};
export default Preview;
