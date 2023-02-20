import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Menu } from 'components/custom';

export const DiscoverActionsMain = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        display: grid;
        place-items: center;
        position: relative;
        padding: ${theme.spacing(2)};
        cursor: pointer;
    `}
`;

export const DiscoverActionsMenu = styled(Menu)`
  position: absolute;
  left: 0px;
  top: 100%;
  z-index: 200;
  width: 120px;
`;
