import React from 'react';
import styles from '@/styles/Home.module.css';
import useVideoCreatorStore from '@/store/useVideoCreatorStore';
import { Button } from '@radix-ui/themes';
import { SettingsPanel } from '@/views/forms/components/panel/SettingsPanel';
import useGetFormId from '@/views/forms/hooks/useGetFormId';
// import { useModal } from '@/hooks/useModal';
import useSnackBar from '@/hooks/useSnackBar';

const Panel = () => {
  const formId = useGetFormId();
  const isReady = useVideoCreatorStore((state) => state.isReady);
  const setMode = useVideoCreatorStore((state) => state.setMode);
  const mode = useVideoCreatorStore((state) => state.mode);
  // const { onOpen, getOpenModalsList } = useModal('LoginModal');
  // console.log('[seo] getOpenModalsList = ', getOpenModalsList());
  const { enqueueInfoBar } = useSnackBar();
  return (
    <div className={styles.panel}>
      {isReady && (
        <div className={styles.panelContent} id="panel">
          {/* <Button onClick={onOpen}>모달 오픈 테스트</Button> */}
          <Button onClick={() => enqueueInfoBar('hi')}>
            토스트 오픈 테스트
          </Button>
          <div>
            {mode === 'interactive' ? (
              <Button onClick={() => setMode('player')}>player</Button>
            ) : (
              <Button onClick={() => setMode('interactive')}>
                interactive
              </Button>
            )}
          </div>

          <SettingsPanel formId={formId as string} />
        </div>
      )}
    </div>
  );
};

export default Panel;
