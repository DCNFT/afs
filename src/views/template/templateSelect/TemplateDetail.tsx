'use client';

import { Button } from '@radix-ui/themes';
import NextButton from '../templateKeywordInputPage/NextButton';
import { keywordArray } from '../data/default';
import useTemplateStore from '@/store/useTemplateStore';
import { useTemplateInfo } from '@/api/internal/abs/query';
import { Composition, MediaElement } from '@/api/internal/abs/types';
import { MediaCount, countMediaFormats } from '@/utils/countMediaFormats';
import Image from 'next/image';

type CountMediaInfoContainer = {
  compositions: Composition[];
};
const CountMediaInfoContainer = ({ compositions }: CountMediaInfoContainer) => {
  const mediaCountResult: MediaCount = countMediaFormats(compositions);
  return (
    <p>
      장면 <span className="font-bold">{mediaCountResult.composition}개</span> ∙
      미디어 <span className="font-bold">{mediaCountResult.media}개</span>∙
      텍스트
      <span className="font-bold">{mediaCountResult.text}개</span>∙ 로고
      <span className="font-bold">{mediaCountResult.logo}개</span>
    </p>
  );
};

const TemplateDetail = () => {
  const selectedTemplate = useTemplateStore((state) => state.selectedTemplate);
  const { data } = useTemplateInfo(selectedTemplate?.id);

  return (
    <div className="flex-1 min-w-[400px]">
      <div className="flex flex-col p-4 border-left">
        <div>
          <h3 className="text-2xl font-bold">{`[${selectedTemplate.id}] ${selectedTemplate.name}`}</h3>
        </div>
        <hr className="py-3" />
        <CountMediaInfoContainer
          compositions={data?.data?.info?.compositions as Composition[]}
        />
        <div className="w-full h-[300px] p-4 border relative">
          <Image
            src={`https://creatomate.com/files/previews/${selectedTemplate?.id}`}
            alt={selectedTemplate.id}
            fill
          />
        </div>
        <div className="w-full contents mt-4">
          <p className="font-bold">키워드</p>
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
        <NextButton path="/template/keyword" name="이 템플릿으로 만들기" />
      </div>
    </div>
  );
};

export default TemplateDetail;
