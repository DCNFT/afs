import { Composition, MediaElement } from '@/api/internal/abs/types';
import SceneEditContainer from './SceneEditContainer';
import TextEditContainer from './TextEditContainer';

type SceneProps = {
  composition: Composition;
};

const Scene = ({ composition }: SceneProps) => {
  return (
    <div className="flex mb-4">
      <div className="flex flex-col min-w-max" style={{ flex: '2 1 0%' }}>
        <p className="text-base font-bold">{composition?.style}</p>
        {composition?.media?.map((mediaItem, key) => {
          if (mediaItem.format === 'TEXT' && mediaItem.type === 'CUSTOM') {
            return (
              <>
                <TextEditContainer
                  mediaItem={mediaItem}
                  key={`text-edit-container-${key}`}
                />
              </>
            );
          }
          if (mediaItem.format === 'MEDIA')
            return (
              <SceneEditContainer
                mediaItem={mediaItem}
                key={`scene-edit-container-${key}`}
              />
            );
        })}
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

export default Scene;
