import VideoCreatorStore from '@/store/useVideoCreatorStore';
import { Playhead } from './PlayHead';
import { TimelineTrack } from './TimeLineTrack';

const TimeLine = () => {
  const { tracks: storeTracks } = VideoCreatorStore();

  const tracks = Array.from(storeTracks?.entries() ?? []);
  tracks.reverse();

  return (
    <div className="p-4 h-96 bg-gray-800 rounded-lg">
      <div className="relative h-full pt-4">
        <Playhead />
        <div className="w-full h-full overflow-hidden">
          {tracks.map(([track, elements]) => (
            <TimelineTrack key={track} elements={elements} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
