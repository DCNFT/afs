'use client';

import TemplateBanner from '../components/TemplateBanner';
import TemplateDetail from './TemplateDetail';
import TemplateTab, { TemplateAiRecommendFallbackProps } from './TemplateTab';
import Skeleton from 'react-loading-skeleton';
import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';

const TemplateDetailLoading = () => {
  return (
    <div className="flex flex-col">
      <Skeleton height={200} width="100%" className="border rounded" />
      <Skeleton width={100} />
    </div>
  );
};

export const TemplateDetailFallback: React.FC<
  TemplateAiRecommendFallbackProps
> = ({ error, resetErrorBoundary }) => (
  <div>
    <p> 에러: {error.message} </p>
    <button onClick={() => resetErrorBoundary()}> 다시 시도 </button>
  </div>
);
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
          <ErrorBoundary FallbackComponent={TemplateDetailFallback}>
            <Suspense fallback={<TemplateDetailLoading />}>
              <TemplateDetail />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelect;
