import React from 'react';
import useSWR from "swr";
import TotalBalanceCard from "@components/view/portfolio/TotalBalanceCard";

const TotalBalanceWidget = () => {

  const { data } = useSWR('/dashboard/balance');

  return (
    <TotalBalanceCard data={data?.data} loading={!data}/>
  );
};

export default TotalBalanceWidget;
