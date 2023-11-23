import { create } from 'zustand';
import { v4 as uuid } from 'uuid';
import {
  CompositionState,
  ElementState,
  Preview,
  PreviewState,
} from '@creatomate/preview';
import { groupBy } from '@/utils/groupBy';
import { deepClone } from '@/utils/deepClone';
import { deepFind } from '@/utils/deepFind';
import { DEFAULT_DATA } from './data';

// Define the state interface
interface VideoCreatorState {
  formId: string | undefined;
  preview?: Preview;
  state?: PreviewState;
  tracks?: Map<number, ElementState[]>;
  activeCompositionId: string | undefined;
  activeElementIds: string[];
  isLoading: boolean;
  isPlaying: boolean;
  isReady: boolean;
  time: number;
  timelineScale: number;
  isScrubbing: boolean;
  videoAspectRatio: number;
  mode: 'interactive' | 'player';
}

// Define the actions interface
interface VideoCreatorActions {
  initializeVideoPlayer: (htmlElement: HTMLDivElement) => void;
  setTime: (time: number) => Promise<void>;
  setActiveElements: (...elementIds: string[]) => Promise<void>;
  getActiveElement: () => ElementState | undefined;
  getActiveComposition: () => CompositionState | PreviewState | undefined;
  getActiveCompositionElements: () => ElementState[] | null;
  getActiveCompositionSource: () => Record<string, any>;
  setActiveCompositionSource: (source: Record<string, any>) => Promise<void>;
  createElement: (elementSource: Record<string, any>) => Promise<void>;
  deleteElement: (elementId: string, isComposition: boolean) => Promise<void>;
  updateElement: (
    elementId: string,
    elementSource: Record<string, any>,
  ) => Promise<void>;
  rearrangeTracks: (track: number, direction: 'up' | 'down') => Promise<void>;
  finishVideo: () => Promise<any>;
  getDefaultSource: () => Record<any, any>;
  updateTracks: () => void;
  setIsScrubbing: (isScrubbing: boolean) => void;
  setMode: (mode: 'player' | 'interactive') => void;
  setVideoAspectRatio: (videoAspectRatio: number) => void;
  setFormId: (formId: string) => void;
  setSource: (source: Record<string, any>) => Promise<void>;
}

