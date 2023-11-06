import TemplateBanner from '../components/TemplateBanner';
import Scene from './Scene';

const Upload = () => {
  return (
    <>
      <TemplateBanner
        title={'템플릿 선택'}
        description={'광고 영상에 필요한 미디어 5개를 업로드해주세요'}
      />
      <div className="flex flex-col p-5">
        <Scene title={'[장면 1] 추천 미디어: 가게 전경, 1장'} />
        <Scene title={'[장면 2] 추천 미디어: 가게 내부, 장수: 1장'} />
        <Scene title={'[장면 3] 추천 미디어: 음식, 장수: 2장'} />
        <Scene title={'[장면 4] 추천 미디어: 식사 장면, 장수: 2장'} />
      </div>
    </>
  );
};

export default Upload;
