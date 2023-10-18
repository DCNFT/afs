'use client';

import React, { Fragment, useMemo, useRef } from 'react';
import { Preview, PreviewState } from '@creatomate/preview';
import { CreateButton } from '@/views/forms/components/CreateButton';
import styles from '@/styles/Home.module.css';
import { setPropertyValue } from '@/utils/setPropertyValue';
import { setTextStyle } from '@/utils/setTextStyle';
import { addSlide } from '@/utils/addSlide';
import { setSlideTransition } from '@/utils/setSlideTransition';
import { ensureElementVisibility } from '@/utils/ensureElementVisibility';
import useVideoCreatorStore from '@/store/useVideoCreatorStore';
import { useEnsureElementVisibility } from '@/hooks/useEnsureElementVisibility';

interface SettingsPanelProps {
  // preview: Preview;
  // currentState?: PreviewState;
  formId: string;
}

export const SettingsPanel: React.FC<SettingsPanelProps> = (props) => {
  // In this variable, we store the modifications that are applied to the template
  // Refer to: https://creatomate.com/docs/api/rest-api/the-modifications-object
  const modificationsRef = useRef<Record<string, any>>({});
  const currentState = useVideoCreatorStore((state) => state.state);
  const preview = useVideoCreatorStore((state) => state.preview);
  const setActiveElements = useVideoCreatorStore(
    (state) => state.setActiveElements,
  );
  const ensureElementVisibility = useEnsureElementVisibility();
  // Get the slide elements in the template by name (starting with 'Slide-')
  const slideElements = useMemo(() => {
    return currentState?.elements.filter((element) =>
      element.source.name?.startsWith('Slide-'),
    );
  }, [currentState]);

  const textElements = useMemo(() => {
    return currentState?.elements.filter(
      (element) => element.source.type === 'text',
    );
  }, [currentState]);

  const ImageElements = useMemo(() => {
    return currentState?.elements.filter(
      (element) => element.source.type === 'image',
    );
  }, [currentState]);

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
        <div className={styles.groupTitle}>-</div>
        {textElements?.map((textElement, i) => {
          return (
            <textarea
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
        })}

        {/* <textarea
          placeholder="Lorem ipsum dolor sit amet"
          onFocus={async () => {
            await ensureElementVisibility(props.preview, 'Text-1', 1.5);
          }}
          onChange={async (e) => {
            await setPropertyValue(
              props.preview,
              'Text-1',
              e.target.value,
              modificationsRef.current,
            );
          }}
        /> */}
        {/* <textarea
          placeholder="Enter your tagline here"
          onFocus={async () => {
            await ensureElementVisibility(props.preview, 'Tagline', 1.5);
          }}
          onChange={async (e) => {
            await setPropertyValue(
              props.preview,
              'Tagline',
              e.target.value,
              modificationsRef.current,
            );
          }}
        /> */}
        {/* <textarea
          placeholder="A second and longer text here ✌️"
          onFocus={async () => {
            await ensureElementVisibility(props.preview, 'Start-Text', 1.5);
          }}
          onChange={async (e) => {
            await setPropertyValue(
              props.preview,
              'Start-Text',
              e.target.value,
              modificationsRef.current,
            );
          }}
        /> */}
      </div>
      {/* 
      <div className={styles.group}>
        <div className={styles.groupTitle}>Outro</div>
        <textarea
          placeholder="Your Call To Action Here"
          onFocus={async () => {
            await ensureElementVisibility(props.preview, 'Final-Text', 1.5);
          }}
          onChange={async (e) => {
            await setPropertyValue(
              props.preview,
              'Final-Text',
              e.target.value,
              modificationsRef.current,
            );
          }}
        />
      </div> */}

      {slideElements?.map((slideElement, i) => {
        const transitionAnimation = slideElement.source.animations.find(
          (animation: any) => animation.transition,
        );

        const nestedElements = preview?.getElements(slideElement)!;
        const textElement = nestedElements.find((element) =>
          element.source.name?.endsWith('-Text'),
        );
        const imageElement = nestedElements.find((element) =>
          element.source.name?.endsWith('-Image'),
        );

        return (
          <div key={i} className={styles.group}>
            <div className={styles.groupTitle}>Slide {i + 1}</div>
            {textElement && (
              <Fragment>
                <textarea
                  placeholder={textElement.source.text}
                  onFocus={async () => {
                    await ensureElementVisibility(textElement.source.name, 1.5);
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
                <select
                  onFocus={async () => {
                    await ensureElementVisibility(textElement.source.name, 1.5);
                  }}
                  onChange={async (e) => {
                    await setTextStyle(
                      preview!,
                      textElement.source.name,
                      e.target.value,
                      modificationsRef.current,
                    );
                  }}
                >
                  <option value="block-text">Block Text</option>
                  <option value="rounded-text">Rounded Text</option>
                </select>
                <select
                  value={transitionAnimation?.type}
                  onFocus={async () => {
                    await ensureElementVisibility(
                      slideElement.source.name,
                      0.5,
                    );
                  }}
                  onChange={async (e) => {
                    await setSlideTransition(
                      preview!,
                      slideElement.source.name,
                      e.target.value,
                    );
                  }}
                >
                  <option value="fade">Fade Transition</option>
                  <option value="circular-wipe">Circle Wipe Transition</option>
                </select>
                {imageElement && (
                  <div className={styles.imageOptions}>
                    {[
                      'https://creatomate-static.s3.amazonaws.com/demo/harshil-gudka-77zGnfU_SFU-unsplash.jpg',
                      'https://creatomate-static.s3.amazonaws.com/demo/samuel-ferrara-1527pjeb6jg-unsplash.jpg',
                      'https://creatomate-static.s3.amazonaws.com/demo/simon-berger-UqCnDyc_3vA-unsplash.jpg',
                    ].map((url) => (
                      <div
                        key={url}
                        className={styles.imageOption}
                        style={{ background: `url('${url}')` }}
                        onClick={async () => {
                          await ensureElementVisibility(
                            imageElement.source.name,
                            1.5,
                          );
                          await setPropertyValue(
                            preview!,
                            imageElement.source.name,
                            url,
                            modificationsRef.current,
                          );
                        }}
                      />
                    ))}
                  </div>
                )}
              </Fragment>
            )}
          </div>
        );
      })}
      {slideElements?.length !== 0 && (
        <button
          onClick={async () => {
            await addSlide(preview!);

            // Scroll to the bottom of the settings panel
            const panel = document.querySelector('#panel');
            if (panel) {
              panel.scrollTop = panel.scrollHeight;
            }
          }}
          style={{ width: '100%' }}
        >
          Add Slide
        </button>
      )}
    </div>
  );
};
