import React from 'react';
import useSWR from "swr";


function useOverview({ days, startDate, endDate } = {}) {

  const { data } = useSWR(`/balance/overview?days=${days}`);

  return {
    loading: !data,
    data: data?.data || {}
  };
}

export default useOverview;
