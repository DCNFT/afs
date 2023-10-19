'use client';

import React, { useRef } from 'react';

import styles from '@/styles/Home.module.css';
import { setPropertyValue } from '@/utils/setPropertyValue';
import useVideoCreatorStore from '@/store/useVideoCreatorStore';
import { useEnsureElementVisibility } from '@/hooks/useEnsureElementVisibility';
import useGetElements from '@/views/forms/hooks/useGetElements';
import { ElementState } from '@creatomate/preview';
import { DEFAULT_IMAGE_URL_LIST } from '../../data';

type VideoSettingPanelProps = {
  videoElement: ElementState;
};
const VideoSettingPanel = ({ videoElement }: VideoSettingPanelProps) => {
  const modificationsRef = useRef<Record<string, any>>({});
  const preview = useVideoCreatorStore((state) => state.preview);
  const ensureElementVisibility = useEnsureElementVisibility();

  return (
    <div className={styles.imageOptions}>
      {DEFAULT_IMAGE_URL_LIST?.map((url) => (
        <div
          key={url}
          className={styles.imageOption}
          style={{ background: `url('${url}')` }}
          onClick={async () => {
            await ensureElementVisibility(videoElement.source.name, 1.5);
            await setPropertyValue(
              preview!,
              videoElement.source.name,
              url,
              modificationsRef.current,
            );
          }}
        />
      ))}
    </div>
  );
};

export default VideoSettingPanel;
