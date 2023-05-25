import React, { useState, useEffect } from 'react';
import useSWR from "swr";


function useFearAndGreedHistory(days = 7) {
  const [state, setState] = useState();
  const { data, mutate } = useSWR(`/fng/history?days=${days}`);

  const loading = !data;

  useEffect(() => {
    if (!loading && data.status === 200) {
      const { data: values } = data;

      setState({
        "BTC": values["BTC"].map(el => el.index),
        "ETH": values["ETH"].map(el => el.index),
        labels: values["BTC"].map(el => el.calculatedAt)
      });
    } else if (loading && state !== null) {
      setState(null);
    }
  }, [loading, data]);

  return {
    mutate,
    loading: !state || data?.status !== 200,
    data: state || {}
  };
}

export default useFearAndGreedHistory;
