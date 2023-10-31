import useImageStore from '@/store/useImageStore';
import { Button } from '@radix-ui/themes';
import React, { ChangeEvent, DragEvent } from 'react';

const ImageUploader: React.FC = () => {
  const selectedImage = useImageStore((state) => state.selectedImage);
  const setSelectedImage = useImageStore((state) => state.setSelectedImage);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    console.log('file = ', file);
    if (file) {
      const reader = new FileReader();
      const image = new Image();

      image.onload = () => {
        const originalWidth = image.width;
        const originalHeight = image.height;
        console.log('Original Width: ' + originalWidth);
        console.log('Original Height: ' + originalHeight);
      };

      image.src = URL.createObjectURL(file);
      reader.onload = (e) => {
        setSelectedImage(e.target.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    setSelectedImage('');
  };

  return (
    <div className="flex-col">
      <div
        className="w-64 h-64 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        {selectedImage ? (
          <div className="w-full h-full">
            <img
              src={selectedImage}
              alt="Uploaded"
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <>
            <p className="text-gray-400">Drag & Drop an image here</p>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              id="fileInput"
            />
            <label
              htmlFor="fileInput"
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
            >
              Select a file
            </label>
          </>
        )}
      </div>
      <Button onClick={handleReset}>재 선택</Button>
    </div>
  );
};

export default ImageUploader;
