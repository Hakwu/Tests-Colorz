import React, { useState } from 'react';
import Chip from "@components/ui/Chip";
import CryptoList from "@components/view/portfolio/CryptoList";
import DashboardCard from "@components/ui/cards/DashboardCard";
import { useTranslation } from "next-i18next";
import { FormControlLabel, Switch } from "@mui/material";

function CryptoListCard({ balance = [], loading }) {
  const { t } = useTranslation('common');
  const [hideSmallAmount, setHideSmallAmount] = useState(false);

  const data = hideSmallAmount ? balance.filter(el => el.total > 1) : balance;

  const title = (
    <>
      {t('my-cryptocurrencies')} <Chip label={data.length} />
    </>
  );

  const actions = (
    <>
      <FormControlLabel
        label={t('hide-small-amount')}
        control={<Switch onChange={() => setHideSmallAmount(!hideSmallAmount)} checked={hideSmallAmount}/>}
      />
    </>
  );


  return (
    <DashboardCard
      title={title}
      action={actions}
      loading={loading}
    >
      <CryptoList
        data={data}
      />
    </DashboardCard>
  );
}

export default CryptoListCard;
