export const ActionButton = ({ disabled, onClick, children }: any) => {
  const { initializeVideoPlayer, preview, createElement } = VideoCreatorStore();
  return (
    <div
      className={`flex m-10 p-10 bg-gray-900 rounded-lg cursor-pointer ${
        disabled ? 'opacity-40' : ''
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
