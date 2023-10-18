import useVideoCreatorStore from '@/store/useVideoCreatorStore';
import { Preview } from '@creatomate/preview';

// Jumps to a time position where the provided element is visible
export const useEnsureElementVisibility = () => {
  const preview = useVideoCreatorStore((state) => state.preview) as Preview;
  const setTime = useVideoCreatorStore((state) => state.setTime);

  const ensureElementVisibility = async (
    elementName: string,
    addTime: number,
  ) => {
    // Find element by name
    const element = preview
      .getElements()
      .find((element) => element.source.name === elementName);
    if (element) {
      // Set playback time
      await setTime(element.globalTime + addTime);
    }
  };

  return ensureElementVisibility;
};
