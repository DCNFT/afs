import CommonInput from '@/components/Input';
import { useState } from 'react';
import { FormValues } from './TemplateKeywordInputPage';
import { UseFormHandleSubmit, UseFormSetValue } from 'react-hook-form';

type KeywordInputWrapperProps = {
  id: keyof FormValues;
  name: string;
  label: string;
  placeholder: string;
  maxLength: number;
  setValue: UseFormSetValue<FormValues>;
  handleSubmit: UseFormHandleSubmit<FormValues, undefined>;
  validationRules: {
    required?: boolean;
    maxLength?: number;
  };
};

function KeywordInputWrapper({
  id,
  name,
  label,
  placeholder,
  maxLength,
  setValue,
  handleSubmit,
  validationRules,
}: KeywordInputWrapperProps) {
  const [input, setInput] = useState('');

  const handleMainProductChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        register={handleSubmit}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={handleMainProductChange}
        value={input}
        validationRules={validationRules}
      />
    </div>
  );
}
export default KeywordInputWrapper;
