import Skeleton from 'react-loading-skeleton';

const TemplateMakeLoading = () => (
  <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
    {Array.from({ length: 10 }, (_, index) => (
      <div className="flex flex-col" key={`make-loading-skeleton-${index}`}>
        <Skeleton height={200} width="100%" className="border rounded" />
        <Skeleton width={100} />
      </div>
    ))}
  </div>
);
export default TemplateMakeLoading;
