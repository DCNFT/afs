'use client';

import React, { useState } from 'react';
import { Preview } from '@creatomate/preview';
import { finishVideo } from '@/utils/finishVideo';
import styles from '@/styles/Home.module.css';
import { videoEdit } from '@/api/internal/creatomate/http';

interface CreateButtonProps {
  preview: Preview;
  modificationsRef: Record<string, any>;
  formId: string;
}

export const CreateButton: React.FC<CreateButtonProps> = (props) => {
  const [isRendering, setIsRendering] = useState(false);
  const [render, setRender] = useState<any>();

  if (isRendering) {
    return (
      <button
        className={styles.createButton}
        style={{ backgroundColor: '#e67e22' }}
      >
        Rendering...
      </button>
    );
  }

  if (render) {
    return (
      <button
        className={styles.createButton}
        style={{ backgroundColor: '#2ecc71' }}
        onClick={() => {
          window.open(render.url, '_blank');
          setRender(undefined);
        }}
      >
        Download
      </button>
    );
  }

  return (
    <button
      className={styles.createButton}
      style={{ display: 'block', marginLeft: 'auto' }}
      onClick={async () => {
        setIsRendering(true);
        try {
          const render = await videoEdit(props.formId, props.modificationsRef);
          if (render.result[0]?.status === 'succeeded') {
            setRender(render.result[0]);
          } else {
            window.alert(`Rendering failed: ${render.errorMessage}`);
          }
        } catch (error) {
          window.alert(error);
        } finally {
          setIsRendering(false);
        }
      }}
    >
      Create Video
    </button>
  );
};
