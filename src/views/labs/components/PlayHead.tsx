import React, { useCallback } from 'react';
// import { runInAction } from 'mobx';
// import { observer } from 'mobx-react-lite';
import throttle from 'lodash/throttle';
// import { videoCreator } from '../../stores/VideoCreatorStore';
import { Draggable } from '@/utils/Draggable';

export const Playhead: React.FC = () => {
  //   const time = videoCreator.time;
  //   const timelineScale = videoCreator.timelineScale;

  // Get the active composition's appearance time
  let compositionTime = 0;
  if (videoCreator.activeCompositionId) {
    const composition = videoCreator.preview?.findElement(
      (element) => element.source.id === videoCreator.activeCompositionId,
    );

    if (composition) {
      compositionTime = composition.globalTime;
    }
  }

  const scrubToTime = (time: number) => {
    runInAction(() => (videoCreator.isScrubbing = true));
    videoCreator
      .setTime(time)
      .then(() => runInAction(() => (videoCreator.isScrubbing = false)));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const throttledScrubToTime = useCallback(throttle(scrubToTime, 15), []);

  return (
    <Draggable
      onStart={(e, data) => {
        return { startX: data.x, startTime: time };
      }}
      onDrag={(e, data, context) => {
        const time = Math.max(
          context.startTime + (data.x - context.startX) / timelineScale,
          0,
        );
        throttledScrubToTime(time);
      }}
      onStop={() => {}}
    >
      {(ref, context) => (
        <div
          ref={ref}
          className="absolute z-10 top-0 h-full transform -translate-x-1/2"
          style={{ left: `${(time - compositionTime) * timelineScale}px` }}
        >
          <div className="w-14 h-24 bg-red-600 rounded-md"></div>
          <div className="ml-6 w-2 h-full bg-red-600"></div>
        </div>
      )}
    </Draggable>
  );
};
