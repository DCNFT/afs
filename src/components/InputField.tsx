import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { DevTool } from '@hookform/devtools';

const MAX_STRING = 20;

type FormValues = {
  content: string;
  brand: string;
};

const InputField: React.FC = () => {
  const { register, handleSubmit, setValue, watch, control } =
    useForm<FormValues>();

  const [charCount, setCharCount] = useState(0);

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const content = watch('content');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // if (charCount > MAX_STRING) return;
    setValue('content', e.target.value);
    setCharCount(e.target.value.length);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>상호 또는 브랜드 이름을 알려주세요(필수)</label>
          <input
            id="content"
            {...register('content', {
              required: true,
            })}
            placeholder="내용을 입력하세요..."
            // onChange={handleInputChange}
            className="w-full py-1 pl-4 pr-4 border-grey-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <div className="flex justify-end mt-2 text-sm text-gray-500">
            {charCount} / {MAX_STRING}
          </div>
        </div>
        <div>
          <label> 브랜드 이름을 알려주세요(필수)</label>
          <input
            id="brand"
            {...register('brand', {
              required: true,
            })}
            placeholder="내용을 입력하세요..."
            // onChange={handleInputChange}
            className="w-full py-1 pl-4 pr-4 border-grey-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <div className="flex justify-end mt-2 text-sm text-gray-500">
            {charCount} / {MAX_STRING}
          </div>
        </div>
        <button>Submit</button>
      </form>

      <DevTool control={control} />
    </>
  );
};

export default InputField;
