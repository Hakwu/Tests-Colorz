import React, { useEffect, useState } from 'react';
import useSWR from "swr";

function useWallet(id) {
  const [state, setState] = useState();

  const { data, mutate } = useSWR(`/wallet/${id}`);

  const loading = !data;

  useEffect(() => {
    if (!loading && data.status === 200) {
      const { wallet, balance = [] } = data?.data;
      const pieChart = balance.slice(0, 50);

      const obj = {
        wallet,
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
    data: state || {},
  };
}

export default useWallet;
