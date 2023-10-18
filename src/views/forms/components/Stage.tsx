'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import { useParams } from 'next/navigation';
import styles from '@/styles/Home.module.css';

// import { useQuery } from '@tanstack/react-query';
// import { templateDetail } from '@/api/creatomate';
import useVideoCreatorStore from '@/store/useVideoCreatorStore';
import { Button } from '@radix-ui/themes';

const Stage = () => {
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
  const videoAspectRatio = useVideoCreatorStore(
    (state) => state.videoAspectRatio,
  );

  return (
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
  );
};
export default Stage;
