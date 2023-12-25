import React, { FC, HTMLAttributes } from 'react';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  type: 'success' | 'warning' | 'error';
  message: string;
}

const Alert: FC<AlertProps> = ({ type, message, ...props }) => {
  const alertClasses = `alert ${type === 'success' ? 'bg-green-500' : type === 'warning' ? 'bg-yellow-500' : 'bg-red-500'} text-white`;

  return (
    <div className={alertClasses} {...props}>
      {message}
    </div>
  );
};

export default Alert;
