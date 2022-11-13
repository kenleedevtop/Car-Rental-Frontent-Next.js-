import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const InputTypeSelectMain = styled.input<{ theme?: Theme }>`
  ${({ theme }) => `
    background: none;
    border: none;
    outline: none;
    padding: ${theme.spacing(2.5)};
  `}
`;
