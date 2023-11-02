'use client';

import useRouting from '@/hooks/useRouting';
import { Button, Card, Inset, Strong, Text } from '@radix-ui/themes';

const TemplateCard = () => {
  const handleRouting = useRouting({ path: '/template/keyword' });
  return (
    <Card size="2" style={{ maxWidth: 240 }}>
      <Inset clip="padding-box" side="top" pb="current">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            alt="Bold typography"
            style={{
              display: 'block',
              objectFit: 'cover',
              width: '100%',
              height: 140,
              backgroundColor: 'var(--gray-5)',
            }}
          />
          <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex gap-4">
              <Button onClick={handleRouting}>편집하기</Button>
              {/* <Button>미리보기</Button> */}
            </div>
          </div>
        </div>
      </Inset>
      <Text as="p" size="3">
        <Strong>Typography</Strong> is the art and technique of arranging type
        to make written language legible, readable and appealing when displayed.
      </Text>
    </Card>
  );
};
const template = () => {
  return (
    <div className="flex flex-col p-5">
      <div className="mb-4">
        <p className="text-xl font-bold">새로운 광고 영상 만들기</p>
        <div className="w-full flex">
          <div className="border w-[250px] h-[150px]">
            <div className="flex justify-center items-center  h-full">
              <div className="flex-col">
                <div className="rounded-full w-[50px] bg-slate-950 h-[50px]"></div>
                <p>ai 도움받아 영상만들기</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-xl font-bold">최근에 만든 광고영상</p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
        </div>
      </div>
    </div>
  );
};
export default template;
