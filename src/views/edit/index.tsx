'use client';

import ResizeBox from './components/ResizeBox';

const BackPlate = () => {
  return (
    <div
      style={{ width: '324px', position: 'absolute' }}
      className="bg-slate-400"
    ></div>
  );
};

const HitArea = () => {
  return <div style={{ width: '296px', position: 'absolute' }}></div>;
};
const Edit = () => {
  return (
    <div className="flex justify-center w-full h-screen items-center">
      <div className="w-full h-24 relative" style={{ width: '296px' }}>
        <BackPlate />
        <HitArea />
        <ResizeBox />
      </div>
    </div>
  );
};

export default Edit;
