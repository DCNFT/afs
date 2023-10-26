import { useCallback, useRef } from 'react';
import { ResizeHandle } from './ResizeHandle';
import useMediaRangeStore from '@/store/useMediaRangeStore';
import { DEFAULT_RANGE_MAX, DEFAULT_RANGE_MIN } from '@/constants/default';

const ResizeBox = () => {
  const startRange = useMediaRangeStore((state) => state.startRange);
  const setStartRange = useMediaRangeStore((state) => state.setStartRange);
  const endRange = useMediaRangeStore((state) => state.endRange);
  const setEndRange = useMediaRangeStore((state) => state.setEndRange);
  let localStartRangeX = useRef(0);
  let localEndRangeY = useRef(0);

  const handleRange = useCallback(
    (range: number, side: 'start' | 'end') => {
      if (side === 'start') {
        //start는 end를 클 수 없다.
        if (range > endRange - 8) return;
        //range는 0보다 작을 수 없다.
        if (range < DEFAULT_RANGE_MIN) return;
        setStartRange(range);
      }
      if (side === 'end') {
        //end는 start보다 작을수 없다.
        if (range < startRange) return;
        //range는 0보다 클수없다.
        if (range > DEFAULT_RANGE_MAX) return;
        setEndRange(range);
      }
    },
    [endRange, setEndRange, setStartRange, startRange],
  );

  const onComplete = useCallback(
    (side: 'start' | 'end') => {
      if (side === 'start') localStartRangeX.current = startRange;
      if (side === 'end') localEndRangeY.current = endRange;
    },
    [endRange, startRange],
  );

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
