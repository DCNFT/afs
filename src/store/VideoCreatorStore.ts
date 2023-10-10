import { create } from 'zustand';
// import { v4 as uuid } from 'uuid';
import {
  CompositionState,
  ElementState,
  Preview,
  PreviewState,
} from '@creatomate/preview';
// Define the state interface
interface VideoCreatorState {
  preview?: Preview;
  state?: PreviewState;
  tracks?: Map<number, ElementState[]>;
  activeCompositionId: string | undefined;
  activeElementIds: string[];
  isLoading: boolean;
  isPlaying: boolean;
  time: number;
  timelineScale: number;
  isScrubbing: boolean;
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
  deleteElement: (elementId: string) => Promise<void>;
  rearrangeTracks: (track: number, direction: 'up' | 'down') => Promise<void>;
  finishVideo: () => Promise<any>;
}

// Create the Zustand store
const VideoCreatorStore = create<VideoCreatorState & VideoCreatorActions>(
  (set) => ({
    preview: undefined,
    state: undefined,
    tracks: undefined,
    activeCompositionId: undefined,
    activeElementIds: [],
    isLoading: true,
    isPlaying: false,
    time: 0,
    timelineScale: 100,
    isScrubbing: false,

    // Add your action implementations here
    initializeVideoPlayer: (htmlElement: HTMLDivElement) => {
      // Your initialization code here
    },

    setTime: async (time: number) => {
      set({ time });
    },

    setActiveElements: async (...elementIds: string[]) => {
      // Your setActiveElements logic here
    },

    getActiveElement: () => {
      // Your getActiveElement logic here
      return undefined;
    },

    getActiveComposition: () => {
      // Your getActiveComposition logic here
      return undefined;
    },

    getActiveCompositionElements: () => {
      // Your getActiveCompositionElements logic here
      return null;
    },

    getActiveCompositionSource: () => {
      // Your getActiveCompositionSource logic here
      return { 'test ': 'test' };
    },

    setActiveCompositionSource: async (source: Record<string, any>) => {
      // Your setActiveCompositionSource logic here
    },

    createElement: async (elementSource: Record<string, any>) => {
      // Your createElement logic here
    },

    deleteElement: async (elementId: string) => {
      // Your deleteElement logic here
    },

    rearrangeTracks: async (track: number, direction: 'up' | 'down') => {
      // Your rearrangeTracks logic here
    },

    finishVideo: async () => {
      // Your finishVideo logic here
    },
  }),
);

export default VideoCreatorStore;
