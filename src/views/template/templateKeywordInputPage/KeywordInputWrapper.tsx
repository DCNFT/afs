import CommonInput from '@/components/Input';
import { useState } from 'react';
import { FormValues } from './TemplateKeywordInputPage';
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';

type KeywordInputWrapperProps = {
  id: keyof FormValues;
  name: keyof FormValues;
  label: string;
  placeholder: string;
  maxLength: number;
  register: UseFormRegister<FormValues>;
  setValue: UseFormSetValue<FormValues>;
  validationRules: {
    required?: any;
    maxLength?: number;
  };
  errors: FieldErrors<FormValues>;
};

function KeywordInputWrapper({
  id,
  name,
  label,
  placeholder,
  register,
  maxLength,
  setValue,
  validationRules,
  errors,
}: KeywordInputWrapperProps) {
  const [input, setInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length <= maxLength) {
      setValue(id, inputValue);
      setInput(inputValue);
    }
  };

  return (
    <div className="flex flex-col mb-2">
      <CommonInput
        id={id}
        label={label}
        name={name}
        register={register}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={handleInputChange}
        value={input}
        validationRules={validationRules}
        errors={errors}
      />
    </div>
  );
}
export default KeywordInputWrapper;
