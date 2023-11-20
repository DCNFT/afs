import { Composition } from '@/api/internal/abs/types';
import SceneEditContainer from './SceneEditContainer';

type SceneProps = {
  composition: Composition;
};
const Scene = ({ composition }: SceneProps) => {
  // console.log(composition.media.filter((item) => item.format === 'MEDIA'));
  return (
    <div className="flex mb-4">
      <div className="flex flex-col" style={{ flex: '2 1 0%' }}>
        <p className="text-base font-bold">{composition?.style}</p>
        {composition?.media
          ?.filter((item) => item.format === 'MEDIA')
          ?.map((mediaItem, key) => {
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
