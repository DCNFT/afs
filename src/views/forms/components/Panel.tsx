import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';
import styles from '@/styles/Home.module.css';
import useVideoCreatorStore from '@/store/useVideoCreatorStore';
import { Button } from '@radix-ui/themes';
import { SettingsPanel } from './SettingsPanel';

const Panel = () => {
  const params = useParams<{ [key: string]: string | string[] }>();
  const [formId, setFormId] = useState<string | null>(null);

  useEffect(() => {
    if (!params.formId) return;
    setFormId(params?.formId as string);
  }, [params.formId]);

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
