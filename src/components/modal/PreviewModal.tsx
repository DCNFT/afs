'use client';

import React, { useEffect } from 'react';
import ModalRoot from './baseModal/ModalRoot';
import Modal from './baseModal/Modal';
import { ModalProps } from '@/components/modal/baseModal/ModalRoot';
import ReactPlayer from 'react-player';
import { Button } from '@radix-ui/themes';
import useTemplateStore from '@/store/useTemplateStore';

const PreviewModal = ({ isOpen, onDismiss }: ModalProps) => {
  const createVideoInformation = useTemplateStore(
    (state) => state.createVideoInformation,
  );

  return (
    <ModalRoot isOpen={isOpen}>
      <Modal onDismiss={onDismiss}>
        <div className="flex-col">
          <div>
            <ReactPlayer url={createVideoInformation?.video_url} controls />
          </div>
          <div className="flex">
            <div className="flex-col ">
              <p className="font-bold text-black">
                {createVideoInformation?.video_name}
              </p>
              {/* <p className="font-bold text-black">id, format date</p> */}
              <div>
                <Button>편집하기</Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </ModalRoot>
  );
};
export default PreviewModal;
