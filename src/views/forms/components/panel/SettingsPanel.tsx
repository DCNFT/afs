'use client';

import React, { useMemo, useRef } from 'react';
import { CreateButton } from '@/views/forms/components/CreateButton';
import styles from '@/styles/Home.module.css';
import useVideoCreatorStore from '@/store/useVideoCreatorStore';
import CompositionContainer from '@/views/forms/components/panel/CompositionContainer';
import useGetElements from '@/views/forms/hooks/useGetElements';

interface SettingsPanelProps {
  formId: string;
}

export const SettingsPanel: React.FC<SettingsPanelProps> = (props) => {
  // In this variable, we store the modifications that are applied to the template
  // Refer to: https://creatomate.com/docs/api/rest-api/the-modifications-object
  const modificationsRef = useRef<Record<string, any>>({});
  const preview = useVideoCreatorStore((state) => state.preview);
  const textElements = useGetElements('text');
  const ImageElements = useGetElements('Image');

  console.log('textElements = ', textElements);
  console.log('ImageElements= ', ImageElements);
  console.log('modificationsRef= ', modificationsRef);

  return (
    <div>
      <CreateButton
        preview={preview!}
        modificationsRef={modificationsRef.current}
        formId={props?.formId}
      />

      <div className={styles.group}>
        <div className={styles.groupTitle}></div>
        {/* {textElements?.map((textElement, i) => {
          return (
            <TextArea
              key={i}
              placeholder={textElement.source.text}
              onFocus={async () => {
                await ensureElementVisibility(textElement.source.name, 1.5);
                await setActiveElements(textElement.source.id);
              }}
              onChange={async (e) => {
                await setPropertyValue(
                  preview!,
                  textElement.source.name,
                  e.target.value,
                  modificationsRef.current,
                );
              }}
            />
          );
        })} */}
        <CompositionContainer />
      </div>
    </div>
  );
};
