import TemplateBanner from '../components/TemplateBanner';
import AdPurpose from '../templateKeywordInputPage/AdPurpose';
import AdStyle from '../templateKeywordInputPage/AdStyle';
import BusinessCategory from '../templateKeywordInputPage/BusinessCategory';
import NextButton from '../templateKeywordInputPage/NextButton';

const TemplatePurpose = () => {
  return (
    <>
      <TemplateBanner
        title={'광고 목적'}
        description={'광고의 목적과 선호하는 분위기를 알려주세요'}
      />
      <div className="flex flex-col p-5">
        <AdPurpose />
        <BusinessCategory />
        <AdStyle />
        <NextButton path={'/template/upload'} />
      </div>
    </>
  );
};

export default TemplatePurpose;
