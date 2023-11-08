'use client';

import React, { useEffect } from 'react';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import styles from '@/styles/Home.module.css';
import useVideoCreatorStore from '@/store/useVideoCreatorStore';
//import useGetFormId from '@/views/forms/hooks/useGetFormId';
//import { CompositionNavigation } from '@/views/forms/components/CompositionNavigation';
import { useModal } from '@/hooks/useModal';
import BaseModal from './BaseModal';
export interface ILoginModalProps {
  isOpen: boolean;
  onClose?: () => void;
}
const PreviewModal = (props: ILoginModalProps) => {
  const setFormId = useVideoCreatorStore((state) => state.setFormId);
  const { getModalMeta } = useModal('PreviewModal');
  const windowWidth = useWindowWidth();
  const preview = useVideoCreatorStore((state) => state.preview);
  const initializeVideoPlayer = useVideoCreatorStore(
    (state) => state.initializeVideoPlayer,
  );
  const videoAspectRatio = useVideoCreatorStore(
    (state) => state.videoAspectRatio,
  );

  useEffect(() => {
    setFormId(getModalMeta()?.formId as string);
  }, [getModalMeta()?.formId]);

  console.log(getModalMeta());

  const handleClose = () => {
    if (props.onClose) props.onClose();
  };

  return (
    <BaseModal title="" show={props.isOpen} onClose={handleClose}>
      <div className={styles.wrapper}>
        <div
          className={styles.container}
          ref={(htmlElement) => {
            if (
              htmlElement &&
              htmlElement !== preview?.element &&
              (getModalMeta()?.formId as string)
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
        {JSON.stringify(getModalMeta())}
      </div>
    </BaseModal>
  );
};
export default PreviewModal;
