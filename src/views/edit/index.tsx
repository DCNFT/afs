'use client';

import { DEFAULT_RANGE_MAX } from '@/constants/default';
import BackPlate from './components/BackPlate';
import HitArea from './components/HitArea';
import ResizeBox from './components/ResizeBox';

const Edit = () => {
  return (
    <div className="flex justify-center w-full h-screen items-center">
      <div
        className="w-full h-24 relative"
        style={{ width: `${DEFAULT_RANGE_MAX}px` }}
      >
        <BackPlate />
        <HitArea />
        <ResizeBox />
      </div>
    </div>
  );
};

export default Edit;
