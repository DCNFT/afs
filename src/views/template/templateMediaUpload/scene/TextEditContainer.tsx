import { Composition, MediaElement } from '@/api/internal/abs/types';
import useTemplateStore from '@/store/useTemplateStore';
import { TextField } from '@radix-ui/themes';
import { useCallback, useEffect, useRef, useState } from 'react';

type TextEditContainerProps = {
  mediaItem: MediaElement;
};
const TextEditContainer = ({ mediaItem }: TextEditContainerProps) => {
  //   console.log('[seo] mediaItem= ', mediaItem);
  const templateData = useTemplateStore((state) => state.templateData);
  const setTemplateData = useTemplateStore((state) => state.setTemplateData);
  const [originMediaDescriptionLength] = useState<number>(
    mediaItem?.description?.length ? mediaItem?.description?.length : 0,
  );
  const [localMediaData, setLocalMediaData] = useState<MediaElement>(mediaItem);
  const [text, SetText] = useState(mediaItem?.description);
  const isSetTemplate = useRef(false);

  const handleDescriptionChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (originMediaDescriptionLength < event.target.value.length) {
        return;
      }

      isSetTemplate.current = false;
      SetText(event.target.value);
      setLocalMediaData((prev: MediaElement) => ({
        ...prev,
        description: event.target.value,
      }));
    },
    [],
  );

  useEffect(() => {
    const handleMediaUpdate = () => {
      if (isSetTemplate.current) return;
      const local = templateData?.info?.compositions?.map(
        (composition: Composition) => {
          return {
            ...composition,
            media: composition.media?.map((media: MediaElement) => {
              if (media.name === mediaItem.name) {
                return localMediaData; // 특정 조건을 만족하는 경우 localMediaData로 업데이트
              }
              return media;
            }),
          };
        },
      );

      const template = {
        ...templateData,
        info: {
          ...templateData?.info, // info 속성을 복제
          compositions: local, // compositions 속성을 local 배열로 대체
        },
      };

      setTemplateData(template);
      isSetTemplate.current = true;
    };

    handleMediaUpdate();
  }, [localMediaData, templateData, mediaItem, setTemplateData]);

  return (
    <div className="flex-col">
      <p className="text-base font-bold">{mediaItem?.title}</p>
      <TextField.Input
        size="3"
        radius="none"
        placeholder="텍스트를 입력해주세요."
        onChange={handleDescriptionChange}
        value={text as string}
        maxLength={originMediaDescriptionLength}
      />
      <div className="flex justify-end">
        {text?.length} / {originMediaDescriptionLength}
      </div>
    </div>
  );
};

export default TextEditContainer;
