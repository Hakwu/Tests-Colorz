import React from 'react';
import { Avatar } from "@mui/material";
import FeatherIcon from "feather-icons-react";

function ExchangeIcon({ icon, size = 24, custom = false, onClick, ...props }) {
  const filename = icon.toLowerCase().replaceAll(' ', '').replaceAll('.', '');

  return (
    <Avatar
      src={'/assets/exchanges/' + filename + ".png"}
      alt={name}
      onClick={onClick}
      sx={{
        width: size + 'px',
        height: size + 'px',
        bgcolor: "primary.main",
        ...props.sx
      }}
    >
      <FeatherIcon icon="key" size={size - 8} />
    </Avatar>
  );
}

export default ExchangeIcon;
