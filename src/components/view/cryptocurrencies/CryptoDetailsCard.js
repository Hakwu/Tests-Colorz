import React from 'react';
import { useTranslation } from "next-i18next";
import Card from "@components/ui/Card";
import { Box, Typography } from "@mui/material";
import { formatBalance, formatNumberChange } from "@utils/formatter";

function CryptoDetailsCard({ data, loading }) {
  const { t } = useTranslation('common');

  return (
    <Card loading={loading}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box>
          <Typography fontWeight="700" variant="h4" color="textSecondary">
            {t('price')}
          </Typography>
          <Typography variant="h3">
            {formatBalance(data?.price, "currency", "USD")}
          </Typography>
        </Box>
        <Box>
          {data.changeHistory?.changePercent24h ? (
            <Box color={Math.sign(data?.changeHistory?.changePercent24h) === -1 ? "danger.main" : "success.main"}>
              <Typography variant="h5">
                {formatNumberChange(data?.changeHistory?.changePercent24h / 100)}
              </Typography>
            </Box>
          ) : "-"}
        </Box>
      </Box>
    </Card>
  );
}

export default CryptoDetailsCard;
