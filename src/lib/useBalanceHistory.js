import React, { useEffect, useState } from 'react';
import useSWR from "swr";

function useBalanceHistory(days) {
  const [state, setState] = useState();
  const { data } = useSWR(`/balance/history?days=${days}`);

  const loading = !data;

  useEffect(() => {
    if (!loading && data.status === 200) {
      const { data: values } = data;

      setState({
        series: values.map(el => el.value),
        labels: values.map(el => el.dateTime)
      });
    } else if (loading && state !== null) {
      setState(null);
    }
  }, [loading, data]);

  return {
    loading: !state || data?.status !== 200,
    data: state || []
  };
}

export default useBalanceHistory;
