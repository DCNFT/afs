import TemplateCard from '@/views/template/components/TemplateCard';
import { useTemplateList } from '@/api/internal/abs/query';

const RecentMakeTemplateList = () => {
  const { data } = useTemplateList();

  return (
    <div className="mb-4 border p-5 rounded">
      <p className="text-xl font-bold">최근에 만든 광고영상</p>
      <div
        className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:g rid-cols-8 gap-4 "
        id="destination"
      >
        {data?.data?.list?.map((templateInfo: any) => {
          return (
            <TemplateCard key={templateInfo?.id} templateInfo={templateInfo} />
          );
        })}
      </div>
    </div>
  );
};
export default RecentMakeTemplateList;
