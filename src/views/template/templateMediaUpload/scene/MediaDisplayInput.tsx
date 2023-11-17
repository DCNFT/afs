'use client';

import { MediaElement } from '@/api/internal/abs/types';
import { TextField } from '@radix-ui/themes';
import { useState } from 'react';

type MediaDisplayProps = {
  mediaItem: MediaElement;
};

const MediaDisplayInput = ({ mediaItem }: MediaDisplayProps) => {
  const [description, setDescription] = useState(mediaItem?.description);

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDescription(event.target.value);
  };

  return (
    <div className="flex gap-4 px-4">
      <div className="flex justify-center items-center">
        <span className="text-sm">미디어 설명</span>
      </div>
      <div>
        <TextField.Input
          onChange={handleDescriptionChange}
          radius="none"
          placeholder="Search the docs…"
          value={description as string}
        />
      </div>
    </div>
  );
};

export default MediaDisplayInput;
