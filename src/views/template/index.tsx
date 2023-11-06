'use client';

import TemplateCard from './components/TemplateCard';

const template = () => {
  return (
    <div className="flex flex-col p-5">
      <div className="mb-4">
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
      <div className="mb-4">
        <p className="text-xl font-bold">최근에 만든 광고영상</p>
        <div
          className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 "
          id="destination"
        >
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
        </div>
      </div>
    </div>
  );
};
export default template;
