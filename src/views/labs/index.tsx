// import { Playhead } from './components/timeLine/PlayHead';
// import { Stage } from './components/stage/Stage';
// import TimeLine from './components/timeLine/TimeLine';

import { Button } from '@radix-ui/themes';
import ImageUploader from './components/ImageUploader';
import ImageGallery from './components/ImageGallery';

const Labs = () => {
  return (
    <div className=" max-w-full h-full max-h-full w-[1440px] flex gap-5xl px-md py-xl desktop:px-[128px] tablet:px-[64px] mobile:px-md">
      <ImageGallery />
      <div className="relative flex w-full items-center justify-center tablet:h-auto">
        <ImageUploader />
      </div>
    </div>
  );
};

export default Labs;
