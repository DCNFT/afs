import { Select } from '@radix-ui/themes';
import React from 'react';

const MediaTypeInput = ({ media, handleMediaTypeChange }: any) => {
  console.log('media= ', media);
  console.log('media= ', media?.startsWith('data:video/'));
  return (
    <div className="flex gap-4 px-4">
      <div className="flex justify-center items-center">
        <span className="text-sm">미디어 타입</span>
      </div>
      <Select.Root defaultValue="IMAGE" onValueChange={handleMediaTypeChange}>
        <Select.Trigger />
        <Select.Content position="popper">
          {media && media.startsWith('data:video/') ? (
            <Select.Item value="IMAGE">고정 이미지</Select.Item>
          ) : (
            <>
              <Select.Item value="IMAGE">고정 이미지</Select.Item>
              <Select.Item value="AI">ai 영상 자동 변환</Select.Item>
            </>
          )}
        </Select.Content>
      </Select.Root>
    </div>
  );
};

export default React.memo(MediaTypeInput);
