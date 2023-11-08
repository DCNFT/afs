import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<any>; // Adjust this type according to your form data type
  name: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  register,
  name,
}) => {
  return (
    <label>
      {label}:
      <input type={type} placeholder={placeholder} {...register(name)} />
    </label>
  );
};

export default InputField;
