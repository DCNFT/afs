import useSidePanelStore from '@/store/useSidePanelStore';
import useVideoCreatorStore from '@/store/useVideoCreatorStore';
import { useEffect } from 'react';

const dumpData = [
  '가족 연인 모두 만족시키는 맛',
  '100% 한우',
  '테스트',
  '정갈한 ',
];

const AiRecommendedTextList = () => {
  <div className="flex flex-col">
    {dumpData.map((data) => {
      return <div className="w-full p-4 rounded-lg">{data}</div>;
    })}
  </div>;
};
const TemplateEditSidePanelLeft = () => {
  //const [expanded, setExpanded] = useState(false);
  const isLeftPanelExpanded = useSidePanelStore(
    (state) => state.isLeftPanelExpanded,
  );
  const setLeftPanelExpanded = useSidePanelStore(
    (state) => state.setLeftPanelExpanded,
  );

  const togglePanel = () => {
    setLeftPanelExpanded(!isLeftPanelExpanded);
  };

  const activeElementIds = useVideoCreatorStore(
    (state) => state.activeElementIds,
  );
  /* 설정된 activeElementsIds 가 있을경우  */
  useEffect(() => {
    if (activeElementIds.length === 0) return;
    setLeftPanelExpanded(true);
  }, [activeElementIds]);

  return (
    <div
      className={`h-screen ${
        isLeftPanelExpanded ? 'w-[400px]' : 'w-[0px]'
      } bg-white border fixed top-[64px] left-0 overflow-hidden transition-all duration-300`}
    >
      {/* Content of the side panel */}
      <div className="p-4">
        <h1 className="text-xl font-bold">텍스트 편집</h1>

        <AiRecommendedTextList />
      </div>

      {/* Button to toggle the panel */}
      <button
        className="absolute top-0 right-0 p-4 text-white cursor-pointer focus:outline-none"
        onClick={togglePanel}
      >
        {isLeftPanelExpanded ? 'Close' : 'Open'}
      </button>
    </div>
  );
};

export default TemplateEditSidePanelLeft;
