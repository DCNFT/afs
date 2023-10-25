import useVideoCreatorStore from '@/store/useVideoCreatorStore';
import { Preview } from '@creatomate/preview';

//* Jumps to a time position where the provided element is visible
export const useEnsureElementVisibility = () => {
  const preview = useVideoCreatorStore((state) => state.preview) as Preview;
  const setTime = useVideoCreatorStore((state) => state.setTime);

  const ensureElementVisibility = async (
    elementIdentifier: string,
    addTime: number,
    isUseId = false,
  ) => {
    const elements = preview.getElements();

    let element = null;

    if (isUseId) {
      // Find element by id
      element = elements.find(
        (element) => element.source.id === elementIdentifier,
      );
    } else {
      // Find element by name
      element = elements.find(
        (element) => element.source.name === elementIdentifier,
      );
    }

    if (element) {
      // Set playback time
      await setTime(element.globalTime + addTime);
    }
  };

  return ensureElementVisibility;
};
