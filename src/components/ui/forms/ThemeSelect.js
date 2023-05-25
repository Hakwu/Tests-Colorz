import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';

import { Select, InputBase } from '@mui/material';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  '&  .MuiInputBase-root': {
    borderRadius: '5px',
  },
  '& .MuiInputBase-input': {
    backgroundColor: theme.palette.mode === 'light' ? 'white' : theme.palette.grey.A400,
    borderRadius: 5,
    fontSize: 15,
    padding: '8px 33px 8px 16px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    border: '1px solid rgba(0,0,0,0.12)',
  },
}));

const ThemeSelect = ({ children, ...props }) => {

  return (
    <Select{...props} input={<BootstrapInput />}>
      {children}
    </Select>
  );
};

export default ThemeSelect;
