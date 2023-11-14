import BusinessCategory from './BusinessCategory';
import MainProduct from './MainProduct';
import PromotionDetails from './PromotionDetails';
import Keywords from './Keywords';
import BrandName from './BrandName';
import AdStyle from './AdStyle';
import AdPurpose from './AdPurpose';
import NextButton from './NextButton';
import TemplateBanner from '../components/TemplateBanner';
import { KEYWORD, UPLOAD, templateRoutes } from '@/constants/routes';

const TemplateKeywordInputPage = () => {
  return (
    <div>
      <TemplateBanner
        title={templateRoutes[KEYWORD]?.title}
        description={templateRoutes[KEYWORD]?.description}
      />
      <div className="flex- flex-col p-5">
        <AdPurpose />
        <BusinessCategory />
        <BrandName />
        <MainProduct />
        <PromotionDetails />
        <Keywords />
        <AdStyle />
        <NextButton path={templateRoutes[UPLOAD]?.routePath} />
      </div>
    </div>
  );
};

export default TemplateKeywordInputPage;
