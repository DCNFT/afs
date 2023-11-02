import React, { ChangeEvent, DragEvent, useState } from 'react';
import useImageStore from '@/store/useImageStore';

type DragDropContainerProps = {
  handleDrop: (e: any) => void;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
const DragDropContainer = ({
  handleDrop,
  handleFileChange,
}: DragDropContainerProps) => {
  const selectedImage = useImageStore((state) => state.selectedImage);
  return (
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
  );
};
export default DragDropContainer;
