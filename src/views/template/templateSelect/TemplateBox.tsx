import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Template } from '@/api/internal/creatomate/types';
import useTemplateStore from '@/store/useTemplateStore';
import { StarIcon } from '@radix-ui/react-icons';

type TemplateBoxProps = {
  template: Template;
};

const TemplateBox: React.FC<TemplateBoxProps> = ({ template }) => {
  const setSelectedTemplate = useTemplateStore(
    (state) => state.setSelectedTemplate,
  );
  const selectedTemplate = useTemplateStore((state) => state.selectedTemplate);
  const isSelected = selectedTemplate?.id === template?.id;

  return (
    <div className="flex flex-col">
      <div
        className={`w-full h-[200px] border rounded ${
          isSelected ? 'border-purple-500' : 'border-gray-300'
        } cursor-pointer`}
        onClick={() => setSelectedTemplate(template)}
      ></div>
      <div className="flex justify-between px-2">
        <p className={`font-base`}>{template?.name}</p>
        <div className="flex justify-center items-center">
          <StarIcon />
        </div>
      </div>
    </div>
  );
};

export default TemplateBox;
