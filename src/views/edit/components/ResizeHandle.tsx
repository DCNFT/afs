import React from 'react';
import { Draggable } from '@/utils/Draggable';
import { DEFAULT_RANGE_HANDLER_WIDTH } from '@/constants/default';

interface ResizeHandleProps {
  side: 'start' | 'end';
  localRangeX: number;
  onChange: (range: number, side: 'start' | 'end') => void;
  onComplete: (side: 'start' | 'end') => void;
  range: number;
}

export const ResizeHandle: React.FC<ResizeHandleProps> = (props) => {
  return (
    <Draggable
      onStart={(e, data) => {
        return { startX: data.x };
      }}
      onDrag={(e, data, context) => {
        console.log('data. ', data.x, 'context ', context);
        props.onChange(
          props.localRangeX + (data.x - context.startX),
          props.side,
        );
      }}
      onStop={() => {
        props.onComplete(props.side);
      }}
    >
      {(ref) => (
        <div
          className={`absolute h-full w-[${DEFAULT_RANGE_HANDLER_WIDTH}px] cursor cursor-ew-resize border bg-red-200`}
          ref={ref}
          style={{ left: props.range }}
        ></div>
      )}
    </Draggable>
  );
};
