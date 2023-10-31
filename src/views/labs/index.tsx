'use client';

import ImageUploader from './components/ImageUploader';
import ImageGallery from './components/ImageGallery';
import { useEffect, useState } from 'react';

const Labs = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className=" max-w-full h-full max-h-full w-[1440px] flex gap-5xl px-md py-xl desktop:px-[128px] tablet:px-[64px] mobile:px-md">
      {isClient ? <ImageGallery /> : <div className="h-screen w-[428px]"></div>}
      <div className="relative flex w-full items-center justify-center tablet:h-auto">
        <ImageUploader />
      </div>
    </div>
  );
};

export default Labs;
