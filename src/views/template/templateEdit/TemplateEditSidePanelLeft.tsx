import useSidePanelStore from '@/store/useSidePanelStore';
import useVideoCreatorStore from '@/store/useVideoCreatorStore';
import { useEffect } from 'react';

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
        <h1 className="text-xl font-bold">Side Panel</h1>
        {/* Add more content as needed */}
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
