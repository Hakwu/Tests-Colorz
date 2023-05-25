import React, { useState } from 'react';
import Chip from "@components/ui/Chip";
import OrderList from "@components/view/portfolio/OrderList";
import DashboardCard from "@components/ui/cards/DashboardCard";
import { useTranslation } from "next-i18next";
import useOrders from "@lib/useOrders";
import FeatherIcon from "feather-icons-react";
import { Button } from "@mui/material";
import AddOrderModal from "@components/ui/modals/AddOrderModal";

function OrderListCard({ cryptoId }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { data: orders, loading, mutate } = useOrders({ cryptoId });

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
      <AddOrderModal open={open} onClose={handleClose}/>
      <DashboardCard title={<>{t('orders')} <Chip label={orders?.meta?.total || 0} /></>} loading={loading} action={action}>
        {orders?.meta?.total  > 0 ? (
          <OrderList cryptoId={cryptoId} />
        ) : (
          <div>

          </div>
        )}
      </DashboardCard>
    </>
  );
}

export default OrderListCard;
