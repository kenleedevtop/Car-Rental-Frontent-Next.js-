import React, { ReactNode } from 'react';

export type TTextFieldType = 'text' | 'password';

export type TTextFieldProps = React.HTMLAttributes<HTMLDivElement> & {
  label?: string;
  required?: boolean;
  value?: string;
  onValue?: (v: string) => void;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  type?: TTextFieldType;
};
