import dynamic from 'next/dynamic';
//import ImageGallery from './ImageGallery';
const ImageGallery = dynamic(() => import('./ImageGallery'), { ssr: false });

const SidePanel = () => {
  return (
    <div className="absolute flex flex-col w-[428px]">
      <ImageGallery />
    </div>
  );
};

export default SidePanel;
