import React, { useState } from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CustomTextField from "@components/ui/forms/CustomTextField";

function CustomTextFieldPassword(props) {
  const [show, setShow] = useState(false);

  return (
    <CustomTextField
      type={show ? "text" : "password"}
      InputProps={{
        endAdornment:
          <InputAdornment position="end">
            <IconButton
              onClick={() => setShow(!show)}
              edge="end"
            >
              {show ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
      }}
      {...props}
    />
  );
}

export default CustomTextFieldPassword;
