import React, { useEffect, useState } from 'react';
import useSWR from "swr";
import { sortTable } from "@utils/formatter";

function useTopCryptosList({ limit = 20  }) {
  const [state, setState] = useState([]);
  const [page, setPage] = useState(1);
  const [next, setNext] = useState(false);
  const [search, setSearch] = useState('');
  const [[orderBy, direction], setOrderBy] = useState(["", ""]);

  const { data } = useSWR(`/crypto?limit=${limit}&search=${search}&page=${page}&orderBy=${orderBy}&direction=${direction}`, {
    onSuccess: (values) => {
      if (next)
        setState([...state, ...values.data.data]);
      else
        setState(values.data.data);
      setNext(false);
    }
  });


  const handleSort = (field) => {
    let order = "asc";
    if (field === orderBy) {
      order = direction === "asc" ? "desc" : "asc";
    } else {
      setPage(1);
    }

    setOrderBy([field, order]);
  };

  const loadMore = () => {
    if (data?.data?.meta?.next !== null) {
      setNext(true);
      setPage(data?.data?.meta?.next);
    }
  };

  const handleSearch = (value) => {
    setPage(1);
    setOrderBy(['', '']);
    setSearch(value);
  };

  return {
    search,
    orderBy,
    direction,
    loadMore,
    handleSort,
    handleSearch: handleSearch,
    pagination: data?.data?.meta,
    loading: !data || data?.status !== 200,
    data: state,
  };
}

export default useTopCryptosList;
