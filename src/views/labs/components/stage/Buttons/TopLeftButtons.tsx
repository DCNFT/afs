import VideoCreatorStore from '@/store/VideoCreatorStore';
import { ActionButton } from './ActionButton';

const TopLeftButtons = () => {
  const { createElement } = VideoCreatorStore();
  return (
    <div className="absolute top-5 left-5 flex flex-col">
      <ActionButton
        onClick={async () => {
          await createElement({
            type: 'text',
            text: 'New text element',
          });
        }}
      >
        <svg width="24" height="24" fill="#fff">
          <path d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />
        </svg>
      </ActionButton>
      <ActionButton
        onClick={async () => {
          await createElement({
            type: 'image',
            source:
              'https://creatomate-static.s3.amazonaws.com/video-creator-js/gradienta-ix_kUDzCczo-unsplash.jpg',
          });
        }}
      >
        <svg width="24" height="24" fill="#fff">
          <path d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z" />
        </svg>
      </ActionButton>
      <ActionButton
        onClick={async () => {
          await createElement({
            type: 'video',
            source:
              'https://creatomate-static.s3.amazonaws.com/video-creator-js/pexels-2025634.mp4',
            loop: true,
          });
        }}
      >
        <svg width="24" height="24" fill="#fff">
          <path d="M22 4V13.81C21.39 13.46 20.72 13.22 20 13.09V10H5.76L4 6.47V18H13.09C13.04 18.33 13 18.66 13 19C13 19.34 13.04 19.67 13.09 20H4C2.9 20 2 19.11 2 18V6C2 4.89 2.9 4 4 4H5L7 8H10L8 4H10L12 8H15L13 4H15L17 8H20L18 4H22M17 22L22 19L17 16V22Z" />
        </svg>
      </ActionButton>
    </div>
  );
};

export default TopLeftButtons;
