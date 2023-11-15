import InputField from '@/components/InputField';
import { Button, Select, TextField } from '@radix-ui/themes';

function BrandName() {
  return (
    <div className="flex flex-col mb-2">
      <p className="text-base font-bold">
        상호 또는 브랜드 이름을 알려주세요(필수)
      </p>
      <InputField />
      {/* <TextField.Root>
        <TextField.Input placeholder="예시: 우리동네화로" />
      </TextField.Root> */}
    </div>
  );
}
export default BrandName;
