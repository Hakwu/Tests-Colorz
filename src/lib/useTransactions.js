
import React, { useState } from 'react';
import useSWR from 'swr';
import { sortTable } from "@utils/formatter";

function useTransactions({ currencyId }) {
  const [page, setPage] = useState(1);
  const [[orderBy, direction], setOrderBy] = useState(["", ""]);

  const { data, mutate } = useSWR(`/transaction?currencyId=${currencyId}&page=${page}&orderBy=${orderBy}&direction=${direction}`);

  const handleSort = (field) => {
    let order = "asc";
    if (field === orderBy) {
      order = direction === "asc" ? "desc" : "asc";
    }

    setOrderBy([field, order]);
  };

  return {
    mutate,
    setPage,
    orderBy,
    direction,
    handleSort,
    loading: !data || data.status !== 200,
    data: data?.data || {}
  };
}

export default useTransactions;
