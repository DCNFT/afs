import { Select } from '@radix-ui/themes';

const MediaTypeInput = ({ media, onMediaTypeChange }: any) => {
  console.log('media= ', media);
  console.log('media= ', media?.startsWith('data:video/'));

  const handleMediaTypeChange = (value: string) => {
    // 선택된 값을 부모 컴포넌트로 전달
    onMediaTypeChange(value);
  };

  return (
    <div className="flex gap-4 px-4">
      <div className="flex justify-center items-center">
        <span className="text-sm">미디어 타입</span>
      </div>
      <Select.Root
        defaultValue="고정 이미지"
        onValueChange={handleMediaTypeChange}
      >
        <Select.Trigger />
        <Select.Content position="popper">
          {media && media.startsWith('data:video/') ? (
            <Select.Item value="고정 이미지">고정 이미지</Select.Item>
          ) : (
            <>
              <Select.Item value="고정 이미지">고정 이미지</Select.Item>
              <Select.Item value="ai 영상 자동 변환 ">
                ai 영상 자동 변환{' '}
              </Select.Item>
            </>
          )}
        </Select.Content>
      </Select.Root>
    </div>
  );
};

export default MediaTypeInput;
