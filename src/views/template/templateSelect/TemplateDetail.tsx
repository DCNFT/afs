import { Box, Button, Tabs } from '@radix-ui/themes';
import NextButton from '../templateKeywordInputPage/NextButton';
import { keywordArray } from '../data/default';
import { use } from 'react';
import useTemplateStore from '@/store/useTemplateStore';
import { useTemplateInfo } from '@/api/internal/abs/query';
import { Composition, MediaElement } from '@/api/internal/abs/types';
import { MediaCount, countMediaFormats } from '@/utils/countMediaFormats';

type CountMediaInfoContainer = {
  compositions: Composition[];
};
const CountMediaInfoContainer = ({ compositions }: CountMediaInfoContainer) => {
  const mediaCountResult: MediaCount = countMediaFormats(compositions);
  return (
    <p>
      장면 {mediaCountResult.composition}개 ∙ 미디어 {mediaCountResult.media}개
      ∙ 텍스트 {mediaCountResult.text}개 ∙ 로고 {mediaCountResult.logo}개
    </p>
  );
};

const TemplateDetail = () => {
  const selectedTemplate = useTemplateStore((state) => state.selectedTemplate);
  const { data } = useTemplateInfo(selectedTemplate.id);
  if (!data) return;

  return (
    <div className="flex-1">
      <div className="flex flex-col p-4 border-left">
        <div>
          <h3 className="text-2xl font-bold">{`[${selectedTemplate.id}] ${selectedTemplate.name}`}</h3>
        </div>
        <CountMediaInfoContainer
          compositions={data?.data?.info?.compositions as Composition[]}
        />
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
        <NextButton path="/template/keyword" name="이 템플릿으로 만들기" />
      </div>
    </div>
  );
};

export default TemplateDetail;
