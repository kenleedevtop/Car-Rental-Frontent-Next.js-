import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const InputTypeAreaMain = styled.textarea<{ theme?: Theme }>`
  ${({ theme }) => `
    background: none;
    border: none;
    outline: none;
    padding: ${theme.spacing(2.5)} 0;
    flex: 1 auto;
    resize: none;
  `}
`;
