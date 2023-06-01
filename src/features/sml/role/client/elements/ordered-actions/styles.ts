import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Menu } from 'components/custom';

export const OrderedActionsMain = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        display: grid;
        place-items: center;
        position: relative;
        padding: ${theme.spacing(2)};
        cursor: pointer;
    `}
`;

export const OrderedActionsMenu = styled(Menu)`
  position: absolute;
  left: -50%;
  top: 100%;
  z-index: 200;
  width: 120px;
`;
