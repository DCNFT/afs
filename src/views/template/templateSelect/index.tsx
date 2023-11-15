import { useTemplateList } from '@/api/internal/abs/query';
import TemplateBanner from '../components/TemplateBanner';
import TemplateDetail from './TemplateDetail';
import TemplateTab from './TemplateTab';

const TemplateSelect = () => {
  return (
    <div>
      <TemplateBanner
        title="템플릿 선택"
        description="우리 가게/브랜드 홍보에 잘 어울리는 템플릿을 선택해주세요"
      />
      <div className="flex flex-col p-5">
        <div className="flex">
          <TemplateTab />
          <TemplateDetail />
        </div>
      </div>
    </div>
  );
};

export default TemplateSelect;
