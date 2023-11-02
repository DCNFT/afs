import useRouting from '@/hooks/useRouting';
import { Button, Select, TextField } from '@radix-ui/themes';

const TemplateKeywordInputPage = () => {
  const handleRouting = useRouting({ path: '/template/upload' });

  return (
    <div>
      <div className="p-4 bg-gray-100">
        <p className="font-bold text-base">정보 입력</p>
        <h1 className="text-2xl font-bold">
          AI가 최적의 광고 구성을 하기 위해 참고할 정보를 알려주세요
        </h1>
      </div>
      <div className="flex- flex-col p-5">
        <div className="flex flex-col">
          <div className="flex flex-col mb-2">
            <p className="text-base font-bold">
              광고의 목적을 알려주세요(필수){' '}
            </p>
            <div className="flex gap-4">
              <Button>가게 알리기</Button>
              <Button>상품 소개</Button>
              <Button>할인 이벤트</Button>
              <Button>정보 전달</Button>
            </div>
          </div>
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
          <div className="flex flex-col mb-2">
            <p className="text-base font-bold">
              상호 또는 브랜드 이름을 알려주세요(필수)
            </p>
            <TextField.Root>
              <TextField.Input placeholder="예시: 우리동네화로" />
            </TextField.Root>
          </div>
          <div className="flex flex-col mb-2">
            <p className="text-base font-bold">
              주력 제품 또는 서비스를 알려주세요 (필수)
            </p>
            <TextField.Root>
              <TextField.Input placeholder="Search the docs…" />
            </TextField.Root>
          </div>
          <div className="flex flex-col mb-2">
            <p className="text-base font-bold">
              홍보하고 싶은 특징을 담아서 간단하게 소개해주세요 (필수)
            </p>
            <TextField.Root>
              <TextField.Input placeholder="예시: 한우 100%, 한돈 100%, 신선한 재료, 매일 아침 만든 반찬 제공 " />
            </TextField.Root>
          </div>
          <div className="flex flex-col mb-2">
            <p className="text-base font-bold">
              강조하고 싶은 내용을 키워드 형식으로 알려주세요 (선택)
            </p>
            <TextField.Root>
              <TextField.Input placeholder="예시: 가족, 연인, 회식 모두 만족하는 장소" />
            </TextField.Root>
          </div>
          <div className="flex flex-col mb-4">
            <p className="text-base font-bold">
              선호하는 광고 분위기를선택해주세요 (필수)
            </p>
            <div className="flex gap-3">
              <Button variant="outline" radius="full">
                가게 알리기
              </Button>
              <Button variant="outline" radius="full">
                상품 소개
              </Button>
              <Button variant="outline" radius="full">
                할인 이벤트
              </Button>
              <Button variant="outline" radius="full">
                정보 전달
              </Button>
              <Button variant="outline" radius="full">
                정보 전달
              </Button>
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <div>
              <Button onClick={handleRouting}>다음 </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateKeywordInputPage;
