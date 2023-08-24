import React from 'react';

import {
  IconWithTextMain,
  IconWithTextIcon,
  IconWithTextText,
  IconWithTextTitle,
  IconWithTextP,
} from 'components/custom/icon-with-text/style';

import { TIconWithText } from 'components/custom/icon-with-text/types';

const IconWithText = ({ link, icon, title, text, ...props }: TIconWithText) => (
  <IconWithTextMain {...props}>
    {link ? (
      <a
        target="_blank"
        rel="noreferrer"
        href={link}
        style={{ cursor: 'pointer' }}
      >
        <IconWithTextIcon>{icon}</IconWithTextIcon>
      </a>
    ) : (
      <IconWithTextIcon>{icon}</IconWithTextIcon>
    )}

    <IconWithTextText>
      <IconWithTextTitle>{title}</IconWithTextTitle>
      {text.map((x) => (
        <IconWithTextP key={x}>{x}</IconWithTextP>
      ))}
    </IconWithTextText>
  </IconWithTextMain>
);

export default IconWithText;
