'use client';

import { useState } from 'react';
import { Box } from '@radix-ui/themes';
import { ResizeHandle } from './components/ResizeHandle';

const ResizeBox = () => {
  const [element] = useState({ localTime: 0, duration: 100 });
  const [placement, setPlacement] = useState({
    time: element.localTime,
    duration: element.duration,
  });

  const [time] = useState(100);

  const handleStart = (time: number, duration: number) => {};
  const handleEnd = (time: number, duration: number) => {};
  const onComplete = () => {};
  return (
    <div className="h-full border">
      <ResizeHandle
        side="start"
        element={element}
        onChange={(time, duration) => setPlacement({ time, duration })}
        onComplete={onComplete}
        time={time}
      />
      <ResizeHandle
        side="end"
        element={element}
        onChange={(time, duration) => setPlacement({ time, duration })}
        onComplete={onComplete}
        time={time}
      />
    </div>
  );
};
const Edit = () => {
  return (
    <Box p={'5'}>
      <div className="w-full h-24 relative bg-gray-500">
        <ResizeBox />
      </div>
    </Box>
  );
};

export default Edit;
