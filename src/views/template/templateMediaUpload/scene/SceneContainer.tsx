import { useTemplateInfo } from '@/api/internal/abs/query';
import useTemplateStore from '@/store/useTemplateStore';
import Scene from '../scene/Scene';

const SceneContainer = () => {
  const selectedTemplate = useTemplateStore((state) => state.selectedTemplate);
  const { data } = useTemplateInfo(selectedTemplate.id);
  console.log('data= ', data?.data?.info.compositions);
  return (
    <div>
      {data?.data?.info?.compositions.map((composition) => (
        <Scene composition={composition} />
      ))}
    </div>
  );
};

export default SceneContainer;
