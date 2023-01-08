import styled from '@emotion/styled';
import { Theme, MenuItem, TextField, Autocomplete } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { Label } from 'components/ui';

export const InputMain = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `

    display: inline-flex;
    flex-direction: column;
    position: relative;
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
    vertical-align: top;
    width: 100%;
    .MuiInputBase-root {
      &.MuiInputBase-multiline {
        padding: 0;
      }
      .MuiInputBase-input {
        padding: ${theme.spacing(2)} !important;
      }
      .MuiOutlinedInput-notchedOutline {
        border: 1px solid ${theme.palette.primary.main}20;
      }
      &:hover {
        .MuiOutlinedInput-notchedOutline {
            border: 1px solid ${theme.palette.primary.main}50;
        }
      }
      &.Mui-focused {
        .MuiOutlinedInput-notchedOutline {
              border: 1px solid ${theme.palette.secondary.main}ff;
        }
      }
    }
  `}
`;

export const InputLabel = styled(Label)<{ theme?: Theme }>`
  ${({ theme }) => `
    margin-bottom: ${theme.spacing(0.5)};
  `}
`;

export const InputSelect = styled(Autocomplete)<{ theme?: Theme }>`
  ${({ theme }) => `
    .MuiOutlinedInput-root {
      padding: 0 !important;
    }
  `}
`;

export const InputSelectItem = styled(MenuItem)``;

export const InputText = styled(TextField)``;

export const InputMultiSelect = styled(Autocomplete)<{ theme?: Theme }>`
  ${({ theme }) => `
    .MuiOutlinedInput-root {
      padding: 0 !important;
    }
  `}
`;

export const InputDatepicker = styled(DesktopDatePicker)<{ theme?: Theme }>``;

export const InputRow = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    display: flex;
    gap: ${theme.spacing(2)};
  `}
`;

export const InputError = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    color: ${theme.palette.error.main};
    font-size: 12px;
    font-weight: 500;
  `}
`;
