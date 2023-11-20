import Skeleton from 'react-loading-skeleton';

const TemplateMakeLoading = () => (
  <div className="flex flex-col">
    <Skeleton height={200} width="100%" className="border rounded" />
    <Skeleton width={100} />
  </div>
);
export default TemplateMakeLoading;
