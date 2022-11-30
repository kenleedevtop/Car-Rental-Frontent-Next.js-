import React, { useState } from 'react';
import {
  InputMain,
  InputLabel,
  InputSelect,
  InputText,
  InputMultiSelect,
  InputDatepicker,
  InputRow,
} from 'components/ui/input/styles';
import { TInputProps } from 'components/ui/input/types';
import { Chip } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const Input = ({
  label,
  type = 'text',
  value,
  onValue,
  min,
  max,
  options = [],
  placeholder,
  multiline,
  required,
  helper,
  rows = 4,
  ...props
}: TInputProps) => {
  const handleValue = (e: React.ChangeEvent<any>) => {
    if (onValue) onValue(e.target.value);
  };

  const handleSelect = (_e: React.ChangeEvent<any>, v: any) => {
    if (onValue) onValue(v);
  };

  const handleDate = (newValue: any) => {
    if (onValue) onValue(newValue);
  };

  const handleMinMax = (key: 'min' | 'max') => (e: React.ChangeEvent<any>) => {
    if (onValue) onValue({ ...value, [key]: e.target.value });
  };

  const [search, setSearch] = useState('');

  return (
    <InputMain {...props}>
      {!!label && (
        <InputLabel required={required} helper={helper}>
          {label}
        </InputLabel>
      )}
      {type === 'text' && (
        <InputText
          type="text"
          value={value}
          onChange={handleValue}
          placeholder={placeholder}
          multiline={multiline}
          rows={rows}
          variant="outlined"
        />
      )}
      {type === 'number' && (
        <InputText
          type="number"
          value={value}
          onChange={handleValue}
          inputProps={{ min, max }}
          placeholder={placeholder}
          multiline={multiline}
          rows={rows}
          variant="outlined"
        />
      )}
      {type === 'min-max' && (
        <InputRow>
          <InputText
            type="number"
            value={value.min}
            onChange={handleMinMax('min')}
            inputProps={{ max: value.max }}
            placeholder="Min"
            multiline={multiline}
            rows={rows}
            variant="outlined"
          />
          <InputText
            type="number"
            value={value.max}
            onChange={handleMinMax('max')}
            inputProps={{ min: value.min }}
            placeholder="Max"
            multiline={multiline}
            rows={rows}
            variant="outlined"
          />
        </InputRow>
      )}
      {type === 'select' && (
        <InputSelect
          options={options.map((option) => option.label)}
          value={value}
          onChange={handleSelect}
          inputValue={search}
          onInputChange={(_a, b) => setSearch(b)}
          renderInput={(x) => (
            <InputText {...x} variant="outlined" placeholder={placeholder} />
          )}
        />
      )}
      {type === 'date' && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <InputDatepicker
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleDate}
            renderInput={({ inputProps, ...params }) => (
              <InputText
                {...params}
                variant="outlined"
                inputProps={{ ...inputProps, placeholder }}
              />
            )}
          />
        </LocalizationProvider>
      )}
      {type === 'multiselect' && (
        <InputMultiSelect
          multiple
          filterSelectedOptions
          options={options.map((option) => option.label)}
          value={value}
          onChange={handleSelect}
          inputValue={search}
          onInputChange={(_a, b) => setSearch(b)}
          renderTags={(v: any[], getTagProps) =>
            v.map((option: string, index: number) => (
              <Chip
                variant="outlined"
                label={option}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(x) => (
            <InputText {...x} variant="outlined" placeholder={placeholder} />
          )}
        />
      )}
    </InputMain>
  );
};

export default Input;
