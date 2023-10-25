'use client';

import React, { useRef } from 'react';

import styles from '@/styles/Home.module.css';
import { setPropertyValue } from '@/utils/setPropertyValue';
import useVideoCreatorStore from '@/store/useVideoCreatorStore';
import { useEnsureElementVisibility } from '@/hooks/useEnsureElementVisibility';
import { ElementState } from '@creatomate/preview';
import { DEFAULT_IMAGE_URL_LIST } from '../../data';
import ControlButtons from './ControlButtons';

type ImageSettingPanelProps = {
  imageElement: ElementState;
  modificationsRef: Record<string, any>;
};
const ImageSettingPanel = ({
  imageElement,
  modificationsRef,
}: ImageSettingPanelProps) => {
  const preview = useVideoCreatorStore((state) => state.preview);
  const ensureElementVisibility = useEnsureElementVisibility();
  console.log('[seo]imageElement = ', imageElement);
  return (
    <div className={styles.imageOptions}>
      {DEFAULT_IMAGE_URL_LIST?.map((url) => (
        <div
          key={url}
          className={styles.imageOption}
          style={{ background: `url('${url}')` }}
          onClick={async () => {
            await ensureElementVisibility(imageElement.source.name, 1.5);
            await setPropertyValue(
              preview!,
              imageElement.source.name,
              url,
              modificationsRef,
            );
          }}
        />
      ))}
      <div>
        <ControlButtons element={imageElement} />
      </div>
    </div>
  );
};

export default ImageSettingPanel;
