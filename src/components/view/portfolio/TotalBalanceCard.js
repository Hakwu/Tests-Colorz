import React from 'react';
import { useTranslation } from "next-i18next";
import FeatherIcon from 'feather-icons-react';
import { formatPriceColor, formatNumberChange } from "@utils/formatter";
import { Typography, Box, Fab, Tooltip } from '@mui/material';
import Price from "@components/ui/Price";
import Card from "@components/ui/Card";

const TotalBalanceCard = ({ data = {}, loading }) => {
  const { t } = useTranslation('common');

  const { total = 0, increase = 0, changePercent24h } = data;

  const usdChange = formatNumberChange(increase, "currency", "USD");
  const percentChange = formatNumberChange(changePercent24h / 100 || 0);
  return (
    <Card loading={loading}>
      <Box display="flex" alignItems="center">
        <Box>
          <Typography fontWeight="700" variant="h4" color="textSecondary">
            {t('total-balance')}
          </Typography>
          <Box display="flex" alignItems="center">
            <Typography variant="h3">
              <Price amount={total} />
            </Typography>
            {changePercent24h ? (
              <Typography color={formatPriceColor(increase)} variant="caption" fontWeight="400" sx={{ ml: 1 }}>
                {percentChange}
              </Typography>
            ): null}
          </Box>
        </Box>
        <Box sx={{ ml: 'auto' }}>
          <Tooltip title={t('tooltips.total-balance', { percentChange, usdChange  })} placement="top" disableHoverListener={!changePercent24h}>
            <Fab
              elevation={0}
              color="secondary"
              aria-label="dollar"
              sx={{
                color: '#fff',
                width: '48px',
                height: '48px',
              }}
            >
              <FeatherIcon icon="dollar-sign" width="24" height="24"/>
            </Fab>
          </Tooltip>
        </Box>
      </Box>
    </Card>
  );
};

export default TotalBalanceCard;
