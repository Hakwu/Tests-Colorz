import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import ThemeSelect from "@components/ui/forms/ThemeSelect";
import { MenuItem } from "@mui/material";
import DashboardCard from "@components/ui/cards/DashboardCard";
import BalanceChart from "@components/ui/graphs/BalanceChart";
import useBalanceHistory from "@lib/useBalanceHistory";

const BalanceChartCard = () => {
  const { t } = useTranslation('common');
  const [days, setDays] = useState(7);
  const { data } = useBalanceHistory(days);

  const labels = data?.labels || [];

  const series = [
    {
      name: t('balance'),
      data: data?.series || [],
    }
  ];

  const options = [{
    value: 1,
    label: t('select.24h')
  }, {
    value: 7,
    label: t('select.7-days')
  }, {
    value: 30,
    label: t('select.30-days')
  }, {
    value: 365,
    label: t('select.1-year')
  }, {
    value: "max",
    label: t('select.max')
  }];


  const action = (
    <ThemeSelect
      value={days}
      size="small"
      onChange={({ target }) => setDays(target.value)}
      sx={{ width: "120px" }}
    >
      {options.map(el => (
        <MenuItem key={el.value} value={el.value}>{el.label}</MenuItem>
      ))}
    </ThemeSelect>
  );

  return (
    <DashboardCard title={t('total-portfolio-balance')} action={action}>
      <BalanceChart
        series={series}
        labels={labels}
      />
    </DashboardCard>
  );
};


export default BalanceChartCard;
