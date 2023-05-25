import React from 'react';
import { IconButton, Tooltip } from "@mui/material";
import FeatherIcon from "feather-icons-react";
import usePreferences from "@lib/usePreferences";
import { useTranslation } from "next-i18next";

function PrivateModeButton(props) {
  const { t } = useTranslation('common');
  const { preferences, togglePrivateMode } = usePreferences();

  const title = preferences.privateMode ? t('private-mode.disabled') : t('private-mode.enabled');
  const icon = preferences.privateMode ? 'eye-off' : 'eye';

  return (
    <Tooltip title={title} placement="top">
      <IconButton
        size="large"
        color="inherit"
        onClick={togglePrivateMode}
      >
        <FeatherIcon icon={icon} width="20" height="20" />
      </IconButton>
    </Tooltip>
  );
}

export default PrivateModeButton;
