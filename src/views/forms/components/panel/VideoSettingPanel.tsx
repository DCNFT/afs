'use client';

import React from 'react';
import styles from '@/styles/Home.module.css';
import { setPropertyValue } from '@/utils/setPropertyValue';
import useVideoCreatorStore from '@/store/useVideoCreatorStore';
import { useEnsureElementVisibility } from '@/hooks/useEnsureElementVisibility';
import { ElementState } from '@creatomate/preview';
import { DEFAULT_VIDEO_URL_LIST } from '../../data';
import ControlButtons from './ControlButtons';

type VideoSettingPanelProps = {
  videoElement: ElementState;
  modificationsRef: Record<string, any>;
};

const VideoSettingPanel = ({
  videoElement,
  modificationsRef,
}: VideoSettingPanelProps) => {
  const preview = useVideoCreatorStore((state) => state.preview);
  const ensureElementVisibility = useEnsureElementVisibility();
  return (
    <div className={styles.imageOptions}>
      {DEFAULT_VIDEO_URL_LIST?.map((videoInformation) => (
        <div
          key={videoInformation?.videoUrl}
          className={styles.imageOption}
          style={{ background: `url('${videoInformation?.thumbnail}')` }}
          onClick={async () => {
            await ensureElementVisibility(videoElement.source.id, 1.5, true);
            await setPropertyValue(
              preview!,
              videoElement.source.id,
              videoInformation?.videoUrl,
              modificationsRef,
            );
          }}
        />
      ))}
      <div>
        <ControlButtons element={videoElement} />
      </div>
    </div>
  );
};

export default VideoSettingPanel;
