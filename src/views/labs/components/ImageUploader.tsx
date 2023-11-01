import React, { ChangeEvent, DragEvent, useState } from 'react';
import { Button } from '@radix-ui/themes';
import useImageStore from '@/store/useImageStore';
import { retouch, upscale } from '@/api/internal/abs/http';


const ImageUploader = () => {
  const selectedImage = useImageStore((state) => state.selectedImage);
  const setSelectedImage = useImageStore((state) => state.setSelectedImage);
  const [imageFile, setImageFile] = useState<any>({
    file: null,
    imageWidth: 0,
    imageHeight: 0,
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    console.log('file = ', file);

    if (file) {
      const loadImage = (file: File) => {
        const reader = new FileReader();
        const image = new Image();

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
  };

  const test = () => {
    console.log('imageFile', imageFile);
  };

  const [isLoadingRetouch, setIsLoadingRetouch] = useState(false);
  const [retouchData, setRetouchData] = useState<any>();
  const handleIntegrationRequest = async () => {
    if (!imageFile?.file) return;
    try {
      setIsLoadingRetouch(true);
      const data = new FormData();
      data.append('if_id', 'IF-1210-001');
      data.append('version', '1.0');
      data.append('mcode', '1200');
      data.append('scode', '1210');
      data.append('image_file', imageFile.file);
      data.append('target_width', imageFile.imageWidth);
      data.append('target_height', imageFile.imageHeight);
      data.append('has_scale', 'true');
      data.append('has_animation', 'true');
      const response = await retouch({
        data,
      });

      setIsLoadingRetouch(false);
      console.log('response', response);
      setRetouchData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const [isLoadingUpscale, setIsLoadingUpscale] = useState(false);
  const [upscaleData, setUpscaleData] = useState<any>();
  const handleUpscaleRequest = async () => {
    if (!imageFile?.file) return;
    try {
      setIsLoadingUpscale(true);
      const data = new FormData();
      data.append('if_id', 'IF-1210-002');
      data.append('version', '1.0');
      data.append('mcode', '1200');
      data.append('scode', '1210');
      data.append('image_file', imageFile.file);
      data.append('target_width', imageFile.imageWidth);
      data.append('target_height', imageFile.imageHeight);

      // const response = await axios.post(
      //   `${SERVER_URL}/abs/v1/image/retouch`,
      //   data,
      //   {
      //     headers: {
      //       'Content-Type': 'multipart/form-data',
      //     },
      //   },
      // );
      const response = await upscale({
        data,
      });

      setIsLoadingUpscale(false);
      console.log('response', response.data);
      setUpscaleData(response?.data?.arrSignedUrl);
    } catch (e) {
      console.log(e);
    }
  };

  // const handleAnimationRequest = async () => {
  //   try {
  //     const data = new FormData();
  //     data.append('if_id', 'IF-1210-003');
  //     data.append('version', '1.0');
  //     data.append('mcode', '1200');
  //     data.append('scode', '1210');
  //     data.append('image_file', imageFile.file);
  //     data.append('target_width', imageFile.imageWidth);
  //     data.append('target_height', imageFile.imageHeight);
  //     data.append('has_scale', 'true');
  //     data.append('has_animation', 'true');
  //     const response = await axios.post(
  //       `${SERVER_URL}/abs/v1/image/retouch`,
  //       data,
  //       {
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //         },
  //       },
  //     );
  //     // const response = await retouch({
  //     //   data,
  //     // });
  //     console.log('response', response);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const openNewWindow = () => {
    // Open a link in a new window or tab
    const values = Object.values(upscaleData) as string[];
    if (values.length !== 0) window.open(values[0], '_blank');
  };

  // const downloadFile = () => {
  //   const values = Object.values(upscaleData);
  //   // Create a hidden anchor element to trigger the download
  //   const link = document.createElement('a');
  //   link.href = values[0]; // Replace with the actual file URL
  //   link.download = values[0]; // Set the desired filename
  //   link.style.display = 'none';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };
  const openNewWindowRetouch = () => {
    // Open a link in a new window or tab
    console.log('retouchData?.file_url= ', retouchData?.file_url);
    if (retouchData?.file_url) window.open(retouchData?.file_url, '_blank');
  };
  return (
    <div className="flex-col">
      <a href="path-to-your-image.jpg" download="image.jpg">
        Download Image
      </a>
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
      <div className="flex gap-3 mt-4">
        <Button onClick={handleReset}>리셋</Button>
        {/* <Button onClick={test}>test</Button> */}
        <Button onClick={handleIntegrationRequest} disabled={isLoadingRetouch}>
          {isLoadingRetouch ? '이미지 AI 보정 중' : '이미지 AI 보정'}
        </Button>
        <Button onClick={handleUpscaleRequest} disabled={isLoadingUpscale}>
          {isLoadingUpscale ? '이미지 업스케일링 중' : '이미지 업 스케일링'}
        </Button>
      </div>

      <div className="mt-4 border p-4 rounded">
        <p className=" text-lg font-bold text-center"> AI 통합 버전</p>
        <div className="flex justify-center max-w-[640px] max-h-[360px]">
          {retouchData && (
            <video width="640" height="360" controls>
              <source src={retouchData?.file_url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <div>
          <div className="flex flex-col justify-center gap-4">
            {retouchData && (
              <Button onClick={openNewWindowRetouch}>통합 버전 다운로드</Button>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 border p-4 rounded">
        <p className=" text-lg font-bold text-center"> 업스케일링 버전</p>
        <div className="flex justify-center max-w-[640px] max-h-[360px]">
          {upscaleData &&
            Object?.keys(upscaleData)?.map((key) => {
              return (
                <img key={`image-${key}`} src={upscaleData[key]} alt={key} />
              );
            })}
        </div>
        <div className="flex flex-col justify-center gap-4">
          {upscaleData && (
            <Button onClick={openNewWindow}>
              업 스케일링 버전 새창에서 보기
            </Button>
          )}
          {/* <Button onClick={downloadFile}>업 스케일링 버전 다운로드</Button>
          <a
            href="https://s3.ap-northeast-2.amazonaws.com/leiapix.storage/upscale/64f038d0720ba285b9f6eb24-aiicon.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA2F6HCY2MPYDA3J3Q%2F20231101%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20231101T082239Z&X-Amz-Expires=604800&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLW5vcnRoZWFzdC0yIkYwRAIgE%2F4dcr0Pk4WdebqTIVVIrvQm%2FothsjUXCREbNW1l7UUCID3raoegQAzDKRhrcWdEP1xLxwGK%2FetUoI%2BXDF72ZlUhKpYDCBIQARoMNjk5OTYwMzEzNDk2IgxIDY46YyYXl2inQ8cq8wJjUBnRT61BQsBcAXaCABD8ro799G65aR63Qq5IpdpZ2d%2BvkP%2BxqQCFnIzto%2BFXzhYhf5m9WKxTsUe1MQOQFTmMRCQ003uuxXGV%2B8%2BQpWg7bK5VsE5Zb00Ts2MR9j3CJt3x%2FeCrVudZ5XA4lfTsHC5ajEnNGFl0zn%2F%2BMcTW5GPTmhCeZioQ%2BlM6gg8B8XgMsqfcC%2BOvZhvAel%2BJF0e3TE2svEkNCIb5uqU%2FBcAWsRQUGsU%2Bc4fxk364Es%2Fjbr0wAcqIdhMuE%2FXZ9P%2BbB6TdvLRTujiytfI2OTOAmRczPYhL4pcIkz5CQZzRrcR8qB%2FaU8OrrcdV4EqgOYNLVJpz9x%2BYA%2FISH%2FcFOamwVy0gtNbZavDXXA1i8w32gI68sfZ0L2tnP8Ni4yNpZKHZZaxX6pGE3pSzvxp%2BRNsVjaMoe04%2BLKSxjgo8UHJES5OPlLaZoZvpvNq9KqpFfqAKEx0w%2Bfhd%2FmzCJFmeGWmWPNueCUYH2219CjDPlYiqBjqeAYplTgPHJFcMjDFOE9bCOhcBZhAMhujdUFwqewINyk2BppQa7J19HEGTSsAoZa7W8nX71HWKm0slSkXkHJBhmoiplVXzV9iL%2BAXuhydaB%2Bc3V6yp7AOJ4vS5g7OCemJL%2BFSVFnE1wKfaQJ2PUPJgUezURj36XirbKJHTELsVzZDkGmoHfuULOYqKAfPwm8D2IngIvJYOqZ2jpmV4ztC7&X-Amz-Signature=01edb8c957f893e6429b0376b45e9807ce43353cc34fcdc6faf18c82350461c6&X-Amz-SignedHeaders=host"
            download={'upscaleImage.jpg'}
          >
            다운로드 이미지
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
