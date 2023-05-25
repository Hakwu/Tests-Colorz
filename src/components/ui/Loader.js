import React from 'react';
import CircularProgress from "@mui/material/CircularProgress";

function Loader({ color= "inherit", size, ...props }) {
  return (
    <CircularProgress color={color} size={size} {...props} />
  );
}

export default Loader;