// Create the Zustand store
const useVideoCreatorStore = create<VideoCreatorState & VideoCreatorActions>(
  (set, get) => ({
    formId: undefined,
    preview: undefined,
    state: undefined,
    tracks: undefined,
    activeCompositionId: undefined,
    activeElementIds: [],
    isLoading: true,
    isPlaying: false,
    isReady: false,
    time: 0,
    timelineScale: 100,
    isScrubbing: false,
    actions: {},
    videoAspectRatio: 0,
    mode: 'player',
    // Add your action implementations here
    initializeVideoPlayer: (htmlElement: HTMLDivElement) => {
      const preview = get().preview as Preview;
      if (preview) {
        preview.dispose();
        set({
          preview: undefined,
        });
      }

      const previewStore = new Preview(
        htmlElement,
        'player',
        process.env.NEXT_PUBLIC_VIDEO_PLAYER_TOKEN!,
      );

      set({
        preview: previewStore,
      });

      previewStore.onReady = async () => {
        const formId = get().formId;

        await previewStore.loadTemplate(formId as string);
        // await previewStore.setSource(get().getDefaultSource());
        set({
          isReady: true,
        });
      };

      previewStore.onLoad = async () => {
        set({
          isLoading: true,
        });
      };

      previewStore.onLoadComplete = async () => {
        set({ isLoading: false });
      };

      previewStore.onPlay = () => {
        set({ isPlaying: true });
      };

      previewStore.onPause = () => {
        set({ isPlaying: false });
      };

      previewStore.onTimeChange = (time) => {
        if (!get().isScrubbing) {
          set({
            time: time,
          });
        }
      };

      previewStore.onActiveCompositionChange = (elementId) => {
        // console.log('onActiveCompositionChange= ', elementId);
        set({ activeCompositionId: elementId ?? undefined });
        get().updateTracks();
      };

      previewStore.onActiveElementsChange = (elementIds) => {
        set({ activeElementIds: elementIds });
      };

      previewStore.onStateChange = (stateParams) => {
        set((state) => ({ ...state, state: stateParams }));
        get().updateTracks();
      };
    },

    updateTracks() {
      const activeCompositionElements = get().getActiveCompositionElements();
      // console.log(
      //   '[seo] updatTracks activeCompositionElements ,',
      //   activeCompositionElements,
      // );
      // console.log(
      //   '[seo] updatTracks groupBy ,',
      //   groupBy(
      //     activeCompositionElements as ElementState[],
      //     (element) => element.track,
      //   ),
      // );

      set({
        tracks: groupBy(
          activeCompositionElements as ElementState[],
          (element) => element.track,
        ),
      });
    },

    setVideoAspectRatio: (videoAspectRatio: number) => {
      set({
        videoAspectRatio,
      });
    },

    setMode: async (mode: 'player' | 'interactive') => {
      if (mode === 'interactive') await get().preview?.pause();

      await get().preview?.setMode(mode);
      set({ mode });
    },

    setIsScrubbing: (isScrubbing: boolean) => {
      set((state) => ({ ...state, isScrubbing: isScrubbing }));
    },

    setTime: async (time: number) => {
      set((state) => ({ ...state, time: time }));
      await get().preview?.setTime(time);
      get().setIsScrubbing(false);
    },

    setActiveElements: async (...elementIds: string[]) => {
      set({
        activeElementIds: elementIds,
      });
      await get().preview?.setActiveElements(elementIds);
    },

    getActiveElement: () => {
      const preview = get().preview;
      if (!preview || get().activeElementIds.length === 0) {
        return undefined;
      }

      const id = get().activeElementIds[0];
      return preview.findElement((element) => element.source.id === id);
    },

    getActiveComposition: () => {
      const preview = get().preview;
      if (!preview) {
        return undefined;
      } else if (get().activeCompositionId) {
        // Find the active composition by its ID
        return preview.findElement(
          (element) => element.source.id === get().activeCompositionId,
        );
      } else {
        return preview.state;
      }
    },

    getActiveCompositionElements: () => {
      return get().getActiveComposition()?.elements ?? [];
    },

    getActiveCompositionSource: () => {
      const preview = get().preview;
      if (!preview || !preview.state) {
        return [];
      }

      if (get().activeCompositionId) {
        // Find the active composition based on its ID
        const activeComposition = preview.findElement(
          (element) => element.source.id === get().activeCompositionId,
          preview.state,
        );
        // Get the composition's source
        return preview.getSource(activeComposition);
      } else {
        return preview.getSource(preview.state);
      }
    },

    setActiveCompositionSource: async (source: Record<string, any>) => {
      const activeCompositionId = get().activeCompositionId;
      if (activeCompositionId) {
        const preview = get().preview;
        if (preview) {
          // Make a copy of the source before making changes
          const fullSource = deepClone(preview.getSource());

          // Find the active composition's source
          const activeComposition = deepFind(
            (element) => element.id === activeCompositionId,
            fullSource,
          );

          if (activeComposition) {
            // Update the source in-place
            Object.keys(activeComposition).forEach(
              (key) => delete activeComposition[key],
            );
            Object.assign(activeComposition, source);
          }

          // Apply the source
          await preview.setSource(fullSource, true);
        }
      } else {
        await get().preview?.setSource(source, true);
      }
    },

    updateElement: async (
      elementId: string,
      elementSource: Record<string, any>,
    ) => {
      const source = deepClone(get().getActiveCompositionSource());
      source.elements = source.elements.map((element: Record<string, any>) => {
        const updatedNestedArray = element.elements.map(
          (nestedItem: Record<string, any>) => {
            if (nestedItem.id === elementId) {
              return { ...nestedItem, ...elementSource };
            }
            return nestedItem; // Keep other properties unchanged
          },
        );
        return { ...element, elements: updatedNestedArray };
      });

      await get().setActiveCompositionSource(source);
    },

    createElement: async (elementSource: Record<string, any>) => {
      const preview = get().preview;
      if (!preview || !preview.state) {
        return;
      }

      // Get the active composition's elements
      const elements = get().getActiveCompositionElements() as ElementState[];
      console.log('[seo][createElement] createElement', elements);
      // Find a track number that's not already taken
      const newTrackNumber =
        Math.max(...elements.map((element) => element.track)) + 1;
      console.log('[seo][createElement] newTrackNumber ', newTrackNumber);
      // Get the active composition's source
      const source = deepClone(get().getActiveCompositionSource());
      console.log('[seo][createElement] source ', source);
      // Generate a new element ID
      const id = uuid();

      // Insert the element
      source.elements.push({
        id,
        track: 1,
        ...elementSource,
      });

      // Apply the mutated source
      await get().setActiveCompositionSource(source);

      // Make the newly inserted element active
      await get().setActiveElements(id);
    },

    deleteElement: async (elementId: string, isComposition = false) => {
      const preview = get().preview;
      if (!preview || !preview.state) {
        return;
      }

      // Get the active composition's source
      const source = deepClone(get().getActiveCompositionSource());
      console.log('[seo][deleteElement] deleteElement', source);

      //컴포지션 용
      if (isComposition)
        source.elements = source.elements.filter(
          (element: Record<string, any>) => {
            element.elements = element.elements.filter(
              (nestedElement: Record<string, any>) => {
                return nestedElement.id !== elementId;
              },
            );
            // Make sure to return the modified element
            return true; // or you can return element.elements.length > 0; if you want to remove elements with no nested elements
          },
        );
      else {
        // Remove the element by its ID
        source.elements = source.elements.filter(
          (element: Record<string, any>) => element.id !== elementId,
        );
      }
      // Apply the mutated source
      await get().setActiveCompositionSource(source);
    },

    rearrangeTracks: async (track: number, direction: 'up' | 'down') => {
      const preview = get().preview;
      if (!preview || !preview.state) {
        return;
      }

      // The track number to swap with
      const targetTrack = direction === 'up' ? track + 1 : track - 1;
      if (targetTrack < 1) {
        return;
      }

      // Get the active composition's source
      const source = deepClone(get().getActiveCompositionSource());

      // Swap track numbers
      for (const element of get().getActiveCompositionElements() as ElementState[]) {
        // Find the element's source by its ID
        const elementSource = source.elements?.find(
          (elementSource: Record<string, any>) =>
            elementSource.id === element.source.id,
        );

        // Apply the new track number
        if (elementSource) {
          if (element.track === track) {
            elementSource.track = targetTrack;
          } else if (element.track === targetTrack) {
            elementSource.track = track;
          }
        }
      }

      // Apply the mutated source
      await get().setActiveCompositionSource(source);
    },

    finishVideo: async () => {
      // Your finishVideo logic here
    },
    getDefaultSource: () => {
      // Replace this with your own JSON source
      return DEFAULT_DATA;
    },

    setFormId: (formId: string) => {
      set({ formId });
    },

    setSource: async (source: Record<string, any>) => {
      await get().preview?.setSource(source);
    },
  }),
);

export default useVideoCreatorStore;
