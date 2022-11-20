import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Grid, Stack } from 'components/system';

export const SurveysPageMain = styled(Stack)`
  width: 100%;
`;

export const SurveysPageCharts = styled(Grid)<{ theme?: Theme }>`
  ${({ theme }) => `
        width: 100%;
    `}
`;

export const SurveysPageFilter = styled(Stack)<{ theme?: Theme }>`
  ${({ theme }) => `
        border-radius: 4px;
        border: 1px solid ${theme.palette.common.black}20;
        padding: ${theme.spacing(5)};
    `}
`;

export const SurveysPageFilterActions = styled(Stack)<{
  theme?: Theme;
}>`
  justify-content: flex-end;
  & > * {
    min-width: 100px;
  }
`;
