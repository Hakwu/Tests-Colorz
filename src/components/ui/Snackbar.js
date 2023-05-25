import React, { forwardRef } from 'react';
import { Alert } from "@mui/material";
import { useSnackbar,SnackbarContent } from "notistack";
import { useTranslation } from "next-i18next";

const Snackbar = forwardRef(function CustomSnackbar(props, ref) {
  const { closeSnackbar } = useSnackbar();
  const { t } = useTranslation('notifications');

  const handleCloseSnackbar = () => closeSnackbar(id);

  const { id, message, severity = "success", options } = props;

  return (
    <SnackbarContent ref={ref}>
      <Alert onClose={handleCloseSnackbar} variant="filled" severity={severity} sx={{ width: '100%' }}>
        {t(message, options)}
      </Alert>
    </SnackbarContent>
  );
});

export default Snackbar;
