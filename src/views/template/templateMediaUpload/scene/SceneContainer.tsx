import { useTemplateInfo } from '@/api/internal/abs/query';
import useTemplateStore from '@/store/useTemplateStore';
import Scene from '../scene/Scene';
import { useEffect } from 'react';

const SceneContainer = () => {
  const selectedTemplate = useTemplateStore((state) => state.selectedTemplate);
  const setTemplateData = useTemplateStore((state) => state.setTemplateData);
  const { data } = useTemplateInfo(selectedTemplate.id);

  useEffect(() => {
    setTemplateData(data?.data);
  }, [data?.data, setTemplateData]);

  return (
    <div>
      {data?.data?.info?.compositions.map((composition, key) => (
        <Scene composition={composition} key={`composition-${key}`} />
      ))}
    </div>
  );
};

export default SceneContainer;
