import React from 'react';
import { useTranslation } from "next-i18next";
import DashboardCard from "@components/ui/cards/DashboardCard";
import { Button } from "@mui/material";
import Link from "@components/ui/Link";
import FeatherIcon from "feather-icons-react";
import BalanceChart from "@components/ui/graphs/BalanceChart";
import useBalanceHistory from "@lib/useBalanceHistory";

const BalanceChartWidget = () => {
  const { t } = useTranslation('common');
  const { data } = useBalanceHistory(1);

  const labels = data?.labels || [];

  const series = [
    {
      name: t('balance'),
      data: data?.series || [],
    }
  ];


  const action = (
    <Button
      variant="contained"
      component={Link}
      href="/app/my-portfolio"
      endIcon={<FeatherIcon  icon="chevron-right"/>}
    >
      {t('see-more')}
    </Button>
  );

  return (
    <DashboardCard title={`${t('total-portfolio-balance')} (${t('select.24h')})`} action={action}>
      <BalanceChart
        series={series}
        labels={labels}
      />
    </DashboardCard>
  );
};


export default BalanceChartWidget;
