import React from 'react';
import { useTranslation } from "next-i18next";
import Card from "@components/ui/Card";
import { Box, Typography } from "@mui/material";
import { formatBalance } from "@utils/formatter";
import FeatherIcon from "feather-icons-react";

function CryptoDetailsCard({ data, loading }) {
  const { t } = useTranslation('common');

  return (
    <Card loading={loading}>
      <Box display="flex" alignItems="center">
        <Box>
          <Typography fontWeight="700" variant="h4" color="textSecondary">
            {t('price')}
          </Typography>
          <Typography variant="h3">
            {formatBalance(data?.price || 0, "currency", "USD")}
          </Typography>
        </Box>
        <Box sx={{ ml: 'auto' }}>
          {data.changePercent24h ? (
            <Box
              display="flex"
              alignItems="center"
              color={
                (theme) => Math.sign(data.changePercent24h) === -1 ? theme.palette.danger.main : theme.palette.success.main
              }
            >
              <FeatherIcon
                icon={Math.sign(data.changePercent24h) === -1  ? "trending-down" : "trending-up"}
                width="20"
                height="20"
              />
              &nbsp;{parseFloat(data.changePercent24h).toFixed(2)}%
            </Box>
          ) : "-"}
        </Box>
      </Box>
    </Card>
  );
}

export default CryptoDetailsCard;
