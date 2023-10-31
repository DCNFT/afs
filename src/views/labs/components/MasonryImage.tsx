import { Image } from '@/api/external/unsplash/types';
import useImageStore from '@/store/useImageStore';
import { throttle } from 'lodash';
import { useState, useEffect, useRef, useCallback } from 'react';

type MasonryImageProps = {
  item: Image;
};

const MasonryImage = ({ item }: MasonryImageProps) => {
  const setSelectedImage = useImageStore((state) => state.setSelectedImage);
  const [loading, setLoading] = useState(true);
  const masonryItemRef = useRef(null);

  const resizeWindow = useCallback(() => {
    if (masonryItemRef.current) {
      const elt = masonryItemRef.current as any;
      elt.style.gridRowEnd = `span ${Math.ceil(
        elt.querySelector('.pseudo-img')?.scrollHeight / 10 + 1,
      )}`;
    }
  }, []);
  const resizeThrottle = throttle(resizeWindow, 10);

  useEffect(() => {
    if (!loading) {
      resizeThrottle();
    }

    window.addEventListener('resize', resizeWindow);
    return () => {
      window.removeEventListener('resize', resizeWindow);
    };
  }, [loading, resizeThrottle, resizeWindow]);

  function handleImageLoaded() {
    setLoading(false);
  }

  return (
    <div
      className="masonry-item"
      onClick={() => setSelectedImage(item.urls.small)}
      ref={masonryItemRef}
    >
      <div className="pseudo-img">
        <img
          style={{ width: '100%', height: '100%' }}
          src={item.urls.small}
          alt={item.alt_description || 'Unsplash Image'}
          onLoad={handleImageLoaded}
          data-src={loading ? '/images/temp.jpg' : item.urls.small}
        />
      </div>
    </div>
  );
};

export default MasonryImage;
