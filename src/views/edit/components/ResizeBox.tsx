import { useRef } from 'react';
import { ResizeHandle } from './ResizeHandle';
import useMediaRangeStore from '@/store/useMediaRangeStore';
const MIN = 0;
const MAX = 296;
const ResizeBox = () => {
  const startRange = useMediaRangeStore((state) => state.startRange);
  const setStartRange = useMediaRangeStore((state) => state.setStartRange);
  const endRange = useMediaRangeStore((state) => state.endRange);
  const setEndRange = useMediaRangeStore((state) => state.setEndRange);
  let localStartRangeX = useRef(0);
  let localEndRangeY = useRef(0);
  const handleRange = (range: number, side: 'start' | 'end') => {
    if (side === 'start') {
      //start는 end를 클 수 없다.
      if (range > endRange) return;
      //range는 0보다 작을 수 없다.
      if (range < MIN) return;
      setStartRange(range);
    }
    if (side === 'end') {
      //end는 start보다 작을수 없다.
      if (range < startRange) return;
      //range는 0보다 클수없다.
      if (range > MAX) return;
      setEndRange(range);
    }
  };

  const onComplete = (side: 'start' | 'end') => {
    if (side === 'start') localStartRangeX.current = startRange;
    if (side === 'end') localEndRangeY.current = endRange;
  };

  return (
    <div className="h-full border">
      <ResizeHandle
        side="start"
        onChange={handleRange}
        onComplete={onComplete}
        range={startRange}
        localRangeX={localStartRangeX.current}
      />
      <ResizeHandle
        side="end"
        onChange={handleRange}
        onComplete={onComplete}
        range={endRange}
        localRangeX={localEndRangeY.current}
      />
    </div>
  );
};
export default ResizeBox;
