import React, { useRef } from 'react';
import { setPropertyValue } from '@/utils/setPropertyValue';
import useVideoCreatorStore from '@/store/useVideoCreatorStore';
import { useEnsureElementVisibility } from '@/hooks/useEnsureElementVisibility';
import { Select, TextArea } from '@radix-ui/themes';
import useGetElements from '@/views/forms/hooks/useGetElements';
import { setTextStyle } from '@/utils/setTextStyle';
import { setSlideTransition } from '@/utils/setSlideTransition';
import { ElementState } from '@creatomate/preview';

type TextSettingPanelProps = {
  textElement: any;
  transitionAnimation: any;
  compositionElement: any;
};
const TextSettingPanel = ({
  textElement,
  transitionAnimation,
  compositionElement,
}: TextSettingPanelProps) => {
  const modificationsRef = useRef<Record<string, any>>({});
  const preview = useVideoCreatorStore((state) => state.preview);
  const setActiveElements = useVideoCreatorStore(
    (state) => state.setActiveElements,
  );
  const ensureElementVisibility = useEnsureElementVisibility();
  return (
    <>
      <TextArea
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
      <div className="flex flex-col">
        <Select.Root defaultValue="block-text">
          <Select.Trigger
            onFocus={async () => {
              console.log('onFocus');
              await ensureElementVisibility(textElement.source.name, 1.5);
            }}
            onChange={async (e: any) => {
              await setTextStyle(
                preview!,
                textElement.source.name,
                e.target.value,
                modificationsRef.current,
              );
            }}
          />
          <Select.Content position="popper">
            <Select.Item value="block-text">Block Text</Select.Item>
            <Select.Item value="rounded-text">Rounded Text</Select.Item>
          </Select.Content>
        </Select.Root>

        <Select.Root defaultValue="fade">
          <Select.Trigger
            value={transitionAnimation?.type}
            onFocus={async () => {
              await ensureElementVisibility(
                compositionElement.source.name,
                0.5,
              );
            }}
            onChange={async (e: any) => {
              await setSlideTransition(
                preview!,
                compositionElement.source.name,
                e.target.value,
              );
            }}
          />
          <Select.Content position="popper">
            <Select.Item value="fade">Fade Transition</Select.Item>
            <Select.Item value="circular-wipe">
              Circle Wipe Transition
            </Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
    </>
  );
};
export default TextSettingPanel;
