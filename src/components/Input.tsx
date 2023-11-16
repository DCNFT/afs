// CommonInput.tsx
import React from 'react';

type CommonInputProps = {
  id: string;
  label: string;
  placeholder: string;
  name: string;
  register: any; // React Hook Form의 register 함수의 타입
  maxLength: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  validationRules: {
    required?: boolean;
    maxLength?: number;
  };
};

const CommonInput: React.FC<CommonInputProps> = ({
  id,
  label,
  placeholder,
  name,
  register,
  maxLength,
  onChange,
  value,
  validationRules,
}) => {
  return (
    <div>
      <label className="text-base font-bold">{label}</label>
      <input
        id={id}
        {...register(name, validationRules)}
        placeholder={placeholder}
        className="w-full py-1 pl-4 pr-4 border-1 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        onChange={onChange}
        value={value}
        style={{ border: '1px solid rgb(209 213 219 / 1)' }}
      />
      <div className="flex justify-end mt-2 text-sm text-gray-500">
        {value.length} / {maxLength}
      </div>
    </div>
  );
};

export default CommonInput;
