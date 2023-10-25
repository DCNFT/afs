import useVideoCreatorStore from '@/store/useVideoCreatorStore';
import { ElementState } from '@creatomate/preview';
import { Button } from '@radix-ui/themes';

type ControlButtonsProps = {
  element: ElementState;
};
const ControlButtons = ({ element }: ControlButtonsProps) => {
  const createElement = useVideoCreatorStore((state) => state.createElement);
  const deleteElement = useVideoCreatorStore((state) => state.deleteElement);
  const updateElement = useVideoCreatorStore((state) => state.updateElement);
  return (
    <div>
      <Button
        onClick={() =>
          console.log('[seo] ELEMENT.source.id = ', element.source.id)
        }
      >
        현재 소스
      </Button>
      <Button
        onClick={async () => {
          await createElement({
            type: 'image',
            source:
              'https://creatomate-static.s3.amazonaws.com/video-creator-js/gradienta-ix_kUDzCczo-unsplash.jpg',
          });
        }}
      >
        create Element
      </Button>
      <Button
        onClick={async () => {
          await deleteElement(element.source.id, true);
        }}
      >
        delete Element
      </Button>
      <Button
        onClick={async () => {
          await updateElement(element.source.id, {
            type: 'image',
            source:
              'https://creatomate-static.s3.amazonaws.com/video-creator-js/gradienta-ix_kUDzCczo-unsplash.jpg',
          });
        }}
      >
        update
      </Button>
    </div>
  );
};

export default ControlButtons;
