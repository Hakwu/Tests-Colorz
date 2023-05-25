import React from 'react';
import { Box, Dialog, DialogActions, DialogContent, IconButton } from "@mui/material";
import FeatherIcon from "feather-icons-react";

function Modal({ open, onClose, footer = null, children, ...props }) {
  return (
    <Dialog open={open} onClose={onClose} {...props}>
      <DialogContent>
        <Box position="absolute" right={0} top={0}>
          <IconButton
            color="inherit"
            size={"large"}
            sx={{
              color: (theme) => theme.palette.grey.A200,
            }}
            onClick={onClose}
          >
            <FeatherIcon icon="x-circle" />
          </IconButton>
        </Box>
        {children}
      </DialogContent>
      {footer && (
        <DialogActions>

        </DialogActions>
      )}
    </Dialog>
  );
}

export default Modal;
