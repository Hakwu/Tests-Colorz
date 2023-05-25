import React, { useEffect, useState } from 'react';
import useSWR from "swr";
import { sortTable } from "@utils/formatter";

function useWalletList() {
  const [state, setState] = useState();
  const [[orderBy, direction], setOrderBy] = useState(["", ""]);

  const { data, mutate } = useSWR('/wallet', {
    onSuccess: ({ data }) => setState(data),
    refreshInterval: 30000
  });

  const handleSort = (field, wallets) => {
    let order = "asc";
    if (field === orderBy) {
      order = direction === "asc" ? "desc" : "asc";
    }

    const operator = direction === "asc" ? "<" : ">";
    const sorted = sortTable(wallets, field, operator);

    setState(sorted);
    setOrderBy([field, order]);
  };

  return {
    mutate,
    direction,
    orderBy,
    handleSort,
    loading: !state || data.status !== 200,
    data: state || [],
  };
}

export default useWalletList;
