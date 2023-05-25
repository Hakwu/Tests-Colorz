import React, { useState } from 'react';
import useSWR from "swr";

function useAlerts() {
  const [[orderBy, direction], setOrderBy] = useState(["", ""]);

  const { data, mutate } = useSWR('/alert');

  return {
    mutate,
    orderBy,
    direction,
    loading: false,
    data: data?.data || [],
  };
}

export default useAlerts;
