import { Box, Button, Select, Tabs, Text, TextField } from '@radix-ui/themes';
import { FaceIcon, ImageIcon, StarIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';
const Template = () => {
  return (
    <div className="w-full h-[200px] border rounded">
      <div className="h-[170px]"></div>
      <div className="flex justify-between px-2">
        <p className="font-base">음식점 / 한식</p>
        <div className="flex justify-center items-center">
          <StarIcon />
        </div>
      </div>
    </div>
  );
};
const keywordArray = [
  '음식점',
  '한식',
  '배너있음',
  '위치있음',
  '전화번호',
  '가게전경',
  '가게내부',
  '조리과정',
  '식재료',
  '요리',
  '검색창',
];
const SelectTemplate = () => {
  const router = useRouter();
  const handleRouting = () => {
    router.push('/template/keyword');
  };

  return (
    <div>
      <div className="p-4 bg-gray-100">
        <p className="font-bold text-base">템플릿 선택</p>
        <h1 className="text-2xl font-bold">
          우리 가게/브랜드 홍보에 잘 어울리는 템플릿을 선택해주세요
        </h1>
      </div>
      <div className="flex flex-col p-5">
        <div className="flex">
          <div className="flex" style={{ flex: '2 1 0%' }}>
            <Tabs.Root defaultValue="ai" style={{ width: '100%' }}>
              <Tabs.List>
                <Tabs.Trigger value="all">전체</Tabs.Trigger>
                <Tabs.Trigger value="ai">AI 추천</Tabs.Trigger>
                <Tabs.Trigger value="my">찜한 템플릿</Tabs.Trigger>
              </Tabs.List>
              <Box px="4" pt="3" pb="2">
                <Tabs.Content value="all"></Tabs.Content>
                <Tabs.Content value="ai">
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    <Template />
                    <Template />
                    <Template />
                    <Template />
                    <Template />
                    <Template />
                    <Template />
                    <Template />
                  </div>
                </Tabs.Content>
                <Tabs.Content value="my"></Tabs.Content>
              </Box>
            </Tabs.Root>
          </div>
          <div className="flex-1">
            <div className="flex flex-col  p-4 border-left">
              <div>
                <h3 className="text-2xl font-bold">[1111] 음식점 한식</h3>
              </div>
              <p>장면 5개 ∙ 이미지 5개 ∙ 영상 0개 ∙ 텍스트 5개 ∙ 로고 0개</p>
              <div className="w-full h-[300px] p-4 border"></div>
              <div className="w-full contents">
                <p className="font-bold">텍스트</p>
                <div className="flex flex-wrap gap-4">
                  {keywordArray?.map((keyword, index) => (
                    <Button
                      key={keyword}
                      variant="soft"
                      radius="full"
                      style={{ maxWidth: '100px' }}
                    >
                      {keyword}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <Button onClick={handleRouting}>이 템플릿으로 만들기</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectTemplate;
