import { Button } from '@radix-ui/themes';

function AdStyle() {
  return (
    <div className="flex flex-col mb-4">
      <p className="text-base font-bold">
        선호하는 광고 분위기를 선택해주세요 (필수)
      </p>
      <div className="flex gap-3">
        <Button variant="outline" radius="full">
          가게 알리기
        </Button>
        <Button variant="outline" radius="full">
          상품 소개
        </Button>
        <Button variant="outline" radius="full">
          할인 이벤트
        </Button>
        <Button variant="outline" radius="full">
          정보 전달
        </Button>
        <Button variant="outline" radius="full">
          정보 전달
        </Button>
      </div>
    </div>
  );
}

export default AdStyle;
