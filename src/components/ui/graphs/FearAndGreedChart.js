import React , { useState }from 'react';
import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";
import { useTheme } from "@mui/material/styles";
import DashboardCard from "@components/ui/cards/DashboardCard";
import { MenuItem } from "@mui/material";
import ThemeSelect from "@components/ui/forms/ThemeSelect";
import useFearAndGreedHistory from "@lib/useFearAndGreedHistory";

const Chart = dynamic(
  () => import('react-apexcharts'),
  { ssr: false }
);

const AreaLineChart = ({ series , labels, days }) => {
  const theme = useTheme();

  const options = {
    chart: {
      fontFamily: "'DM Sans', sans-serif",
      foreColor: '#adb0bb',
      toolbar: { show: false },
      zoom: {
        enabled: false
      },
      animations: {
        enabled: false
      }
    },
    grid: {
      show: true,
      color: '#777e89',
      strokeDashArray: 2
    },
    dataLabels: { enabled: false },
    colors: [theme.palette.primary.main, theme.palette.secondary.main],
    xaxis: {
      categories: labels,
      type: 'datetime',
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    tooltip: {
      theme: 'dark',
      x: {
        format: (days > 30 || days === "max") ? 'dd MMM yyyy' : 'dd MMM'
      },
    }
  };

  return (
    <Chart
      options={options}
      series={series}
      type="area"
      height="500"
    />
  );
};

const FearAndGreedChart = () => {
  const { t } = useTranslation('common');
  const [days, setDays] = useState(7);
  const { data, loading } = useFearAndGreedHistory(days);


  const labels = data.labels || [];

  const series = [
    {
      name: "Bitcoin",
      data: data["BTC"],
    },
    {
      name: "Etherum",
      data: data["ETH"],
    }
  ];

  const options = [{
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
    <DashboardCard title={t('fear-and-greed-history')} action={action} loading={loading}>
      <AreaLineChart
        series={series}
        labels={labels}
        days={days}
      />
    </DashboardCard>
  );
};


export default FearAndGreedChart;
