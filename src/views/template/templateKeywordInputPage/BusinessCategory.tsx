import { Select } from '@radix-ui/themes';

const BusinessCategory = () => {
  return (
    <div className="flex flex-col mb-2">
      <p className="text-base font-bold">업종을 선택해주세요</p>
      <div className="flex gap-2">
        <Select.Root defaultValue="apple">
          <Select.Trigger />
          <Select.Content position="popper">
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="orange">Orange</Select.Item>
          </Select.Content>
        </Select.Root>
        <Select.Root defaultValue="apple">
          <Select.Trigger />
          <Select.Content position="popper">
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="orange">Orange</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
    </div>
  );
};

export default BusinessCategory;
