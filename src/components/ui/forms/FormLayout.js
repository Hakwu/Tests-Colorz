import React from 'react';
import { Box, Divider, Typography } from "@mui/material";
import Card from "@components/ui/Card";

function FormLayout({ title, onSubmit, children }) {

  const titleNode = (
    <>
      <Box py={2} px={4}>
        <Typography fontWeight="500" variant="h4">
          {title}
        </Typography>
      </Box>
      <Divider />
    </>
  );

  return (
    <Card title={titleNode} headerProps={{ sx: { p: 0 } }}>
      <form onSubmit={onSubmit}>
        <Box
          sx={{
            "& > label:first-of-type": {
              mt: 0
            }
          }}
        >
          {children}
        </Box>
      </form>
    </Card>
  );
}

export default FormLayout;
