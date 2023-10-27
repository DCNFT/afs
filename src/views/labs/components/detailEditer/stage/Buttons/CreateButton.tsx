import VideoCreatorStore from '@/store/useVideoCreatorStore';
import React, { useState } from 'react';

const Main =
  'w-130 mx-10 h-44 flex justify-center items-center bg-2a85ff rounded-5 cursor-pointer';

export const CreateButton: React.FC = () => {
  const { finishVideo } = VideoCreatorStore();
  const [isRendering, setIsRendering] = useState(false);
  const [render, setRender] = useState<any>();

  if (isRendering) {
    return (
      <div className={Main} style={{ background: '#e67e22' }}>
        Rendering...
      </div>
    );
  }

  if (render) {
    return (
      <div
        className={Main}
        style={{ background: '#2ecc71' }}
        onClick={() => {
          window.open(render.url, '_blank');
          setRender(undefined);
        }}
      >
        Download
      </div>
    );
  }

  return (
    <div
      className={Main}
      style={{ background: '#2a85ff' }}
      onClick={async () => {
        setIsRendering(true);

        try {
          const render = await finishVideo();
          if (render.status === 'succeeded') {
            setRender(render);
          } else {
            window.alert(`Rendering failed: ${render.errorMessage}`);
          }
        } catch (error) {
          window.alert(error);
        } finally {
          setIsRendering(false);
        }
      }}
    >
      Create Video
    </div>
  );
};
