import useVideoCreatorStore from '@/store/useVideoCreatorStore';
import { Button } from '@radix-ui/themes';
import { useMemo } from 'react';
import styles from '@/styles/Home.module.css';
import ImageSettingPanel from './ImageSettingPanel';
import VideoSettingPanel from './VideoSettingPanel';
import TextSettingPanel from './TextSettingPanel';

// 컴포지션안에 들어갔을떄 해당 track 전부 가져올것
type CompositionContainerProps = {
  modificationsRef: Record<string, any>;
};
const CompositionContainer = ({
  modificationsRef,
}: CompositionContainerProps) => {
  const preview = useVideoCreatorStore((state) => state.preview);
  const activeElementIds = useVideoCreatorStore(
    (state) => state.activeElementIds,
  );
  const getActiveCompositionSource = useVideoCreatorStore(
    (state) => state.getActiveCompositionSource,
  );
  const currentState = useVideoCreatorStore((state) => state.state);

  const handle = () => {
    console.log(getActiveCompositionSource());
    console.log('getElemnet =', preview?.getElements());
    console.log('currentState = ', currentState);
    console.log('getSource = ', preview?.getSource());
  };

  const compositionElements = useMemo(() => {
    return preview
      ?.getElements()
      .filter((element) => element.source.type === 'composition');
  }, [preview]);

  return (
    <div>
      <Button onClick={handle}>getActiveCompositionSource</Button>
      {compositionElements?.map((compositionElement, i) => {
        const transitionAnimation = compositionElement.source.animations?.find(
          (animation: any) => animation.transition,
        );

        const nestedElements = preview?.getElements(compositionElement)!;
        // console.log('nestedElements = ', nestedElements);

        const textElement = nestedElements.find(
          (element) => element.source.type === 'text',
        );
        const imageElement = nestedElements.find(
          (element) => element.source.type === 'image',
        );
        const videoElement = nestedElements.find(
          (element) => element.source.type === 'video',
        );
        const active = activeElementIds.includes(compositionElement.source.id);

        // console.log('activeElementIds= ', activeElementIds);
        // console.log(
        //   '(compositionElement.source.id= ',
        //   compositionElement.source.id,
        // );
        // console.log('textElements= ', textElement);
        // console.log('active= ', active);

        return (
          <div
            key={i}
            className={`group my-20 py-20 bg-f5f7f8 rounded-5 p-5 ${
              active ? 'border' : ''
            }`}
          >
            <div className={styles.groupTitle}>Composition {i + 1}</div>
            <>
              {textElement && (
                <TextSettingPanel
                  active={active}
                  textElement={textElement}
                  transitionAnimation={transitionAnimation}
                  compositionElement={compositionElement}
                  modificationsRef={modificationsRef}
                />
              )}
              {imageElement && (
                <ImageSettingPanel
                  imageElement={imageElement}
                  modificationsRef={modificationsRef}
                />
              )}
              {videoElement && (
                <VideoSettingPanel
                  videoElement={videoElement}
                  modificationsRef={modificationsRef}
                />
              )}
            </>
          </div>
        );
      })}
    </div>
  );
};

export default CompositionContainer;
