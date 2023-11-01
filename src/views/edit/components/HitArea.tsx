import {
  DEFAULT_RANGE_HANDLER_WIDTH,
  DEFAULT_RANGE_MAX,
  DEFAULT_RANGE_MIN,
} from '@/constants/default';
import useMediaRangeStore from '@/store/useMediaRangeStore';
import { Draggable } from '@/utils/Draggable';
import { Button } from '@radix-ui/themes';
import { useCallback, useEffect, useRef } from 'react';

const HitArea = () => {
  const startRange = useMediaRangeStore((state) => state.startRange);
  const setStartRange = useMediaRangeStore((state) => state.setStartRange);
  const endRange = useMediaRangeStore((state) => state.endRange);
  const setEndRange = useMediaRangeStore((state) => state.setEndRange);

  const startSyncHitArea = useMediaRangeStore(
    (state) => state.startSyncHitArea,
  );
  const setStartSyncHitArea = useMediaRangeStore(
    (state) => state.setStartSyncHitArea,
  );
  const setStartSyncResizeHandle = useMediaRangeStore(
    (state) => state.setStartSyncResizeHandle,
  );

  console.log('[HitArea] startRange = ', startRange);
  console.log('[HitArea] endRange = ', endRange);

  const localStartRangeX = useRef<any>();
  const localEndRangeX = useRef<any>();

  useEffect(() => {
    if (!startSyncHitArea) return;
    console.log('[HitArea][useEffect][statSync]');
    console.log(
      '[HitArea][useEffect][startRange]',
      startRange,
      ' [endRange] = ',
      endRange,
    );
    localStartRangeX.current = startRange;
    localEndRangeX.current = endRange;
    setStartSyncHitArea(false);
  }, [startRange, endRange, startSyncHitArea, setStartSyncHitArea]);

  const onComplete = () => {
    localStartRangeX.current = startRange;
    localEndRangeX.current = endRange;
    setStartSyncResizeHandle(true);
  };

  const handleRange = useCallback(
    (movedDistanceX: number, direction: 'left' | 'right') => {
      if (startSyncHitArea) return;
      console.log('movedDistanceX', movedDistanceX);
      if (direction === 'left') {
        console.log('moved left');
        //start는 0 보다 작을 수 없다.
        if (localStartRangeX.current - movedDistanceX < DEFAULT_RANGE_MIN)
          return;

        setStartRange(localStartRangeX.current - movedDistanceX);
        setEndRange(localEndRangeX.current - movedDistanceX);
        return;
      }
      if (direction === 'right') {
        console.log('moved right =', localEndRangeX.current);
        //start는 0 보다 작을 수 없다.
        if (localEndRangeX.current + movedDistanceX > DEFAULT_RANGE_MAX) return;

        setStartRange(localStartRangeX.current + movedDistanceX);
        setEndRange(localEndRangeX.current + movedDistanceX);
      }
    },
    [setEndRange, setStartRange, startSyncHitArea],
  );

  const handleClick = () => {
    console.log(
      '[HitArea] handleClick startRange = ',
      startRange,
      ' endRange = ',
      endRange,
    );
  };
  return (
    <>
      <Button onClick={handleClick}>hello</Button>
      <Draggable
        onStart={(e, data) => {
          return { startX: data.x, data };
        }}
        onDrag={(e, data, context) => {
          const movedDistanceX = context.startX - data.x;
          if (movedDistanceX === 0) return;
          console.log('movedDistanceX= ', movedDistanceX);

          handleRange(
            Math.abs(movedDistanceX),
            movedDistanceX > 0 ? 'left' : 'right',
          );
        }}
        onStop={onComplete}
      >
        {(ref) => (
          <div
            ref={ref}
            style={{
              width: endRange - startRange - DEFAULT_RANGE_HANDLER_WIDTH,
              position: 'absolute',
              left: startRange + DEFAULT_RANGE_HANDLER_WIDTH,
            }}
            className=" cursor-grab bg-emerald-100 h-full border border-teal-600"
          ></div>
        )}
      </Draggable>
    </>
  );
};

export default HitArea;
