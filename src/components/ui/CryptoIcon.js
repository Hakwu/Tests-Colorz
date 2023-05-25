import React from 'react';
import { Avatar } from "@mui/material";

function CryptoIcon({ icon, name, size = 24, onClick, ...props }) {

  const url = !icon ? null : (icon.includes('https://') ?
    icon : `https://assets.coincap.io/assets/icons/${icon.toLowerCase()}@2x.png`);

  return (
    <Avatar
      src={url}
      alt={name}
      onClick={onClick}
      sx={{
        width: size + 'px',
        height: size + 'px',
        ...props.sx
      }}
    >
      {name ? name[0] : "-"}
    </Avatar>
  );
}

export default CryptoIcon;
