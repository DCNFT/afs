'use client';

import React, { useRef } from 'react';

import styles from '@/styles/Home.module.css';
import { setPropertyValue } from '@/utils/setPropertyValue';
import useVideoCreatorStore from '@/store/useVideoCreatorStore';
import { useEnsureElementVisibility } from '@/hooks/useEnsureElementVisibility';
import { ElementState } from '@creatomate/preview';
import { DEFAULT_VIDEO_URL_LIST } from '../../data';
import { Button } from '@radix-ui/themes';

type VideoSettingPanelProps = {
  videoElement: ElementState;
  modificationsRef: Record<string, any>;
};

//현재 조작중인 input에 있는 id를 가져온다
//const getActiveElementId
//const getVideo
const changeMultimedia = () => {
  // 비디오 선택
  // 해당 비디오 소스 저장
  // 비디오 제거
  // 이미지 생성
  // 세팅 컴포지션
  // 셋팅 액티브 엘리먼트
};
const VideoSettingPanel = ({
  videoElement,
  modificationsRef,
}: VideoSettingPanelProps) => {
  const preview = useVideoCreatorStore((state) => state.preview);
  const ensureElementVisibility = useEnsureElementVisibility();
  const createElement = useVideoCreatorStore((state) => state.createElement);
  const deleteElement = useVideoCreatorStore((state) => state.deleteElement);
  const updateElement = useVideoCreatorStore((state) => state.updateElement);
  console.log('[seo]videoElement = ', videoElement, deleteElement);
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
      <Button
        onClick={() =>
          console.log('[seo] videoElement.source.id = ', videoElement.source.id)
        }
      >
        현재 비디오 소스
      </Button>
      <Button
        onClick={async () => {
          await createElement({
            type: 'image',
            source:
              'https://creatomate-static.s3.amazonaws.com/video-creator-js/gradienta-ix_kUDzCczo-unsplash.jpg',
          });
        }}
      >
        create Element
      </Button>
      <Button
        onClick={async () => {
          await deleteElement(videoElement.source.id, true);
        }}
      >
        delete Element
      </Button>
      <Button
        onClick={async () => {
          await updateElement(videoElement.source.id, {
            type: 'image',
            source:
              'https://creatomate-static.s3.amazonaws.com/video-creator-js/gradienta-ix_kUDzCczo-unsplash.jpg',
          });
        }}
      >
        update
      </Button>
    </div>
  );
};

export default VideoSettingPanel;
