'use client';

import React, { useEffect } from 'react';
import styles from '@/styles/Home.module.css';
import ModalRoot from './baseModal/ModalRoot';
import Modal from './baseModal/Modal';
import { ModalProps } from '@/components/modal/baseModal/ModalRoot';
import ReactPlayer from 'react-player';
import { Button } from '@radix-ui/themes';

const PreviewModal = ({ isOpen, onDismiss }: ModalProps) => {
  return (
    <ModalRoot isOpen={isOpen}>
      <Modal>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <ReactPlayer url="https://www.youtube.com/watch?v=LXb3EKWsInQ" />
          </div>
        </div>
        <div className="flex justify-evenly">
          <div className="flex-col">
            <p>제목</p>
            <p>id, format date</p>
          </div>
          <div>
            <Button>편집하기</Button>
          </div>
        </div>
      </Modal>
    </ModalRoot>
  );
};
export default PreviewModal;
