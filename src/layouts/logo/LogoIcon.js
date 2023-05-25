import React from "react";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Link from "@components/ui/Link";

function LogoIcon({ color }) {
  const theme = useTheme();

  // const logo = (color || theme.palette.mode) === 'dark' ? LogoLight : LogoDark;

  return (
    <>
    <a href={"#"}>
        <Typography
          variant="h1"
          color="black"
        >
          Vision.R
        </Typography>
      </a>
    </>
  );
}

export default LogoIcon;
