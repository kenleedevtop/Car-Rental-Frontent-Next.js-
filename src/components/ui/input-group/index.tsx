import React from 'react';
import {
  InputGroupMain,
  InputGroupLabel,
  InputGroupElements,
  InputGroupElement,
} from 'components/ui/input-group/styles';
import { TInputGroupProps } from 'components/ui/input-group/types';

const InputGroup = ({
  label,
  required,
  helper,
  elements,
  inputRatio,
  ...props
}: TInputGroupProps) => (
  <InputGroupMain {...props}>
    {!!label && (
      <InputGroupLabel required={required} helper={helper}>
        {label}
      </InputGroupLabel>
    )}
    <InputGroupElements inputRatio={inputRatio}>
      {elements.map((x) => (
        <InputGroupElement {...x} />
      ))}
    </InputGroupElements>
  </InputGroupMain>
);

export default InputGroup;
