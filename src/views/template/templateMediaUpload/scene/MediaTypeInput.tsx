import { Select } from '@radix-ui/themes';

const MediaTypeInput = ({ media }: any) => {
  return (
    <div className="flex gap-4 px-4">
      <div className="flex justify-center items-center">
        <span className="text-sm">미디어 타입</span>
      </div>
      <Select.Root defaultValue="고정 이미지">
        <Select.Trigger />
        <Select.Content position="popper">
          <Select.Item value="고정 이미지">고정 이미지</Select.Item>
          <Select.Item value="ai 영상 자동 변환 ">
            ai 영상 자동 변환{' '}
          </Select.Item>
        </Select.Content>
      </Select.Root>
    </div>
  );
};

export default MediaTypeInput;
