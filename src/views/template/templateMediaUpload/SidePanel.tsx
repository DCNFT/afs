type InformationBoxProps = {
  title: string;
  description: string;
};
const InformationBox = ({ title, description }: InformationBoxProps) => {
  return (
    <div>
      <div className="flex">
        <div className="flex justify-center items-center gap-1">
          <Icon name="InfoCircledIcon" size="12px" />
          <p className="font-bold">{title}</p>
        </div>
      </div>
      <div className="px-[21px]">
        <p>{description}</p>
      </div>
    </div>
  );
};

const SidePanel = () => {
  return (
    <div className="flex-1 ">
      {/* <PreviewPanel />
    <div className="flex">
      <p>장면 1</p>
      <p>가게외부</p>
      <p>1장</p>
    </div>
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
    <PreviewModal {...playerModal} />
    <Button onClick={handleMediaModal}>15초 영상 만들기</Button> */}
    </div>
  );
};

export default SidePanel;
