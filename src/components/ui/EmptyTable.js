import React from 'react';
import { useTranslation } from "next-i18next";
import { Box, Button, Typography } from "@mui/material";
import Link from "@components/ui/Link";

function EmptyTable({ message, buttonText, action, buttonProps, ...props }) {
  const { t } = useTranslation('common');

  return (
    <Box textAlign="center">
      <Typography variant="h2" fontWeight="600">
        {message}
      </Typography>
      <Button
        size="large"
        variant="contained"
        {...buttonProps}
        sx={{
          mt: 2,
          pt: '10px',
          pb: '10px',
        }}
      >
        {buttonText || t('add')}
      </Button>
    </Box>
  );
}

export default EmptyTable;
