import { useTranslation } from "next-i18next";
import Card from "@components/ui/Card";
import { Box, Grid, MenuItem, Typography } from "@mui/material";
import React from "react";
import Price from "@components/ui/Price";
import moment from "moment";
import { formatNumberChange, formatPriceColor } from "@utils/formatter";
import ThemeSelect from "@components/ui/forms/ThemeSelect";

const Content = ({ children }) => (
  <Box
    p={3}
    sx={{
      borderRight: { xs: '0', md: '1px solid rgba(0,0,0,0.1)' },
      '& :last-child': {
        borderRight: '0',
        borderBottom: '0',
      },
      borderBottom: { xs: '1px solid rgba(0,0,0,0.1)', md: '0' },
    }}
  >
    {children}
  </Box>
);

function OverviewBalanceCard({ data, loading, days, setDays, options }) {
  const { t } = useTranslation('common');

  return (
    <Card loading={loading} contentProps={{ sx: { p: '0 !important' } }}>
      <Grid container alignItems="center">
        <Grid item xs={12} md={2}>
          <Content>
            <ThemeSelect value={days} size="small" onChange={({ target }) => setDays(target.value)} fullWidth>
              {options.map(el => (
                <MenuItem key={el.value} value={el.value}>{el.label}</MenuItem>
              ))}
            </ThemeSelect>
          </Content>
        </Grid>

        <Grid item xs={12} md={4}>
          <Content>
            <Typography variant="h3">
              <Price amount={data?.start?.total} />
            </Typography>
            <Typography color="textSecondary" variant="h6" fontWeight="400">
              {t('start-period')} ({moment(data?.start?.date).format('DD/MM/YYYY HH:mm:ss')})
            </Typography>
          </Content>
        </Grid>

        <Grid item xs={12} md={4}>
          <Content>
            <Box display="flex" alignItems="center">
              <Typography variant="h3">
                <Price amount={data?.end?.total} />
              </Typography>
              <Typography color={formatPriceColor(data?.increase)} variant="caption" fontWeight="400" sx={{ ml: 1 }}>
                {formatNumberChange(data?.increase, 'currency', 'USD')}
              </Typography>
            </Box>
            <Typography color="textSecondary" variant="h6" fontWeight="400">
              {t('end-period')} ({moment(data?.end?.date).format('DD/MM/YYYY HH:mm:ss')})
            </Typography>
          </Content>
        </Grid>

        <Grid item xs={12} md={2}>
          <Content>
            <Typography variant="h3" color={formatPriceColor(data?.changePercent)}>
              {formatNumberChange(data?.changePercent / 100)}
            </Typography>
            <Typography color="textSecondary" variant="h6" fontWeight="400">
              {t('change')}
            </Typography>
          </Content>
        </Grid>
      </Grid>
    </Card>
  );
}

export default OverviewBalanceCard;
