type TemplateBannerProps = {
  title: string;
  description: string;
};

const TemplateBanner = ({ title, description }: TemplateBannerProps) => {
  return (
    <div className="p-4 bg-gray-100 absolute w-full">
      <p className="font-bold text-base">{title}</p>
      <h1 className="text-2xl font-bold">{description}</h1>
    </div>
  );
};

export default TemplateBanner;
