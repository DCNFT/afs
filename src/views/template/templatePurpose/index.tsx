'use client';

import { SELECT, templateRoutes } from '@/constants/routes';
import TemplateBanner from '../components/TemplateBanner';
import AdPurpose from '../templateKeywordInputPage/AdPurpose';
import AdStyle from '../templateKeywordInputPage/AdStyle';
import BusinessCategory from '../templateKeywordInputPage/BusinessCategory';
import NextButton from '../templateKeywordInputPage/NextButton';

const TemplatePurpose = () => {
  return (
    <>
      <TemplateBanner
        title={templateRoutes[SELECT].title}
        description={templateRoutes[SELECT].description}
      />
      <div className="flex flex-col p-5">
        <AdPurpose />
        <BusinessCategory />
        <AdStyle />
        <NextButton path={templateRoutes[SELECT].routePath} />
      </div>
    </>
  );
};

export default TemplatePurpose;
