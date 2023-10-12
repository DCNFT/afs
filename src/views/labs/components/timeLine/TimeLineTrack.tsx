import React from 'react';
import { ElementState } from '@creatomate/preview';
import { TimelineElement } from './TimelineElement';

interface TimelineTrackProps {
  elements: ElementState[];
}

export const TimelineTrack: React.FC<TimelineTrackProps> = (props) => {
  return (
    <div className="relative my-1 h-9">
      {props.elements.map((element) => (
        <TimelineElement key={element.source.id} element={element} />
      ))}
    </div>
  );
};
