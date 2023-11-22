import { Composition } from '@/api/internal/abs/types';
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
export default CountMediaInfoContainer;
