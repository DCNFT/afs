'use client';

import React from 'react';
import styles from '@/styles/Home.module.css';
import { Inter } from 'next/font/google';
import useVideoCreatorStore from '@/store/useVideoCreatorStore';
import Stage from './components/stage';
import Panel from './components/panel';

const inter = Inter({ subsets: ['latin'] });

const Forms = () => {
  const isLoading = useVideoCreatorStore((state) => state.isLoading);
  const tracks = useVideoCreatorStore((state) => state.tracks);
  // console.log('[seo] tracks = ', tracks);

  return (
    <main className={`${styles.main} ${inter.className}`}>
      <Stage />
      <Panel />
      {isLoading && <div className={styles.loadIndicator}>Loading...</div>}
    </main>
  );
};
export default Forms;
