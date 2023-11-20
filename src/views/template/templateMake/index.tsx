'use client';

import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import NewAdvertisingVideoContainer from '@/views/template/templateMake/components/NewAdvertisingVideoContainer';
import RecentMakeTemplateList from '@/views/template/templateMake/components/RecentTemplateList';
import TemplateMakeLoading from '@/views/template/templateMake/components/TemplateMakeLoading';
import TemplateMakeFallback from '@/views/template/templateMake/components/TemplateMakeFallback';

const TemplateMake = () => {
  return (
    <div className="flex flex-col p-5">
      <NewAdvertisingVideoContainer />
      <ErrorBoundary FallbackComponent={TemplateMakeFallback}>
        <Suspense fallback={<TemplateMakeLoading />}>
          <RecentMakeTemplateList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
export default TemplateMake;
