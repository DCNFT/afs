import { Playhead } from './components/timeLine/PlayHead';
import { Stage } from './components/stage/Stage';
import TimeLine from './components/timeLine/TimeLine';

const Labs = () => {
  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden select-none">
      <div className="flex-1 flex">
        <Stage />
      </div>
      <TimeLine />
    </div>
  );
};

export default Labs;
