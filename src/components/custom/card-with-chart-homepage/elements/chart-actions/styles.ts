import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Menu } from 'components/custom';

export const InPreparationActionsMain = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        display: grid;
        place-items: center;
        position: relative;
        padding: ${theme.spacing(2)};
        cursor: pointer;
    `}
`;

export const TableMenu = styled(Menu)<{
  position: { right: number; top: number };
}>`
  ${({ position }) => `
    position: fixed;
    z-index: 200;
    width: 120px;
    right: ${position?.right}px;
    top: ${position?.top}px;

    &:last-child,
    &:first-child {
      grid-template-columns: 1fr;
    }

    .MenuItem {
      grid-template-columns: 1fr;
    }


    `}
`;

export const ISpan = styled.div``;
