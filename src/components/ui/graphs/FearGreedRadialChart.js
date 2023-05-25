import React from 'react';
import dynamic from "next/dynamic";

const Chart = dynamic(
  () => import('react-apexcharts'),
  { ssr: false }
);


function FearGreedRadialChart({ label, color, score }) {

  const options = {
    chart: {
      offsetY: -10,
      fontFamily: "'DM Sans', sans-serif",
      foreColor: '#adb0bb',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        hollow: {
          size: "65%",
        },
        dataLabels: {
          show: true,
          name: {
            show: true,
            fontSize: '16px',
            fontWeight: 600,
            color: color,
            offsetY: 15,
            formatter: (value) => {
              return value;
            },
          },
          value: {
            show: true,
            fontSize: '32px',
            fontWeight: 600,
            color: color,
            offsetY: -30,
            formatter: (value) => {
              return value;
            },
          },
        },
      },
      track: {
        show: true
      }
    },
    fill: {
      colors: [color]
    },
    stroke: {
      lineCap: 'round'
    },
    labels: [label],
  };

  return (
   <Chart
     type="radialBar"
     height="220px"
     series={[score]}
     options={options}
   />
  );
}

export default FearGreedRadialChart;
