'use client';

import React, { useEffect } from 'react';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import styles from '@/styles/Home.module.css';
import useVideoCreatorStore from '@/store/useVideoCreatorStore';
import ModalRoot from './baseModal/ModalRoot';
import Modal from './baseModal/Modal';
import { ModalProps } from '@/components/modal/baseModal/ModalRoot';
import ReactPlayer from 'react-player';
const PreviewModal = ({ isOpen, onDismiss }: ModalProps) => {
  return (
    <ModalRoot isOpen={isOpen}>
      <Modal>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <ReactPlayer url="https://www.youtube.com/watch?v=LXb3EKWsInQ" />
          </div>
        </div>
      </Modal>
    </ModalRoot>
  );
};
export default PreviewModal;
