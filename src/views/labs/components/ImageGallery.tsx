'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchImages } from '@/api/external/unsplash/http';
import { Image } from '@/api/external/unsplash/types';
import { throttle } from 'lodash';
import MasonryImage from './MasonryImage';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { Button } from '@radix-ui/themes';
import { useFetchUnsplashRandomImages } from '@/api/external/unsplash/query';

const ImageGallery = () => {
  const { data: images, error, isLoading } = useFetchUnsplashRandomImages();
  const elementRef = useRef(null);
  const intersected = useIntersectionObserver(elementRef);

  return (
    <div className="masonry-container h-screen overflow-auto">
      {images?.map((item: Image, index: number) => {
        return <MasonryImage key={item?.id} item={item} />;
      })}
      <div className="masonry-item" ref={elementRef} />
      {/* <Button onClick={() => resizeWindow()}>테스트 </Button> */}
    </div>
  );
};

export default ImageGallery;
