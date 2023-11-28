import { Button } from '@radix-ui/themes';
import { useState } from 'react';

const AdPurpose = () => {
  const [selectedPurpose, setSelectedPurpose] = useState<string | null>(null);

  const handleButtonSelect = (purpose: string) => {
    setSelectedPurpose(purpose);
    // 선택된 버튼에 대한 추가 동작을 여기에 추가할 수 있습니다.
  };

  return (
    <div className="flex flex-col mb-2">
      <p className="text-base font-bold">광고의 목적을 알려주세요 (필수)</p>
      <div className="flex gap-4">
        {/* 각 버튼에 선택된 상태에 따라 클래스를 동적으로 지정하여 스타일을 적용합니다. */}
        <Button
          className={`${
            selectedPurpose === 'announce' && 'bg-violet-700 text-white'
          } p-2 rounded`}
          onClick={() => handleButtonSelect('announce')}
        >
          상점 소식 공지
        </Button>
        <Button
          className={`${
            selectedPurpose === 'product' && 'bg-violet-700 text-white'
          } p-2 rounded`}
          onClick={() => handleButtonSelect('product')}
        >
          제품 소개
        </Button>
        <Button
          className={`${
            selectedPurpose === 'discount' && 'bg-violet-700 text-white'
          } p-2 rounded`}
          onClick={() => handleButtonSelect('discount')}
        >
          할인 이벤트
        </Button>

        <Button
          className={`${
            selectedPurpose === 'information' && 'bg-violet-700 text-white'
          } p-2 rounded`}
          onClick={() => handleButtonSelect('information')}
        >
          정보 전송
        </Button>
      </div>
    </div>
  );
};

export default AdPurpose;
