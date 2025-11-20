'use client';
import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline';
};

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const base =
    'button ' +
    (variant === 'primary'
      ? 'button--primary'
      : variant === 'secondary'
      ? 'button--secondary'
      : 'button--outline');
  return <button className={`${base} ${className}`.trim()} {...props} />;
}

