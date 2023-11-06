import { StarIcon } from '@radix-ui/react-icons';

const Template = () => {
  return (
    <div className="w-full h-[200px] border rounded">
      <div className="h-[170px]"></div>
      <div className="flex justify-between px-2">
        <p className="font-base">음식점 / 한식</p>
        <div className="flex justify-center items-center">
          <StarIcon />
        </div>
      </div>
    </div>
  );
};
export default Template;
