import { useTemplateInfo } from '@/api/internal/abs/query';
import useTemplateStore from '@/store/useTemplateStore';
import Scene from '../scene/Scene';

const SceneContainer = () => {
  const selectedTemplate = useTemplateStore((state) => state.selectedTemplate);
  const setTemplateData = useTemplateStore((state) => state.setTemplateData);
  const { data } = useTemplateInfo(selectedTemplate.id);
  const templateData = useTemplateStore((state) => state.templateData);

  setTemplateData(data);
  console.log('data= ', data?.data?.info.compositions);
  console.log('templateData ', templateData);
  return (
    <div>
      {data?.data?.info?.compositions.map((composition, key) => (
        <Scene composition={composition} key={`composition-${key}`} />
      ))}
    </div>
  );
};

export default SceneContainer;
