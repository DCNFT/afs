'use client';

import React, { useRef } from 'react';
import { CreateButton } from '@/views/forms/components/CreateButton';
import styles from '@/styles/Home.module.css';
import useVideoCreatorStore from '@/store/useVideoCreatorStore';
import CompositionContainer from '@/views/forms/components/panel/CompositionContainer';

interface SettingsPanelProps {
  formId: string;
}

export const SettingsPanel: React.FC<SettingsPanelProps> = (props) => {
  // In this variable, we store the modifications that are applied to the template
  // Refer to: https://creatomate.com/docs/api/rest-api/the-modifications-object
  const modificationsRef = useRef<Record<string, any>>({});
  const preview = useVideoCreatorStore((state) => state.preview);

  return (
    <div>
      <CreateButton
        preview={preview!}
        modificationsRef={modificationsRef.current}
        formId={props?.formId}
      />

      <div className={styles.group}>
        <div className={styles.groupTitle}></div>
        <CompositionContainer modificationsRef={modificationsRef.current} />
      </div>
    </div>
  );
};
