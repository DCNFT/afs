'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import { useParams } from 'next/navigation';
import styles from '@/styles/Home.module.css';
import { SettingsPanel } from './components/SettingsPanel';
import { Inter } from 'next/font/google';
// import { useQuery } from '@tanstack/react-query';
// import { templateDetail } from '@/api/creatomate';
import useVideoCreatorStore from '@/store/useVideoCreatorStore';
import { Button } from '@radix-ui/themes';

const inter = Inter({ subsets: ['latin'] });

const Forms = () => {
  const params = useParams<{ [key: string]: string | string[] }>();
  const [formId, setFormId] = useState<string | null>(null);
  // const { data, error } = useQuery(
  //   ['templateDetail', formId],
  //   () => templateDetail(formId as string),
  //   {
  //     enabled: !!formId,
  //   },
  // );

  useEffect(() => {
    if (!params.formId) return;
    setFormId(params?.formId as string);
  }, [params.formId]);

  const windowWidth = useWindowWidth();
  const preview = useVideoCreatorStore((state) => state.preview);
  const initializeVideoPlayer = useVideoCreatorStore(
    (state) => state.initializeVideoPlayer,
  );
  const setMode = useVideoCreatorStore((state) => state.setMode);
  const isLoading = useVideoCreatorStore((state) => state.isLoading);
  const isReady = useVideoCreatorStore((state) => state.isReady);
  const mode = useVideoCreatorStore((state) => state.mode);
  const videoAspectRatio = useVideoCreatorStore(
    (state) => state.videoAspectRatio,
  );

  return (
    <main className={`${styles.main} ${inter.className}`}>
      <div className={styles.wrapper}>
        <div
          className={styles.container}
          ref={(htmlElement) => {
            if (htmlElement && htmlElement !== preview?.element && formId) {
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

      <div className={styles.panel}>
        {isReady && (
          <div className={styles.panelContent} id="panel">
            {mode === 'interactive' ? (
              <Button onClick={() => setMode('player')}>player</Button>
            ) : (
              <Button onClick={() => setMode('interactive')}>
                interactive
              </Button>
            )}
            <SettingsPanel formId={formId as string} />
          </div>
        )}
      </div>

      {isLoading && <div className={styles.loadIndicator}>Loading...</div>}
    </main>
  );
};
export default Forms;
