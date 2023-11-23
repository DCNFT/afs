'use client';

import { useTemplateInfo } from '@/api/internal/abs/query';
import useTemplateStore from '@/store/useTemplateStore';
import Scene from '../scene/Scene';
import { useEffect } from 'react';

const SceneContainer = () => {
  const selectedTemplate = useTemplateStore((state) => state.selectedTemplate);
  const setTemplateData = useTemplateStore((state) => state.setTemplateData);
  const templateInfoResponse = useTemplateInfo(selectedTemplate.id);

  useEffect(() => {
    setTemplateData(templateInfoResponse?.data?.data);
  }, [templateInfoResponse.data?.data, setTemplateData]);

  return (
    <div>
      {templateInfoResponse?.data?.data?.info?.compositions.map(
        (composition, key) => (
          <Scene composition={composition} key={`composition-${key}`} />
        ),
      )}
    </div>
  );
};

export default SceneContainer;
