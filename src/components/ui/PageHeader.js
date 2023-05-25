import React from 'react';
import Breadcrumb from "@components/ui/Breadcrumb";
import { Box } from "@mui/material";

function PageHeader({ title, breadcrumb = [], ...props }) {
  const items = [...breadcrumb, { title }];

  return (
    <Box px={2}>
      <Breadcrumb title={title} items={items}  {...props} />
    </Box>
  );
}

export default PageHeader;
