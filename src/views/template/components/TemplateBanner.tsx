type TemplateBannerProps = {
  title: string;
  description: string;
};

const TemplateBanner = ({ title, description }: TemplateBannerProps) => {
  return (
    <div className="p-4 bg-gray-100">
      <p className="font-bold text-base">정보 입력</p>
      <h1 className="text-2xl font-bold">
        AI가 최적의 광고 구성을 하기 위해 참고할 정보를 알려주세요
      </h1>
    </div>
  );
};

export default TemplateBanner;
