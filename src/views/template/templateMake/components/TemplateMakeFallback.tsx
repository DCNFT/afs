import { TemplateAiRecommendFallbackProps } from '../../templateSelect/TemplateTab';

export const TemplateMakeFallback: React.FC<
  TemplateAiRecommendFallbackProps
> = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <p> 에러: {error.message} </p>
      <button onClick={() => resetErrorBoundary()}> 다시 시도 </button>
    </div>
  );
};

export default TemplateMakeFallback;
