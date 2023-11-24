import { Box, Tabs } from '@radix-ui/themes';
import TemplateBox from './TemplateBox';
import { useTemplateList } from '@/api/internal/abs/query';
import { Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { FallbackProps } from 'react-error-boundary';
import { Template } from '@/api/internal/creatomate/types';
import Skeleton from 'react-loading-skeleton';
export interface TemplateAiRecommendFallbackProps extends FallbackProps {
  error: Error;
}

export const TemplateAiRecommendFallback: React.FC<
  TemplateAiRecommendFallbackProps
> = ({ error, resetErrorBoundary }) => (
  <div>
    <p> 에러: {error.message} </p>
    <button onClick={() => resetErrorBoundary()}> 다시 시도 </button>
  </div>
);

const TemplateAiRecommendLoading = () => (
  <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
    {Array.from({ length: 10 }, (_, index) => (
      <div
        className="flex flex-col"
        key={`ai-recommend-loading-skeleton-${index}`}
      >
        <Skeleton height={200} width="100%" className="border rounded" />
        <Skeleton width={100} />
      </div>
    ))}
  </div>
);

const TemplateAiRecommend = () => {
  const { data } = useTemplateList();
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {data?.data?.list.map((template: Template) => (
        <TemplateBox key={template.id} template={template} />
      ))}
    </div>
  );
};

const TemplateTab = () => {
  return (
    <div className="flex" style={{ flex: '2 1 0%' }}>
      <Tabs.Root defaultValue="ai" style={{ width: '100%' }}>
        <Tabs.List>
          <Tabs.Trigger value="all">전체</Tabs.Trigger>
          <Tabs.Trigger value="ai">AI 추천</Tabs.Trigger>
          <Tabs.Trigger value="my">찜한 템플릿</Tabs.Trigger>
        </Tabs.List>
        <Box px="4" pt="3" pb="2">
          <Tabs.Content value="all"></Tabs.Content>
          <Tabs.Content value="ai">
            <ErrorBoundary FallbackComponent={TemplateAiRecommendFallback}>
              <Suspense fallback={<TemplateAiRecommendLoading />}>
                <TemplateAiRecommend />
              </Suspense>
            </ErrorBoundary>
          </Tabs.Content>
          <Tabs.Content value="my"></Tabs.Content>
        </Box>
      </Tabs.Root>
    </div>
  );
};
export default TemplateTab;
