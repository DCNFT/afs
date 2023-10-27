import VideoCreatorStore from '@/store/useVideoCreatorStore';
import { ActionButton } from './ActionButton';

const BottomRightButtons = () => {
  const { activeElementIds, getActiveElement, deleteElement, rearrangeTracks } =
    VideoCreatorStore();

  return (
    <div>
      <ActionButton
        disabled={activeElementIds.length === 0}
        onClick={async () => {
          const activeElement = getActiveElement();
          if (activeElement) {
            await deleteElement(activeElement.source.id);
          }
        }}
      >
        <svg width="24" height="24" fill="#fff">
          <path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
        </svg>
      </ActionButton>
      <ActionButton
        disabled={activeElementIds.length === 0}
        onClick={async () => {
          const activeElement = getActiveElement();
          if (activeElement) {
            await rearrangeTracks(activeElement.track, 'up');
          }
        }}
      >
        <svg width="24" height="24" fill="#fff">
          <path d="M12,18.54l0,2.53l-9,-7l1.62,-1.26l7.38,5.73m0,-2.54l-9,-7l9,-7l9,7l-9,7m0,-11.47l-5.74,4.47l5.74,4.47l5.74,-4.47l-5.74,-4.47Zm4,13.47l2,0l0,4l2,0l0,-4l2,0l-3,-3l-3,3Z" />
        </svg>
      </ActionButton>
      <ActionButton
        disabled={activeElementIds.length === 0}
        onClick={async () => {
          const activeElement = getActiveElement();
          if (activeElement) {
            await rearrangeTracks(activeElement.track, 'down');
          }
        }}
      >
        <svg width="24" height="24" fill="#fff">
          <path d="M12,18.54l0,2.53l-9,-7l1.62,-1.26l7.38,5.73m0,-2.54l-9,-7l9,-7l9,7l-9,7m0,-11.47l-5.74,4.47l5.74,4.47l5.74,-4.47l-5.74,-4.47Zm10,14.47l-2,-0l0,-4l-2,-0l0,4l-2,-0l3,3l3,-3Z" />
        </svg>
      </ActionButton>
    </div>
  );
};
export default BottomRightButtons;
