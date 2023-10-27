import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchImages } from '@/api/unsplash';
import { Image } from '@/api/unsplash/types';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  transitionDuration: 0,
};

const imagesLoadedOptions = { background: '.my-bg-image-el' };

// <MasonryGrid
//   className="container"
//   style={{ overflow: 'hidden' }}
//   gap={5}
//   defaultDirection={'end'}
//   align={'justify'}
// >
//   {images?.map((image: Image) => (
//     <div key={image.id} className="item">
//       <img
//         src={image.urls.small}
//         alt={image.alt_description || 'Unsplash Image'}
//         className="absolute w-full h-full object-cover"
//       />
//     </div>
//   ))}
// </MasonryGrid>
const ImageGallery = () => {
  const { data: images, error, isLoading } = useQuery(['images'], fetchImages); // Use the useImages function

  return (
    <Masonry
      className={'my-gallery-class'} // default ''
      elementType={'ul'} // default 'div'
      options={masonryOptions} // default {}
      disableImagesLoaded={false} // default false
      updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
      imagesLoadedOptions={imagesLoadedOptions} // default {}
    >
      <li className="image-element-class">
        <div>
          <img src="path/to/image" />
        </div>
      </li>
      // more elements
    </Masonry>
  );
};

export default ImageGallery;
