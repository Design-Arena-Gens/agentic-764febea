import React from 'react';

type BadgeProps = {
  children: React.ReactNode;
  color?: 'default' | 'green' | 'amber' | 'red' | 'blue';
};

export function Badge({ children, color = 'default' }: BadgeProps) {
  return <span className={`badge badge--${color}`}>{children}</span>;
}

