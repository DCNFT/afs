import BusinessCategory from './BusinessCategory';
import MainProduct from './MainProduct';
import PromotionDetails from './PromotionDetails';
import Keywords from './Keywords';
import BrandName from './BrandName';
import AdStyle from './AdStyle';
import AdPurpose from './AdPurpose';
import NextButton from './NextButton';
import TemplateBanner from '../components/TemplateBanner';

const TemplateKeywordInputPage = () => {
  return (
    <div>
      <TemplateBanner
        title="정보입력"
        description="AI가 최적의 광고 구성을 하기 위해 참고할 정보를 알려주세요"
      />
      <div className="flex- flex-col p-5">
        <AdPurpose />
        <BusinessCategory />
        <BrandName />
        <MainProduct />
        <PromotionDetails />
        <Keywords />
        <AdStyle />
        <NextButton path={'/template/upload'} />
      </div>
    </div>
  );
};

export default TemplateKeywordInputPage;
