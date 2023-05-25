import React from 'react';
import { Box, Button, IconButton, Popover, Tooltip, Typography } from "@mui/material";
import FeatherIcon from "feather-icons-react";
import { useTranslation } from "next-i18next";

const DeleteConfirmButton = ({ onConfirm }) => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleConfirm = async () => {
    await onConfirm();
    setAnchorEl(null);
  };

  return (
    <Box>
      <Tooltip title={t('delete')} placement="top">
        <IconButton
          aria-describedby={id}
          variant="contained"
          color="danger"
          size="large"
          onClick={handleClick}
          sx={{ backgroundColor: (theme) => theme.palette.danger.light }}
        >
          <FeatherIcon icon="trash-2" width="18" height="18" />
        </IconButton>
      </Tooltip>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
      >
        <Box p={2} textAlign="center">
          <Typography gutterBottom fontWeight="600">
            {t('are-you-sure')}
          </Typography>
          <Box display="flex" alignItems="center" justifyContent="space-evenly">
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={handleClose}
              sx={{ mr:1 }}
            >
              {t('cancel')}
            </Button>
            <Button
              variant="contained"
              color="error"
              size="small"
              onClick={handleConfirm}
            >
              {t('delete')}
            </Button>
          </Box>
        </Box>
      </Popover>
    </Box>
  );
};

export default DeleteConfirmButton;
