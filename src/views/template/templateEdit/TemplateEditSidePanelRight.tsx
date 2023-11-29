import useSidePanelStore from '@/store/useSidePanelStore';
import { DATA } from './data';
import { CompositionState, TextState } from '@creatomate/preview';
import { useRef, useState } from 'react';
import { TextField } from '@radix-ui/themes';
import { useEnsureElementVisibility } from '@/hooks/useEnsureElementVisibility';
import useVideoCreatorStore from '@/store/useVideoCreatorStore';
import { setPropertyValue } from '@/utils/setPropertyValue';

// export interface FluffyAnimation {
//   time: string;
//   duration: string;
//   easing: Easing;
//   type: string;
//   rotation?: string;
//   typing_start?: string;
// }

// export interface FluffyElement {
//   id: string;
//   name: string;
//   type: Type;
//   track: number;
//   time?: PurpleTime;
//   x: string;
//   y?: string;
//   width: number | string;
//   height?: number | string;
//   x_anchor?: Volume;
//   y_anchor?: Volume;
//   x_scale?: string;
//   fill_color?: string;
//   path?: Path;
//   animations?: FluffyAnimation[];
//   source?: string;
//   z?: null;
//   x_skew?: string;
//   duration?: Duration;
//   dynamic?: boolean;
//   stroke_color?: StrokeColor;
//   stroke_width?: StrokeWidth;
//   stroke_join?: string;
//   text?: string;
//   font_family?: FontFamily;
//   font_weight?: string;
//   font_size?: string;
//   text_wrap?: boolean;
//   text_clip?: boolean;
//   x_alignment?: string;
// }

type TextComponentsProps = {
  composition: CompositionState;
};
const TextComponents = ({ composition }: TextComponentsProps) => {
  const textComponents = composition?.elements?.filter((element: any) => {
    return element?.type === 'text';
  });
  const preview = useVideoCreatorStore((state) => state.preview);

  const modificationsRef = useRef<Record<string, any>>({});
  const ensureElementVisibility = useEnsureElementVisibility();
  const setActiveElements = useVideoCreatorStore(
    (state) => state.setActiveElements,
  );

  return (
    <div className="w-full flex-col">
      {textComponents?.map((text: any) => {
        console.log('media');
        return (
          <div
            className="max-w-[100px] min-h-[50px] h-full relative"
            key={`text-composition-${text.id}`}
          >
            <TextField.Input
              placeholder=""
              defaultValue={text.text}
              onFocus={async () => {
                await ensureElementVisibility(text.name, 1.5);
                await setActiveElements(text.id);
              }}
              onChange={async (e) => {
                await setPropertyValue(
                  preview!,
                  text.name,
                  e.target.value,
                  modificationsRef,
                );
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

type MediaComponentsProps = {
  composition: CompositionState;
};
const MediaComponents = ({ composition }: MediaComponentsProps) => {
  const mediaComponents = composition?.elements?.filter(
    (element: Record<string, any>) => {
      return element.type === 'image' || element.type === 'video';
    },
  );
  return (
    <div className="w-full grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:g rid-cols-3 gap-4">
      {mediaComponents?.map((media: Record<string, any>) => {
        console.log('media');
        return (
          <div
            className="max-w-[100px] min-h-[50px] h-full relative"
            key={`media-composition-${media?.id}`}
          >
            <img
              //src={`https://creatomate.com/files/previews/${media?.source}`}
              src={media?.source}
              alt="Bold typography"
              style={{
                position: 'absolute',
                display: 'block',
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                backgroundColor: 'var(--gray-5)',
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

const TemplateEditSidePanelRight = () => {
  //const [expanded, setExpanded] = useState(false);
  const isRightPanelExpanded = useSidePanelStore(
    (state) => state.isRightPanelExpanded,
  );
  const setRightPanelExpanded = useSidePanelStore(
    (state) => state.setRightPanelExpanded,
  );

  const togglePanel = () => {
    setRightPanelExpanded(!isRightPanelExpanded);
  };

  const [selectedComposition, setSelectedComposition] = useState<any>(null);

  return (
    <div
      className={`h-screen ${
        isRightPanelExpanded ? 'w-[400px]' : 'w-[0px]'
      } bg-white border-2 fixed top-[64px] right-0 overflow-hidden transition-all duration-300 rounded-tl-lg`}
    >
      {/* Content of the side panel */}
      <div className="p-4">
        <h1 className="text-xl font-bold">영상 편집</h1>
        {/* Add more content as needed */}
        <div>배경음악</div>
        {DATA.data?.template_info?.elements
          ?.filter((element) => {
            return element.type === 'audio';
          })
          ?.map((composition, index) => {
            return <div key={composition?.id}> 뮤직{index}</div>;
          })}
        <div>
          <div>장면</div>
          <div className="flex gap-2">
            {DATA.data?.template_info?.elements
              ?.filter((element) => {
                return element.type === 'composition';
              })
              ?.map((composition, index) => {
                return (
                  <div
                    className="border"
                    key={composition?.id}
                    onClick={() => setSelectedComposition(composition)}
                  >
                    {index}
                  </div>
                );
              })}
          </div>
          <div>
            텍스트
            <TextComponents composition={selectedComposition} />
          </div>
          <div>
            미디어
            <MediaComponents composition={selectedComposition} />
          </div>
        </div>
      </div>

      {/* Button to toggle the panel */}
      <button
        className="absolute top-0 right-0 p-4 text-white cursor-pointer focus:outline-none"
        onClick={togglePanel}
      >
        {isRightPanelExpanded ? 'Close' : 'Open'}
      </button>
    </div>
  );
};

export default TemplateEditSidePanelRight;
