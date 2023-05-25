import React from 'react';
import useSWR from "swr";

function useCrypto(id) {
  const { data } = useSWR('/crypto/' + id);

  const loading = !data || !id;


  return {
    loading: loading,
    data: data?.data || []
  };
}

export default useCrypto;
