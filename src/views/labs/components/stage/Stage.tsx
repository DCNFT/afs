import React from 'react';

import VideoCreatorStore from '@/store/VideoCreatorStore';
const Main = 'relative flex-1';
const TopLeftButtons = 'absolute top-5 left-5 flex flex-col';
const TopRightButtons = 'absolute top-5 right-5 flex items-center';
const BottomLeftButtons = 'absolute bottom-5 left-5 flex flex-col';
const BottomRightButtons = 'absolute bottom-5 right-5 flex flex-col';

const LoadingText = 'mr-20 text-gray-400';

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
      {/* <CompositionNavigation /> */}
    </div>
  );
};
