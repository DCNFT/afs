import { Button } from '@radix-ui/themes';

const AdPurpose = () => {
  return (
    <div className="flex flex-col mb-2">
      <p className="text-base font-bold">광고의 목적을 알려주세요(필수)</p>
      <div className="flex gap-4">
        <Button>가게 알리기</Button>
        <Button>상품 소개</Button>
        <Button>할인 이벤트</Button>
        <Button>정보 전달</Button>
      </div>
    </div>
  );
};

export default AdPurpose;
