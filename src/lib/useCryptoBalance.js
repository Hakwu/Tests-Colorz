import React from 'react';
import useSWR from "swr";

function useCryptoBalance(id) {
  const { data, mutate } = useSWR('/balance/' + id);

  const loading = !data;

  return {
    mutate,
    loading: loading || data.status !== 200,
    data: data?.data || {}
  };
}

export default useCryptoBalance;
