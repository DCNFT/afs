import React from 'react';
import { Draggable } from '@/utils/Draggable';

interface ResizeHandleProps {
  side: 'start' | 'end';
  onChange: (width: number) => void;
  onComplete: () => void;
  width: number;
}

export const ResizeHandle: React.FC<ResizeHandleProps> = (props) => {
  const timelineScale = 100;
  return (
    <Draggable
      onStart={(e, data) => {
        return { startX: data.x };
      }}
      onDrag={(e, data, context) => {
        console.log('data. ', data.x, 'context ', context);
        props.onChange(data.x - context.startX);
      }}
      onStop={() => {
        props.onComplete();
      }}
    >
      {(ref) => (
        <div
          className="absolute h-full w-3 cursor cursor-ew-resize border "
          ref={ref}
          style={{ left: props.side === 'start' ? props.width : '296px' }}
        ></div>
      )}
    </Draggable>
  );
};
