import React, { useState, ChangeEvent, DragEvent } from 'react';

const ImageUploader: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      const reader = new FileReader();
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

  return (
    <div
      className="w-64 h-64 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      {selectedImage ? (
        <img
          src={selectedImage}
          alt="Uploaded"
          className="w-full h-full object-cover"
        />
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

export default ImageUploader;
