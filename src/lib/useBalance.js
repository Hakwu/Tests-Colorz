import React, { useEffect, useState } from 'react';
import useSWR from "swr";

function useBalance() {
  const [state, setState] = useState();

  const { data, mutate } = useSWR('/balance');

  const loading = !data;

  useEffect(() => {
    if (!loading && data.status === 200) {
      const { balance, ...others } = data?.data;
      const pieChart = balance.slice(0, 50);

      const obj = {
        ...others,
        balance,
        pieChart: {
          series: pieChart.map(el => el.total),
          labels: pieChart.map(el => el.symbol),
        }
      };

      setState(obj);
    }

  }, [loading]);

  return {
    mutate,
    loading: !state,
    data: state || {}
  };
}

export default useBalance;
