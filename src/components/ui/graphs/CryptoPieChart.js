import React from 'react';
import LoadableCard from "@components/ui/cards/LoadableCard";
import dynamic from "next/dynamic";
import { formatBalance, formatPercentage } from "@utils/formatter";
import { useTranslation } from "next-i18next";

const Chart = dynamic(
  () => import('react-apexcharts'),
  { ssr: false }
);


const CryptoPieChart = ({ data, loading = true }) => {
  const { t } = useTranslation('common');

  const options = {
    chart: {
      id: 'pie-chart',
      fontFamily: "'DM Sans', sans-serif",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return formatBalance(value || 0, "currency", "USD");
        }
      },
    },
    xaxis: {
      labels: {
        formatter: function (value) {
          return value;
        }
      }
    },
    labels: data?.labels || [],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: 50,
        },
      },
    },
    legend: {
      show: true,
      formatter: function(seriesName, opts) {
        const percent = formatPercentage(opts.w.globals.seriesPercent[opts.seriesIndex]);
        return [seriesName, ": ", percent];
      }
    },

    tooltip: {
      fillSeriesColor: false,
      custom: function({ series, seriesIndex, dataPointIndex, w }) {
        const { seriesPercent, seriesNames, colors } = w.globals;
        return (
          `<div class="piechart-tooltip">
            <span class="apexcharts-tooltip-marker" style="background-color: ${colors[seriesIndex]}"></span>
            <div class="apexcharts-tooltip-text" style="font-family: DM Sans, sans-serif; font-size: 12px;">
              <div>
                  <span class="apexcharts-tooltip-text-y-label">${seriesNames[seriesIndex]}: </span>
                  <span class="apexcharts-tooltip-text-y-value">${formatPercentage(seriesPercent[seriesIndex])}</span>
              </div>
              <div>
                <span class="apexcharts-tooltip-text-y-label">${t('amount')}: </span>
              
                <span class="apexcharts-tooltip-text-y-value">${formatBalance(series[seriesIndex], "currency", "USD")}</span><br/>
              </div>
              </div>
           </div>`
        );
      }
    },
  };


  return (
    <LoadableCard loading={loading} sx={{ overflow: 'visible' }}>
      <Chart
        options={options}
        series={data?.series || []}
        type="pie"
        height="200px"
      />
    </LoadableCard>
  );
};


export default CryptoPieChart;
