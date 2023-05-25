import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { formatBalance } from "@utils/formatter";
import { useTranslation } from "next-i18next";
import Card from "@components/ui/Card";

const Content = ({ title, subtitle, icon }) => (
  <Box
    p={3}
    sx={{
      borderRight: { xs: '0', sm: '1px solid rgba(0,0,0,0.1)' },
      '& :last-child': {
        borderRight: '0',
      },
    }}
  >
    <Box display="flex" alignItems="center">
      <Typography variant="h3">{title}</Typography>
    </Box>
    <Typography color="textSecondary" variant="h6" fontWeight="400">
      {subtitle}
    </Typography>
  </Box>
);

const CryptoMoreDetailsCard = ({ data, loading }) => {
  const { t } = useTranslation('common');

  return (
    <Card loading={loading} contentProps={{ sx: { p: 0, pb: '0 !important' } }}>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <Content
            title={formatBalance(data.marketCap, "currency", "USD")}
            subtitle={t('market-cap')}
            icon="shopping-bag"
          />
        </Grid>
        <Grid item xs={4}>
          <Content
            title={formatBalance(data.volume24h, "currency", "USD")}
            subtitle={t('volume-daily')}
          />
        </Grid>
        <Grid item xs={4}>
          <Content
            title={formatBalance(data.fullyDilutedValuation, "currency", "USD")}
            subtitle={t('fully-diluted-market-cap')}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export const CryptoOfferDetailsCard = ({ data, loading }) => {
  const { t } = useTranslation('common');

  return (
    <Card loading={loading} contentProps={{ sx: { p: 0, pb: '0 !important' } }}>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <Content
            title={formatBalance(data.circulatingSupply)}
            subtitle={t('circulating-supply')}
            icon="shopping-bag"
          />
        </Grid>
        <Grid item xs={4}>
          <Content
            title={formatBalance(data.totalSupply)}
            subtitle={t('total-supply')}
          />
        </Grid>
        <Grid item xs={4}>
          <Content
            title={formatBalance(data.maxSupply)}
            subtitle={t('max-supply')}
          />
        </Grid>
      </Grid>
    </Card>
  );
};


export default CryptoMoreDetailsCard;
