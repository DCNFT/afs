import { Button, Select, TextField } from '@radix-ui/themes';

function MainProduct() {
  return (
    <div className="flex flex-col mb-2">
      <p className="text-base font-bold">
        주력 제품 또는 서비스를 알려주세요 (필수)
      </p>
      <TextField.Root>
        <TextField.Input placeholder="Search the docs…" />
      </TextField.Root>
    </div>
  );
}

export default MainProduct;
