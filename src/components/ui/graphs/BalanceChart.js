import React from 'react';
import dynamic from "next/dynamic";
import { formatBalance } from "@utils/formatter";
import { useTheme } from "@mui/material/styles";
import usePreferences from "@lib/usePreferences";

const Chart = dynamic(
  () => import('react-apexcharts'),
  { ssr: false }
);

const BalanceChart = ({ series , labels }) => {
  const theme = useTheme();
  const { preferences } = usePreferences();
  const { currency, privateMode } = preferences;


  const options = {
    chart: {
      fontFamily: "'DM Sans', sans-serif",
      foreColor: '#adb0bb',
      animations: { enabled: false },
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    grid: {
      show: true,
      color: '#777e89',
      strokeDashArray: 2
    },
    dataLabels: { enabled: false },
    colors: [theme.palette.secondary.main],
    xaxis: {
      categories: labels,
      type: 'datetime',
    },
    yaxis: {
      show: !privateMode,
      labels: {
        formatter: function (value) {
          return formatBalance(value, "currency", "USD");
        }
      },
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    tooltip: {
      theme: 'dark',
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    }
  };

  return (
    <Chart
      options={options}
      series={series}
      type="area"
      height="300"
    />
  );
};

export default BalanceChart;
