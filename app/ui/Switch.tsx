'use client';
import React from 'react';

type SwitchProps = {
  checked: boolean;
  onChange: () => void;
  ariaLabel?: string;
};

export function Switch({ checked, onChange, ariaLabel }: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      className={`switch ${checked ? 'switch--on' : ''}`}
      onClick={onChange}
    >
      <span className="switch__thumb" />
    </button>
  );
}

