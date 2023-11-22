import React, { ChangeEvent, DragEvent, useState } from 'react';
import { Button } from '@radix-ui/themes';
import useImageStore from '@/store/useImageStore';
import useRetouch from '../hooks/useRetouch';
import useUpscale from '../hooks/useUpscale';
import useSnackBar from '@/hooks/useToast';
import DragDropContainer from './DragDropContainer';
import useAnimation from '../hooks/useAnimation';

const ImageUploader = () => {
  const selectedImage = useImageStore((state) => state.selectedImage);
  const setSelectedImage = useImageStore((state) => state.setSelectedImage);

  const [imageFile, setImageFile] = useState<any>({
    file: null,
    imageWidth: 0,
    imageHeight: 0,
  });
  const {
    retouchData,
    isLoadingRetouch,
    handleIntegrationRequest,
    setRetouchData,
    setIsLoadingRetouch,
  } = useRetouch({ imageFile });

  const {
    isLoadingUpscale,
    upscaleData,
    handleUpscaleRequest,
    setUpscaleData,
    setIsLoadingUpscale,
  } = useUpscale({
    imageFile,
  });

  const {
    isLoadingAnimation,
    animationData,
    handleAnimationRequest,
    setAnimationData,
    setIsLoadingAnimation,
  } = useAnimation({
    imageFile,
  });

  const { enqueueErrorBar } = useSnackBar();
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    console.log('file = ', file);

    if (file) {
      const loadImage = (file: File) => {
        const reader = new FileReader();
        const image = new Image();
        if (file.size > 10 * 1024 * 1024) {
          enqueueErrorBar('파일 사이즈가 너무 큽니다.');
          return;
        }
        image.onload = () => {
          const originalWidth = image.width;
          const originalHeight = image.height;
          console.log('Original Width: ' + originalWidth);
          console.log('Original Height: ' + originalHeight);

          setImageFile((prev: any) => ({
            ...prev,
            imageWidth: originalWidth,
            imageHeight: originalHeight,
          }));
        };

        image.src = URL.createObjectURL(file);
        reader.onload = (e) => {
          setImageFile((prev: any) => ({ ...prev, file: file }));
          if (e.target) setSelectedImage(e.target.result as string);
        };

        reader.readAsDataURL(file);
      };

      loadImage(file);
    }
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) setSelectedImage(e.target.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    setSelectedImage('');
    setIsLoadingRetouch(false);
    setRetouchData(null);
    setIsLoadingUpscale(false);
    setUpscaleData(null);
    setAnimationData(null);
    setIsLoadingAnimation(false);
  };

  const test = () => {
    console.log('imageFile', imageFile);
  };

  const openNewWindow = () => {
    // Open a link in a new window or tab
    const values = Object.values(upscaleData) as string[];
    if (values.length !== 0) window.open(values[0], '_blank');
  };

  const openNewWindowRetouch = () => {
    // Open a link in a new window or tab
    console.log('retouchData?.file_url= ', retouchData?.file_url);
    if (retouchData?.file_url) window.open(retouchData?.file_url, '_blank');
  };

  const openNewWindowAnimation = () => {
    // Open a link in a new window or tab
    console.log('retouchData?.file_url= ', animationData?.file_url);
    if (animationData?.file_url) window.open(animationData?.file_url, '_blank');
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <DragDropContainer
        handleDrop={handleDrop}
        handleFileChange={handleFileChange}
      />
      <div className="flex gap-3 mt-4">
        <Button onClick={handleReset}>재선택</Button>
        <Button onClick={handleIntegrationRequest} disabled={isLoadingRetouch}>
          {isLoadingRetouch ? '통합버전 진행중' : '통합버전'}
        </Button>
        <Button onClick={handleUpscaleRequest} disabled={isLoadingUpscale}>
          {isLoadingUpscale ? '이미지 업스케일링 중' : '이미지 업 스케일링'}
        </Button>
        <Button onClick={handleAnimationRequest} disabled={isLoadingAnimation}>
          {isLoadingAnimation ? '이미지 애니메이션 중' : '이미지 애니메이션'}
        </Button>
      </div>

      <div className="max-h-[600px] overflow-auto mt-4">
        {retouchData && (
          <div className="mt-4 border p-4 rounded">
            <p className=" text-lg font-bold text-center">AI 통합 버전</p>
            <div className="flex justify-center max-w-[640px] max-h-[360px]">
              <video width="640" height="360" controls>
                <source src={retouchData?.file_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <div className="flex flex-col justify-center gap-4">
                <Button onClick={openNewWindowRetouch}>
                  통합 버전 다운로드
                </Button>
              </div>
            </div>
          </div>
        )}
        {upscaleData && (
          <div className="mt-4 border p-4 rounded">
            <p className=" text-lg font-bold text-center"> 업스케일링 버전</p>
            <div className="flex justify-center max-w-[640px] max-h-[360px]">
              {upscaleData &&
                Object?.keys(upscaleData)?.map((key) => {
                  return (
                    <img
                      key={`image-${key}`}
                      src={upscaleData[key]}
                      alt={key}
                    />
                  );
                })}
            </div>
            <div className="flex flex-col justify-center gap-4">
              {upscaleData && (
                <Button onClick={openNewWindow}>
                  업 스케일링 버전 새창에서 보기
                </Button>
              )}
            </div>
          </div>
        )}

        {animationData && (
          <div className="mt-4 border p-4 rounded">
            <p className=" text-lg font-bold text-center">애니메이션 버전</p>
            <div className="flex justify-center max-w-[640px] max-h-[360px]">
              <video width="640" height="360" controls>
                <source src={animationData?.file_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <div className="flex flex-col justify-center gap-4">
                <Button onClick={openNewWindowAnimation}>
                  애니메이션 버전 다운로드
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
