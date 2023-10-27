import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchImages } from '@/api/unsplash';
import { Image } from '@/api/unsplash/types';
import {
  MasonryGrid,
  JustifiedGrid,
  FrameGrid,
  PackingGrid,
} from '@egjs/react-grid';

const ImageGallery = () => {
  const { data: images, error, isLoading } = useQuery(['images'], fetchImages); // Use the useImages function

  return (
    <MasonryGrid
      className="container"
      style={{ overflow: 'hidden' }}
      gap={5}
      defaultDirection={'end'}
      align={'justify'}
    >
      {images?.map((image: Image) => (
        <div key={image.id} className="my-masonry-grid_column">
          <img
            src={image.urls.small}
            alt={image.alt_description || 'Unsplash Image'}
            className="absolute w-full h-full object-cover"
          />
        </div>
      ))}
    </MasonryGrid>
  );
};

export default ImageGallery;
