import Icon from '@/components/Icon';
import TemplateBanner from '../components/TemplateBanner';
import PreviewPanel from './PreviewPanel';
import Scene from './Scene';

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
const Upload = () => {
  return (
    <>
      <TemplateBanner
        title={'템플릿 선택'}
        description={'광고 영상에 필요한 미디어 5개를 업로드해주세요'}
      />
      <div className="flex flex-col p-5">
        <div className="flex">
          <div className="flex" style={{ flex: '2 1 0%' }}>
            <div className="flex-col w-full">
              <Scene title={'[장면 1] 추천 미디어: 가게 전경, 1장'} />
              <Scene title={'[장면 2] 추천 미디어: 가게 내부, 장수: 1장'} />
              <Scene title={'[장면 3] 추천 미디어: 음식, 장수: 2장'} />
              <Scene title={'[장면 4] 추천 미디어: 식사 장면, 장수: 2장'} />
            </div>
          </div>
          <div className="flex-1 ">
            <PreviewPanel />
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
