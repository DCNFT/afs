'use client';

import React, { useEffect } from 'react';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import styles from '@/styles/Home.module.css';
import useVideoCreatorStore from '@/store/useVideoCreatorStore';
import ModalRoot from './baseModal/ModalRoot';
import Modal from './baseModal/Modal';
import { ModalProps } from '@/components/modal/baseModal/ModalRoot';

const PreviewModal = ({ isOpen, onDismiss }: ModalProps) => {
  const setFormId = useVideoCreatorStore((state) => state.setFormId);
  const windowWidth = useWindowWidth();
  const preview = useVideoCreatorStore((state) => state.preview);
  const initializeVideoPlayer = useVideoCreatorStore(
    (state) => state.initializeVideoPlayer,
  );
  const videoAspectRatio = useVideoCreatorStore(
    (state) => state.videoAspectRatio,
  );

  return (
    <ModalRoot isOpen={isOpen}>
      <Modal>
        <div className={styles.wrapper}>
          <div
            className={styles.container}
            ref={(htmlElement) => {
              if (htmlElement && htmlElement !== preview?.element) {
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
      </Modal>
    </ModalRoot>
  );
};
export default PreviewModal;
