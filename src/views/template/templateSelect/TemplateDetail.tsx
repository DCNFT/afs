import { Box, Button, Tabs } from '@radix-ui/themes';
import NextButton from '../templateKeywordInputPage/NextButton';
import { keywordArray } from '../data/default';

const TemplateDetail = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-col p-4 border-left">
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
        <NextButton path="/template/keyword" name="이 템플릿으로 만들기" />
      </div>
    </div>
  );
};

export default TemplateDetail;
