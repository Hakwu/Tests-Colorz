import React from 'react';
import { Typography, Box } from '@mui/material';
import { useTranslation } from "next-i18next";
import LoadableCard from "@components/ui/cards/LoadableCard";
import CryptoIcon from "@components/ui/CryptoIcon";
import Price from "@components/ui/Price";

const TotalCryptoCard = ({ total = 0, loading, name, icon }) => {
  const { t } = useTranslation('common');


  return (
    <LoadableCard loading={loading}>
      <Box display="flex" alignItems="center">
        <Box>
          <Typography fontWeight="700" variant="h4" color="textSecondary">
            {t('amount')}
          </Typography>
          <Typography variant="h3">
            <Price amount={total} hidePrefix />
          </Typography>
        </Box>
        <Box sx={{ ml: 'auto' }}>
          <CryptoIcon size={48} name={name} icon={icon} />
        </Box>
      </Box>
    </LoadableCard>
  );
};

export default TotalCryptoCard;
