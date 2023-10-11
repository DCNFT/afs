import { Playhead } from './components/PlayHead';
import { Stage } from './components/stage/Stage';

const Labs = () => {
  return (
    <div className="p-4 h-96 bg-gray-800 rounded-lg">
      <div className="relative h-full pt-4">
        <Stage />
        <Playhead />
        {/* <div className="w-full h-full overflow-y-scroll">
          {tracks.map(([track, elements]) => (
            <TimelineTrack key={track} elements={elements} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Labs;
