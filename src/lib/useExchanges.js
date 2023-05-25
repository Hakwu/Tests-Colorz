import React from 'react';
import useSWR from 'swr';

function useExchanges(props) {
  const { data } = useSWR('/exchange');

  return {
    exchanges: data?.data?.exchanges || []
  };
}

export default useExchanges;
