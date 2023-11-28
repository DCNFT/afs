import { Button } from '@radix-ui/themes';
import { useState } from 'react';

function AdStyle() {
  // 선택된 광고 톤을 관리하는 상태 변수
  const [selectedTone, setSelectedTone] = useState<string | null>(null);

  // 버튼 클릭에 대한 핸들러 함수
  const handleButtonSelect = (tone: string) => {
    setSelectedTone(tone);
    // 선택된 버튼에 대한 추가 동작을 여기에 추가할 수 있습니다.
  };

  return (
    <div className="flex flex-col mb-4">
      <p className="text-base font-bold">광고 톤을 선택해주세요 (필수)</p>
      <div className="flex gap-3">
        {/* 각 버튼에 클릭 핸들러 함수를 연결하여 상태를 업데이트 */}
        <Button
          className={`${
            selectedTone === 'announce' ? 'bg-violet-700 text-white' : ''
          }`}
          variant="outline"
          radius="full"
          onClick={() => handleButtonSelect('announce')}
        >
          상점 소식 공지
        </Button>
        <Button
          className={`${
            selectedTone === 'product' ? 'bg-violet-700 text-white' : ''
          }`}
          variant="outline"
          radius="full"
          onClick={() => handleButtonSelect('product')}
        >
          제품 소개
        </Button>
        <Button
          className={`${
            selectedTone === 'discount' ? 'bg-violet-700 text-white' : ''
          }`}
          variant="outline"
          radius="full"
          onClick={() => handleButtonSelect('discount')}
        >
          할인 이벤트
        </Button>
        <Button
          className={`${
            selectedTone === 'information' ? 'bg-violet-700 text-white' : ''
          }`}
          variant="outline"
          radius="full"
          onClick={() => handleButtonSelect('information')}
        >
          정보 전송
        </Button>
        <Button
          className={`${
            selectedTone === 'other' ? 'bg-violet-700 text-white' : ''
          }`}
          variant="outline"
          radius="full"
          onClick={() => handleButtonSelect('other')}
        >
          다른 톤
        </Button>
      </div>
    </div>
  );
}

export default AdStyle;
