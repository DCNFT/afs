import { Button, Select, TextField } from '@radix-ui/themes';

function Keywords() {
  return (
    <div className="flex flex-col mb-2">
      <p className="text-base font-bold">
        강조하고 싶은 내용을 키워드 형식으로 알려주세요 (선택)
      </p>
      <TextField.Root>
        <TextField.Input placeholder="예시: 가족, 연인, 회식 모두 만족하는 장소" />
      </TextField.Root>
    </div>
  );
}

export default Keywords;
