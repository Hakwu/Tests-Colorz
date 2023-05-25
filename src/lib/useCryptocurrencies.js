import React from 'react';
import useSWR from "swr";

function useCryptocurrencies({ search = "", limit = 500 } = {}) {
  const { data } = useSWR(search !== null ? `/crypto?search=${search}&limit=${limit}` : null);

  const loading = !data;

  const getCryptoById = (id) => {
    return data.data.find(el => el.id === id);
  };

  return {
    getCryptoById,
    loading: loading,
    data: data?.data?.data || []
  };
}

export default useCryptocurrencies;
