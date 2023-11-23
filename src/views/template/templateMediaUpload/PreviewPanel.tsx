import useTemplateStore from '@/store/useTemplateStore';
import Preview from './Preview';
import { DEFAULT_DATA } from '@/store/data';
import { useState } from 'react';
import { Button } from '@radix-ui/themes';

type PreviewPanelProps = {};
const PreviewPanel = (props: PreviewPanelProps) => {
  const templateData = useTemplateStore((state) => state.templateData);

  console.log('templateData =', templateData);
  const [isSource, setIsSource] = useState<boolean>(false);
  const handleSource = () => {
    setIsSource((prev) => !prev);
  };
  return (
    <div className="flex flex-col">
      {/* <Button onClick={ handleSource }>source</Button> */}
      {/* <div className="w-full h-[200px] bg-gray-300"></div> */}
      <Preview
        formId={templateData?.info?.template_id}
        // source={isSource ? DEFAULT_DATA : undefined}
      />
    </div>
  );
};
export default PreviewPanel;
