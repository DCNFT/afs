'use client';

import React from 'react';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import { useParams } from 'next/navigation';
import styles from '@/styles/Home.module.css';
import useVideoCreatorStore from '@/store/useVideoCreatorStore';

import useGetFormId from '../hooks/useGetFormId';

const Stage = () => {
  const formId = useGetFormId();

  const windowWidth = useWindowWidth();
  const preview = useVideoCreatorStore((state) => state.preview);
  const initializeVideoPlayer = useVideoCreatorStore(
    (state) => state.initializeVideoPlayer,
  );
  const videoAspectRatio = useVideoCreatorStore(
    (state) => state.videoAspectRatio,
  );
  if (!formId) return;
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.container}
        ref={(htmlElement) => {
          if (htmlElement && htmlElement !== preview?.element && formId) {
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
    </div>
  );
};
export default Stage;
