import { Composition, MediaElement } from '@/api/internal/abs/types';
import { useCallback, useEffect, useRef, useState } from 'react';
import MediaInputContainer from './MediaInputContainer';
import MediaDisplayInput from './MediaDisplayInput';
import MediaTypeInput from './MediaTypeInput';
import useTemplateStore from '@/store/useTemplateStore';
import useToast from '@/hooks/useToast';
type SceneEditContainerProps = {
  mediaItem: MediaElement;
};

const SceneEditContainer = ({ mediaItem }: SceneEditContainerProps) => {
  const templateData = useTemplateStore((state) => state.templateData);
  const setTemplateData = useTemplateStore((state) => state.setTemplateData);
  const [media, setMedia] = useState<any>(null);
  const [description, setDescription] = useState(mediaItem?.description);
  const [mediaType, setMediaType] = useState<string>('IMAGE');
  const [localMediaData, setLocalMediaData] = useState<MediaElement>(mediaItem);
  const isSetTemplate = useRef(false);
  const { enqueueErrorBar } = useToast();
  const updateCheckMedia = useTemplateStore((state) => state.updateCheckMedia);
  const checkMediaSetList = useTemplateStore(
    (state) => state.checkMediaSetList,
  );
  console.log('[seo] checkMediaSetList ', checkMediaSetList);
  //checkvalidating
  useEffect(() => {
    console.log('media ', media);
    if (!mediaItem?.name) return;
    // if (!isSetTemplate.current) return;
    updateCheckMedia({
      mediaName: mediaItem?.name,
      isCheck: description !== '' && media !== null && mediaType !== '',
    });
  }, [description, media, mediaItem, mediaType, updateCheckMedia]);

  const handleDescriptionChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      isSetTemplate.current = false;
      setDescription(event.target.value);
      setLocalMediaData((prev: MediaElement) => ({
        ...prev,
        description: event.target.value,
      }));
    },
    [],
  );

  const handleMediaTypeChange = useCallback((value: string) => {
    isSetTemplate.current = false;
    // 선택된 값을 부모 컴포넌트로 전달
    setMediaType(value);
    setLocalMediaData((prev: MediaElement) => ({
      ...prev,
      image_process: 'IMAGE',
    }));
  }, []);

  const handleMediaChange = useCallback(
    (
      event: React.ChangeEvent<HTMLInputElement>,
      mediaItemName: string | null,
    ) => {
      const file = event.target.files?.[0];
      console.log('[seo]file ', file, file instanceof File);
      if (file && /\.(jpg|png)$/i.test(file.name)) {
        const reader = new FileReader();
        console.log('mediaItem ', mediaItem, mediaItemName);
        reader.onloadend = () => {
          isSetTemplate.current = false;
          setMedia(reader.result as string);
          setLocalMediaData({
            ...mediaItem,
            file: file as any,
            image_process: mediaType,
          });
        };
        reader.readAsDataURL(file);
      } else {
        // jpg 또는 png가 아닌 경우에 대한 처리
        console.log('Invalid file format. Please select a jpg or png file.');
        enqueueErrorBar('jpg 또는 png 파일이 아니에요.');
        // 또는 에러 메시지를 사용자에게 보여줄 수도 있습니다.
      }
    },
    [enqueueErrorBar, mediaItem, mediaType],
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
          ...templateData.info, // info 속성을 복제
          compositions: local, // compositions 속성을 local 배열로 대체
        },
      };

      console.log('[seo] useEffect templateData ', template);
      setTemplateData(template);
      isSetTemplate.current = true;
    };

    handleMediaUpdate();
  }, [localMediaData, templateData, mediaItem, setTemplateData]);
  return (
    <div className="flex mb-4">
      <MediaInputContainer
        media={media}
        handleMediaChange={handleMediaChange}
        mediaItemName={mediaItem?.name}
      />
      <div className="flex flex-col">
        <div className="flex flex-col gap-4">
          <MediaDisplayInput
            mediaItem={mediaItem}
            handleDescriptionChange={handleDescriptionChange}
            description={description as string}
          />
          <MediaTypeInput
            media={media}
            handleMediaTypeChange={handleMediaTypeChange}
          />
        </div>
      </div>
    </div>
  );
};
export default SceneEditContainer;
