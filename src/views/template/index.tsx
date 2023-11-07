'use client';

import TemplateCard from './components/TemplateCard';
import { templateList } from '@/api/internal/creatomate/http';
import { useModal } from '@/hooks/useModal';
import { useQuery } from '@tanstack/react-query';

const formId =
  process.env.NODE_ENV === 'production'
    ? '11e5795f-c56c-4615-bc47-530c670529a0' //'39fbbe0f-0dce-4bcf-abe0-0dc44c178c81'
    : '11e5795f-c56c-4615-bc47-530c670529a0';

const template = () => {
  const { data, error, isLoading } = useQuery(['templateList'], templateList);
  //   console.log(data);
  const { onOpen, getOpenModalsList } = useModal('previewModal');
  return (
    <div className="flex flex-col p-5">
      <div className="mb-4 border p-5 rounded">
        <p className="text-xl font-bold">새로운 광고 영상 만들기</p>
        <div className="w-full flex">
          <div className="border w-[250px] h-[150px]">
            <div className="flex justify-center items-center  h-full">
              <div className="flex-col">
                <div className="justify-center items-center">
                  <div className="rounded-full w-[50px] bg-slate-950 h-[50px]"></div>
                </div>

                <p className="font-bold">ai 도움받아 영상만들기</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4 border p-5 rounded">
        <p className="text-xl font-bold">최근에 만든 광고영상</p>
        <div
          className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:g rid-cols-8 gap-4 "
          id="destination"
        >
          {data?.map((templateInfo: any, key: number) => {
            return (
              <TemplateCard
                key={templateInfo?.id}
                templateInfo={templateInfo}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default template;
