import InformationBox from './InformationBox';

const InformationContainer = () => {
  return (
    <div className="flex-col my-4 bg-gray-100 p-4 rounded-sm gap-2">
      <InformationBox
        title="‘미디어 설명’ 이란?"
        description="추천 미디어와 다른 주제의 미디어를 등록하는 경우, ‘미디어
      설명’을 변경해주세요 AI가 미디어에 맞는 광고 문구를 추천하기
      위해 필요해요"
      />
      <InformationBox
        title="‘미디어 타입’ 이란?"
        description="이미지의 경우 자연스러운 광고 연출을 위해 업로드 된 이미지를
  영상처럼 자동 변환해요 일반 이미지로 보여주고 싶으면
  ‘이미지’로 변경해주세요"
      />
    </div>
  );
};

export default InformationContainer;
