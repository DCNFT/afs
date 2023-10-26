import { DEFAULT_RANGE_HANDLER_WIDTH } from '@/constants/default';
import useMediaRangeStore from '@/store/useMediaRangeStore';
import { Draggable } from '@/utils/Draggable';

const HitArea = () => {
  const startRange = useMediaRangeStore((state) => state.startRange);
  const endRange = useMediaRangeStore((state) => state.endRange);
  return (
    <Draggable
      onStart={(e, data) => {
        return { startX: data.x, data };
      }}
      onDrag={(e, data, context) => {
        console.log('data. ', data.x, 'context ', context);
      }}
      onStop={() => {}}
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
  );
};

export default HitArea;
