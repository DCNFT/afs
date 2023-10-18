import VideoCreatorStore from '@/store/useVideoCreatorStore';
import { ActionButton } from './ActionButton';

const BottomLeftButtons = () => {
  const { isPlaying, preview } = VideoCreatorStore();

  return (
    <div className="absolute bottom-5 left-5 flex flex-col">
      <ActionButton
        onClick={() => {
          if (!isPlaying) {
            preview?.play();
          } else {
            preview?.pause();
          }
        }}
      >
        {!isPlaying ? (
          <svg width="24" height="24" fill="#fff">
            <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
          </svg>
        ) : (
          <svg width="24" height="24" fill="#fff">
            <path d="M14,19H18V5H14M6,19H10V5H6V19Z" />
          </svg>
        )}
      </ActionButton>
    </div>
  );
};

export default BottomLeftButtons;
