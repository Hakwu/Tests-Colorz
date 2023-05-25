import React from 'react';
import UiChip from "@mui/material/Chip";


function Chip({ size, label, color, ...props }) {

  const sx = {
    borderRadius: "6px",
    pl: "5px",
    pr: "5px",
  };

  return (
    <UiChip
      size={size}
      label={label}
      color={color}
      sx={{
        ...sx,
        ...props.sx
      }}
    />
  );
}

export default Chip;
