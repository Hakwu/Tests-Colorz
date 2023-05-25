import React, { useState } from 'react';
import Chip from "@components/ui/Chip";
import TransactionList from "@components/view/portfolio/TransactionList";
import DashboardCard from "@components/ui/cards/DashboardCard";
import { useTranslation } from "next-i18next";
import FeatherIcon from "feather-icons-react";
import { Button } from "@mui/material";
import useTransactions from "@lib/useTransactions";
import AddTransactionModal from "@components/ui/modals/AddTransactionModal";


function TransactionListCard({ cryptoId }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { data: transactions, loading, mutate } = useTransactions({ currencyId: cryptoId });

  const action = (
    <Button
      variant="contained"
      color="primary"
      endIcon={<FeatherIcon icon="plus" width="18" height="18" />}
      onClick={() => setOpen(true)}
    >
      {t('add', { ns: 'common' })}
    </Button>
  );

  const handleClose = async () => {
    await mutate();
    setOpen(false);
  };

  return (
    <>
      <AddTransactionModal open={open} onClose={handleClose}/>
      <DashboardCard title={<>{t('transactions')} <Chip label={transactions?.meta?.total || 0} /></>} loading={loading} action={action}>
        {transactions?.meta?.total  > 0 ? (
          <TransactionList cryptoId={cryptoId} />
        ) : (
          <div>

          </div>
        )}
      </DashboardCard>
    </>
  );
}

export default TransactionListCard;
