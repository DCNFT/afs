import React from 'react';
import styles from '@/styles/Home.module.css';
import useVideoCreatorStore from '@/store/useVideoCreatorStore';
import { Button } from '@radix-ui/themes';
import { SettingsPanel } from './SettingsPanel';
import useGetFormId from '../hooks/useGetFormId';

const Panel = () => {
  const formId = useGetFormId();
  const isReady = useVideoCreatorStore((state) => state.isReady);
  const setMode = useVideoCreatorStore((state) => state.setMode);
  const mode = useVideoCreatorStore((state) => state.mode);

  return (
    <div className={styles.panel}>
      {isReady && (
        <div className={styles.panelContent} id="panel">
          {mode === 'interactive' ? (
            <Button onClick={() => setMode('player')}>player</Button>
          ) : (
            <Button onClick={() => setMode('interactive')}>interactive</Button>
          )}
          <SettingsPanel formId={formId as string} />
        </div>
      )}
    </div>
  );
};

export default Panel;
