import React from 'react';
import { useTranslation } from "next-i18next";
import { Box, Typography } from "@mui/material";
import ExchangeIcon from "@components/ui/ExchangeIcon";
import Card from "@components/ui/Card";

function WalletDetailsCard({ wallet, loading }) {
  const { t } = useTranslation('wallets');


  return (
    <Card loading={loading}>
      <Box display="flex" alignItems="center">
        <ExchangeIcon size={32} icon={wallet?.exchangeName} custom={wallet?.custom} sx={{ mr: 1 }}/>
        <Typography variant="h2" fontWeight="700">
          {wallet?.exchangeName}
        </Typography>
      </Box>
    </Card>
  );
}

export default WalletDetailsCard;
