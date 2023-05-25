import React, { useState } from 'react';
import useCryptoPriceHistory from "@lib/useCryptoPriceHistory";
import DashboardCard from "@components/ui/cards/DashboardCard";
import { useTranslation } from "next-i18next";
import ThemeSelect from "@components/ui/forms/ThemeSelect";
import { MenuItem } from "@mui/material";
import dynamic from "next/dynamic";
import { useTheme } from "@mui/material/styles";
import { formatBalance } from "@utils/formatter";

const Chart = dynamic(
  () => import('react-apexcharts'),
  { ssr: false }
);

function AreaLineChart({ series, labels }) {
  const theme = useTheme();

  const options = {
    chart: {
      fontFamily: "'DM Sans', sans-serif",
      foreColor: '#adb0bb',
      animations: { enabled: false },
      toolbar: {
        show: true,
        tools: {
          download: false,
          zoom: true,
          selection: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: false
        }
      },
    },
    grid: {
      show: true,
      color: '#777e89',
      strokeDashArray: 2,
    },
    dataLabels: { enabled: false },
    colors: [theme.palette.primary.main],
    xaxis: {
      categories: labels,
      type: 'datetime'
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return formatBalance(value, "currency", "USD");
        },
      },
    },
    stroke: {
      curve: 'straight',
      width: 2,
    },
    tooltip: {
      theme: 'dark',
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  };


  return (
    <Chart
      options={options}
      series={series}
      type="area"
      height="400px"
    />
  );
}

function CryptoPriceHistoryChart({ name, cryptoId }) {
  const { t } = useTranslation();
  const [interval, setInterval] = useState(1);
  const { loading, data } = useCryptoPriceHistory({ id: cryptoId, interval });


  const labels = data.labels || [];

  const series = [{
    name: t('price'),
    data: data.series,
  }];

  const days = [{
    value: 1,
    label: t('select.24h')
  }, {
    value: 7,
    label: t('select.7-days')
  }, {
    value: 30,
    label: t('select.30-days')
  }, {
    value: 90,
    label: t('select.90-days')
  }, {
    value: 180,
    label: t('select.180-days')
  },  {
    value: 365,
    label: t('select.1-year')
  }, {
    value: "max",
    label: t('select.max')
  }];

  const action = (
    <ThemeSelect
      value={interval}
      size="small"
      onChange={({ target }) => setInterval(target.value)}
      sx={{ width: "120px" }}
    >
      {days.map(el => (
        <MenuItem key={el.value} value={el.value}>{el.label}</MenuItem>
      ))}
    </ThemeSelect>
  );

  return (
    <DashboardCard title={t('crypto-price-chart', { ns: 'dashboard', crypto: name })} loading={loading} action={action}>
      <AreaLineChart
        series={series}
        labels={labels}
      />
    </DashboardCard>
  );
}

export default CryptoPriceHistoryChart;
