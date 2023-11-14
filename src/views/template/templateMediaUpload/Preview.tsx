'use client';

import React, { useEffect } from 'react';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import styles from '@/styles/Home.module.css';
import useVideoCreatorStore from '@/store/useVideoCreatorStore';
import { ro } from 'date-fns/locale';
import Skeleton from 'react-loading-skeleton';
import { Button } from '@radix-ui/themes';

type PreviewProps = {
  formId: string;
};
const Preview = ({ formId }: PreviewProps) => {
  const setFormId = useVideoCreatorStore((state) => state.setFormId);
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

  console.log(
    'window.innerWidth / videoAspectRatio',
    window.innerWidth / videoAspectRatio,
  );
  console.log('isLoading= ', isReady);
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.container}
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

      <div className="flex gap-1">
        <Button>장면1</Button>
        <Button>장면2</Button>
        <Button>장면3</Button>
        <Button>장면4</Button>
        <Button>장면5</Button>
      </div>
    </div>
  );
};
export default Preview;
