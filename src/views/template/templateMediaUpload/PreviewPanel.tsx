import useTemplateStore from '@/store/useTemplateStore';
import Preview from './Preview';

type PreviewPanelProps = {};
const PreviewPanel = (props: PreviewPanelProps) => {
  // const templateData = useTemplateStore((state) => state.templateData);
  return (
    <div className="flex flex-col">
      <div className="w-full h-[200px] bg-gray-300"></div>
      {/* <Preview formId={templateData?.template_id} /> */}
    </div>
  );
};
export default PreviewPanel;
