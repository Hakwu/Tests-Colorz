import React, { useEffect, useState } from 'react';
import useSWR from "swr";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "next-i18next";

function useFearAndGreed() {
  const theme = useTheme();
  const { t } = useTranslation('common');
  const { data, mutate } = useSWR('/fng');

  const formatIndex = (score) => {
    let color, label;

    if (score === null) {
      color = "textSecondary";
      label = "not-available";
    } else if (score <= 25) {
      color = theme.palette.error.dark;
      label = "fear-gread.extreme-fear";
    } else if (score > 25 && score <= 50) {
      color = theme.palette.warning.dark;
      label = "fear-gread.fear";
    } else if (score > 50 && score <= 75) {
      color = theme.palette.success.main;
      label = "fear-gread.greed";
    } else {
      color = theme.palette.success.dark;
      label = "fear-gread.extreme-greed";
    }

    return { score, color, label: t(label) };
  };

  return {
    mutate,
    formatIndex,
    loading: !data || data.status !== 200,
    data: data?.data || {}
  };
}

export default useFearAndGreed;
