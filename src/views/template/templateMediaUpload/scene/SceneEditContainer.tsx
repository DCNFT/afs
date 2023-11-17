import { MediaElement } from '@/api/internal/abs/types';
import { useState } from 'react';
import MediaInputContainer from './MediaInputContainer';
import MediaDisplayInput from './MediaDisplayInput';
import MediaTypeInput from './MediaTypeInput';

type SceneEditContainerProps = {
  mediaItem: MediaElement;
};

const SceneEditContainer = ({ mediaItem }: SceneEditContainerProps) => {
  const [media, setMedia] = useState<string | null>(null);
  console.log(media);
  const handleMediaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMedia(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddMedia = () => {
    // 미디어 추가 로직을 추가할 수 있습니다.
    console.log('Add Media clicked');
  };

  return (
    <div className="flex mb-4">
      <MediaInputContainer />
      <div className="flex flex-col">
        <div className="flex flex-col ">
          <MediaDisplayInput mediaItem={mediaItem} />
          <MediaTypeInput />
        </div>
      </div>
    </div>
  );
};
export default SceneEditContainer;
