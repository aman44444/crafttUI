import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      <input
        className="mt-1 p-2 border rounded-md w-full ***REMOVED***focus:border-blue-300"
        ***REMOVED***
      />
    </div>
  );
};

export default Input;