'use client';

import { MediaElement } from '@/api/internal/abs/types';
import { TextField } from '@radix-ui/themes';
import { useState } from 'react';

type MediaDisplayProps = {
  mediaItem: MediaElement;
  handleDescriptionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  description: string;
};

const MediaDisplayInput = ({
  mediaItem,
  handleDescriptionChange,
  description,
}: MediaDisplayProps) => {
  return (
    <div className="flex gap-4 px-4">
      <div className="flex justify-center items-center">
        <span className="text-sm">미디어 설명</span>
      </div>
      <div>
        <TextField.Input
          onChange={handleDescriptionChange}
          radius="none"
          placeholder="미디어 설명을 입력해주세요."
          value={description}
        />
      </div>
    </div>
  );
};

export default MediaDisplayInput;
