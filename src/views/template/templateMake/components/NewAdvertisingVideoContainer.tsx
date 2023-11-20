import { PURPOSE, templateRoutes } from '@/constants/routes';
import useRouting from '@/hooks/useRouting';

const NewAdvertisingVideoContainer = () => {
  const handleRouting = useRouting({ path: templateRoutes[PURPOSE].routePath });

  return (
    <div className="mb-4 border p-5 rounded">
      <p className="text-xl font-bold">새로운 광고 영상 만들기</p>
      <div className="w-full flex">
        <div className="border w-[250px] h-[150px]">
          <div
            className="flex justify-center items-center h-full cursor-pointer"
            onClick={handleRouting}
          >
            <div className="flex-col">
              <div className="justify-center items-center">
                <div className="rounded-full w-[50px] h-[50px] border border-gray-300"></div>
              </div>
              <p className="font-bold">ai 도움받아 영상만들기</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAdvertisingVideoContainer;
