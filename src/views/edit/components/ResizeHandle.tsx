import React from 'react';
import { Draggable } from '@/utils/draggable';

interface ResizeHandleProps {
  element: {
    localTime: number;
    duration: number;
  };
  side: 'start' | 'end';
  time: number;
  onChange: (time: number, duration: number) => void;
  onComplete: () => void;
}

export const ResizeHandle: React.FC<ResizeHandleProps> = (props) => {
  const timelineScale = 100;
  return (
    <Draggable
      onStart={(e, data) => {
        return { startX: data.x };
      }}
      onDrag={(e, data, context) => {
        let timeOffset = (data.x - context.startX) / timelineScale;

        if (props.side === 'start') {
          let time = props.element.localTime + timeOffset;
          let duration = props.element.duration - timeOffset;
          if (time < 0) {
            duration += time;
            time = 0;
          }

          props.onChange(time, duration);
        } else {
          const duration = Math.max(props.element.duration + timeOffset, 0.5);

          props.onChange(props.element.localTime, duration);
        }
      }}
      onStop={() => {
        props.onComplete();
      }}
    >
      {(ref) => (
        <div
          className="absolute h-full w-3 cursor cursor-ew-resize"
          ref={ref}
          style={{
            left: props.time * timelineScale - (props.side === 'end' ? 10 : 0),
          }}
        ></div>
      )}
    </Draggable>
  );
};
