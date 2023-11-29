'use client';

import Icon from '@/components/Icon';
import { DATA } from './data';
import { Button, TextField, TextFieldInput } from '@radix-ui/themes';
import useVideoCreatorStore from '@/store/useVideoCreatorStore';
import PreviewPanel from '../templateMediaUpload/PreviewPanel';
import useSidePanelStore from '@/store/useSidePanelStore';
import TemplateEditBanner from './TemplateEditBanner';
import TemplateEditSidePanelLeft from './TemplateEditSidePanelLeft';
import TemplateEditSidePanelRight from './TemplateEditSidePanelRight';
import { useEffect } from 'react';

const TemplateEdit = () => {
  console.log('DATA= ', DATA);
  const isLeftPanelExpanded = useSidePanelStore(
    (state) => state.isLeftPanelExpanded,
  );
  const isRightPanelExpanded = useSidePanelStore(
    (state) => state.isRightPanelExpanded,
  );
  const setSource = useVideoCreatorStore((state) => state.setSource);
  const mapElementsToModifications = (elements: any) => {
    elements.forEach((element: Record<string, any>) => {
      if (element.elements) {
        element.elements = mapElementsToModifications(element.elements);
      }

      const matchingModification = DATA.data.modifications.find(
        (modification) => modification.key === element.name,
      );

      if (matchingModification) {
        if (element.type === 'video' || element.type === 'image') {
          if (element.type === 'video') {
            console.log(matchingModification);
            element.type = 'image';
            element.source = matchingModification.value;
          }
          // 여기에서 원본 데이터 형식으로 변경하거나 필요한 작업 수행
          element.source = matchingModification.value;
        }
        if (element.type === 'text') {
          // 여기에서 원본 데이터 형식으로 변경하거나 필요한 작업 수행
          element.text = matchingModification.value;
        }
      }
    });

    return elements;
  };
  const isReady = useVideoCreatorStore((state) => state.isReady);
  useEffect(() => {
    if (!isReady) return;
    const modificationsElements = mapElementsToModifications(
      DATA.data.template_info.elements,
    );
    const templateInfo = {
      ...DATA.data.template_info,
      elements: modificationsElements,
    };
    setSource(templateInfo);
  }, [isReady]);

  const handleClick = () => {
    //setSource(DATA.data.template_info);
    const a = mapElementsToModifications(DATA.data.template_info.elements);
    console.log('a= ', a);
    const templateInfo = { ...DATA.data.template_info, elements: a };
    setSource(templateInfo);
  };

  return (
    <div className="flex flex-col">
      <TemplateEditBanner />
      {/* <Button onClick={() => handleClick()}>set source</Button> */}
      <TemplateEditSidePanelLeft />
      <div
        className={`${isLeftPanelExpanded ? 'ml-[400px]' : 'ml-[0px]'} ${
          isRightPanelExpanded ? 'mr-[400px]' : 'mr-[0px]'
        } w-full h-screen bg-gray-200`}
      >
        <PreviewPanel />
      </div>
      <TemplateEditSidePanelRight />
    </div>
  );
};
export default TemplateEdit;
