type MediaInputContainerProps = {
  media: any;
  handleMediaChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    mediaItemName: string | null,
  ) => void;

  handleAddMedia?: () => void;
  mediaItemName: string | null;
};

const MediaInputContainer = ({
  media,
  handleMediaChange,
  handleAddMedia,
  mediaItemName,
}: MediaInputContainerProps) => {
  console.log('mediaItemName ', mediaItemName);
  return (
    <div className="h-[150px] w-[300px] border bg-gray-200 relative">
      {media && media.startsWith('data:video/') ? (
        <video
          controls
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
        >
          <source
            src={media}
            type={`video/${media.split(';')[0].split('/')[1]}`}
          />
          Your browser does not support the video tag.
        </video>
      ) : (
        media && (
          <img
            src={media}
            alt="Thumbnail"
            className="w-full h-full"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
          />
        )
      )}

      <input
        type="file"
        accept="image/*,video/*"
        onChange={(e) => handleMediaChange(e, mediaItemName)}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0,
          cursor: 'pointer',
        }}
      />
      <button
        onClick={handleAddMedia}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
        }}
      >
        Add Media
        <span role="img" aria-label="camera" style={{ marginLeft: '8px' }}>
          📷
        </span>
      </button>
    </div>
  );
};
export default MediaInputContainer;
