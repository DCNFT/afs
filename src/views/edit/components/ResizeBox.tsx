import { useCallback, useEffect, useRef } from 'react';
import { ResizeHandle } from './ResizeHandle';
import useMediaRangeStore from '@/store/useMediaRangeStore';
import {
  DEFAULT_RANGE_HANDLER_WIDTH,
  DEFAULT_RANGE_MAX,
  DEFAULT_RANGE_MIN,
} from '@/constants/default';

const ResizeBox = () => {
  const startRange = useMediaRangeStore((state) => state.startRange);
  const setStartRange = useMediaRangeStore((state) => state.setStartRange);
  const endRange = useMediaRangeStore((state) => state.endRange);
  const setEndRange = useMediaRangeStore((state) => state.setEndRange);

  const setStartSyncHitArea = useMediaRangeStore(
    (state) => state.setStartSyncHitArea,
  );
  let localStartRangeX = useRef(DEFAULT_RANGE_MIN);
  let localEndRangeX = useRef(DEFAULT_RANGE_MAX - DEFAULT_RANGE_HANDLER_WIDTH);
  console.log('localStartRangeX =', localStartRangeX);
  console.log('localEndRangeX =', localEndRangeX);

  const startSyncResizeHandle = useMediaRangeStore(
    (state) => state.startSyncResizeHandle,
  );
  const setStartSyncResizeHandle = useMediaRangeStore(
    (state) => state.setStartSyncResizeHandle,
  );

  useEffect(() => {
    if (!startSyncResizeHandle) return;
    console.log('[HitArea][useEffect][statSync]');
    console.log(
      '[HitArea][useEffect][startRange]',
      startRange,
      ' [endRange] = ',
      endRange,
    );
    localStartRangeX.current = startRange;
    localEndRangeX.current = endRange;

    setStartSyncResizeHandle(false);
  }, [startRange, endRange, setStartSyncResizeHandle, startSyncResizeHandle]);

  const handleRange = useCallback(
    (range: number, side: 'start' | 'end') => {
      if (startSyncResizeHandle) return;

      if (side === 'start') {
        //start는 end를 클 수 없다.
        if (range > endRange - DEFAULT_RANGE_HANDLER_WIDTH) return;
        //range는 0보다 작을 수 없다.
        if (range < DEFAULT_RANGE_MIN) return;
        console.log('[handleRange]= ', range, side);
        setStartRange(range);
      }
      if (side === 'end') {
        //end는 start보다 작을수 없다.
        if (range < startRange) return;
        //range는 MAX보다 클수없다.
        if (range > DEFAULT_RANGE_MAX - 8) return;
        setEndRange(range);
      }
    },
    [endRange, setEndRange, setStartRange, startRange, startSyncResizeHandle],
  );

  const onComplete = useCallback(
    (side: 'start' | 'end') => {
      console.log(
        '[ResizeBox] [onComplete] startRange = ',
        startRange,
        'endRange ',
        endRange,
      );
      localStartRangeX.current = startRange;
      localEndRangeX.current = endRange;
      setStartSyncHitArea(true); // HIT AREA ref Sync
    },
    [endRange, setStartSyncHitArea, startRange],
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
        localRangeX={localEndRangeX.current}
      />
    </div>
  );
};
export default ResizeBox;
