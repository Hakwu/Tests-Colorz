import React, { useEffect, useState } from 'react';
import useSWR from "swr";

function useCryptoPriceHistory({ id,interval }) {
  const [state, setState] = useState();
  const { data } = useSWR(`/crypto/priceHistory/${id}?days=${interval}`);

  const loading = !data;

  useEffect(() => {
    if (!loading && data.status === 200) {
      const { data: values } = data;

      setState({
        series: values.map(el => el.price),
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

export default useCryptoPriceHistory;
