import { Select, TextField } from '@radix-ui/themes';

type SceneProps = {
  title?: string;
};
const Scene = ({
  title = '[장면 1] 추천 미디어: 가게 전경, 1장',
}: SceneProps) => {
  return (
    <div className="flex mb-4">
      <div className="flex flex-col" style={{ flex: '2 1 0%' }}>
        <p className="text-base font-bold">{title}</p>
        <div className="flex">
          <div className="h-[150px] w-[300px] border bg-gray-200"></div>
          <div className="flex flex-col">
            <div className="flex flex-col ">
              <div className="flex gap-4 px-4">
                <div className="flex justify-center items-center">
                  <span className="text-sm">미디어 설명</span>
                </div>
                <div>
                  <TextField.Input
                    radius="none"
                    placeholder="Search the docs…"
                  />
                </div>
              </div>
              <div className="flex gap-4 px-4">
                <div className="flex justify-center items-center">
                  <span className="text-sm">미디어 설명</span>
                </div>
                <Select.Root defaultValue="apple">
                  <Select.Trigger />
                  <Select.Content position="popper">
                    <Select.Item value="apple">Apple</Select.Item>
                    <Select.Item value="orange">Orange</Select.Item>
                  </Select.Content>
                </Select.Root>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

export default Scene;
