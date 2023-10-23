'use client';

import { useEffect, useState } from 'react';
import { Box } from '@radix-ui/themes';
import { ResizeHandle } from './components/ResizeHandle';

const ResizeBox = () => {
  const [width, setWidth] = useState(0);
  const handleStart = (time: number, duration: number) => {};
  const handleEnd = (time: number, duration: number) => {};
  const onComplete = () => {};
  return (
    <div className="h-full border">
      <ResizeHandle
        side="start"
        onChange={(width) => {
          setWidth(width);
        }}
        onComplete={onComplete}
        width={width}
      />
      <ResizeHandle
        side="end"
        onChange={(width) => {}}
        onComplete={onComplete}
        width={width}
      />
    </div>
  );
};
const BackPlate = () => {
  return <div style={{ width: '324px', position: 'absolute' }}></div>;
};

const InnerPlate = () => {
  return <div style={{ width: '296px', position: 'absolute' }}></div>;
};
const Edit = () => {
  return (
    <Box p={'5'}>
      <div className="w-full h-24 relative" style={{ width: '296px' }}>
        <BackPlate />
        <ResizeBox />
      </div>
    </Box>
  );
};

export default Edit;
