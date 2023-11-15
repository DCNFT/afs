'use client';

import TemplateCard from './components/TemplateCard';
import { templateList } from '@/api/internal/creatomate/http';
import { Button } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import PreviewModal from '@/components/modal/PreviewModal';
import ModalRoot from '@/components/modal/baseModal/ModalRoot';
import { useModalStore } from '@/store/useModalStore';
import Modal from '@/components/modal/baseModal/Modal';
import DummyModal from '@/components/modal/DummyModal';
import useModal from '@/hooks/useModal';
import { useRouter } from 'next/navigation';
import { PURPOSE, SELECT, templateRoutes } from '@/constants/routes';

const formId =
  process.env.NODE_ENV === 'production'
    ? '11e5795f-c56c-4615-bc47-530c670529a0' //'39fbbe0f-0dce-4bcf-abe0-0dc44c178c81'
    : '11e5795f-c56c-4615-bc47-530c670529a0';

const Template = () => {
  const { data, error, isLoading } = useQuery(['templateList'], templateList);
  //   console.log(data);
  // const { onOpen, getOpenModalsList } = useModal('PreviewModal');
  // const setIsOpen = useModalStore((state) => state.setIsOpen);
  const dummyModal = useModal();
  const handleModal = () => {
    dummyModal.onOpen();
  };
  const router = useRouter();
  const handleMove = () => {
    router.push(templateRoutes[PURPOSE].routePath);
  };

  return (
    <div className="flex flex-col p-5">
      <div className="mb-4 border p-5 rounded">
        <p className="text-xl font-bold">새로운 광고 영상 만들기</p>
        <div className="w-full flex">
          <div className="border w-[250px] h-[150px]">
            <div
              className="flex justify-center items-center h-full cursor-pointer"
              onClick={handleMove}
            >
              <div className="flex-col">
                <div className="justify-center items-center">
                  <div
                    className="rounded-full w-[50px] bg-slate-950 h-[50px]"
                    // onClick={handleModal}
                  ></div>
                </div>
                <DummyModal {...dummyModal} />
                <p className="font-bold">ai 도움받아 영상만들기</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4 border p-5 rounded">
        <p className="text-xl font-bold">최근에 만든 광고영상</p>
        <div
          className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:g rid-cols-8 gap-4 "
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
export default Template;
