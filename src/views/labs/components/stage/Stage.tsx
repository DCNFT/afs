import React from 'react';

import VideoCreatorStore from '@/store/useVideoCreatorStore';
import TopLeftButtons from './Buttons/TopLeftButtons';
import TopRightButtons from './Buttons/TopRightButtons';
import BottomRightButtons from './Buttons/BottomRightButtons';
import BottomLeftButtons from './Buttons/BottomLeftButtons';
import { CompositionNavigation } from './CompositionNavigation';

export const Stage: React.FC = () => {
  const { initializeVideoPlayer, preview, createElement } = VideoCreatorStore();
  return (
    <div className="relative flex-1">
      <div
        ref={(element) => {
          if (element && element !== preview?.element) {
            initializeVideoPlayer(element);
          }
        }}
        style={{ width: '100%', height: '100%' }}
      />
      <TopLeftButtons />
      <TopRightButtons />
      <BottomRightButtons />
      <BottomLeftButtons />
      <CompositionNavigation />
    </div>
  );
};
