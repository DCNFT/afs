import React, { Fragment, useEffect, useState } from 'react';
import { ElementState } from '@creatomate/preview';
import { Draggable } from '@/utils/Draggable';
import { ResizeHandle } from './ResizeHandle';
import VideoCreatorStore from '@/store/useVideoCreatorStore';

interface TimelineElementProps {
  element: ElementState;
}

export const TimelineElement: React.FC<TimelineElementProps> = (props) => {
  const { timelineScale, activeElementIds, setActiveElements, preview } =
    VideoCreatorStore();

  const active = activeElementIds.includes(props.element.source.id);

  const [placement, setPlacement] = useState({
    time: props.element.localTime,
    duration: props.element.duration,
  });
  useEffect(() => {
    setPlacement({
      time: props.element.localTime,
      duration: props.element.duration,
    });
  }, [props.element.localTime, props.element.duration]);

  const applyPlacement = async () => {
    await preview?.applyModifications({
      [`${props.element.source.id}.time`]: placement.time,
      [`${props.element.source.id}.duration`]: placement.duration,
    });
  };

  return (
    <Fragment>
      <Draggable
        onStart={(e, data) => {
          return { startX: data.x };
        }}
        onDrag={(e, data, context) => {
          const timeOffset = (data.x - context.startX) / timelineScale;

          setPlacement({
            time: Math.max(props.element.localTime + timeOffset, 0),
            duration: props.element.duration,
          });
        }}
        onStop={() => {
          applyPlacement();
        }}
      >
        {(ref) => (
          <div
            className={`absolute h-35 px-15 flex items-center ${
              active ? 'bg-blue-500' : 'bg-gray-700'
            } rounded-8 overflow-hidden`}
            ref={ref}
            // active={active}
            style={{
              left: placement.time * timelineScale,
              width:
                (placement.duration - props.element.exitDuration) *
                timelineScale,
            }}
            onClick={() => {
              setActiveElements(props.element.source.id);
            }}
            onDoubleClick={() => {
              if (props.element.source.type === 'composition') {
                preview?.setActiveComposition(props.element.source.id);
              }
            }}
          >
            {props.element.source.name ??
              props.element.source.type[0].toUpperCase() +
                props.element.source.type.slice(1)}
          </div>
        )}
      </Draggable>
      <ResizeHandle
        element={props.element}
        side="start"
        time={props.element.localTime}
        onChange={(time, duration) => setPlacement({ time, duration })}
        onComplete={applyPlacement}
      />
      <ResizeHandle
        element={props.element}
        side="end"
        time={props.element.localTime + props.element.duration}
        onChange={(time, duration) => setPlacement({ time, duration })}
        onComplete={applyPlacement}
      />
    </Fragment>
  );
};

type BarProps = {
  active: boolean;
};
const Bar = ({ active }: BarProps) => {
  return (
    <div
      className={`absolute h-35 px-15 flex items-center ${
        active ? 'bg-blue-500' : 'bg-gray-700'
      } rounded-8 overflow-hidden`}
    >
      {/* Content */}
    </div>
  );
};

// const Bar = styled.div<{ active: boolean }>`
//   position: absolute;
//   height: 35px;
//   padding: 0 15px;
//   display: flex;
//   align-items: center;
//   background: ${(props) => (props.active ? '#2a85ff' : '#3f4043')};
//   border-radius: 8px;
//   overflow: hidden;
// `;
