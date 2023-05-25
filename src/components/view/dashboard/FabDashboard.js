import React, { useState } from 'react';
import { useTranslation } from "next-i18next";
import FeatherIcon from "feather-icons-react";
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AddOrderModal from "@components/ui/modals/AddOrderModal";
import AddTransactionModal from "@components/ui/modals/AddTransactionModal";
import { AddShoppingCartRounded, AddCardRounded } from "@mui/icons-material";

function FabDashboard() {
  const { t } = useTranslation('common');
  const [openOrderModal, setOpenOrderModal] = useState(false);
  const [openTransactionModal, setOpenTransactionModal] = useState(false);

  const actions = [
    { type: 'order', icon: <AddShoppingCartRounded />, name: t('add-orders') },
    { type: 'transaction', icon: <AddCardRounded />, name: t('add-deposit-withdrawal') },
  ];

  const handleActions = (action) => {
    switch (action) {
      case 'order':
        setOpenOrderModal(!openOrderModal);
        break;

      case 'transaction':
        setOpenTransactionModal(!openTransactionModal);
        break;
    }
  };

  return (
    <Box>
      <AddOrderModal open={openOrderModal} onClose={() => handleActions('order')}/>
      <AddTransactionModal open={openTransactionModal} onClose={() => handleActions('transaction')}/>
      <SpeedDial
        ariaLabel="Dashboard FAB"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            tooltipTitle={action.name}
            icon={typeof action.icon === "string" ? <FeatherIcon icon={action.icon} /> : action.icon}
            onClick={() => handleActions(action.type)}
          />
        ))}
      </SpeedDial>
    </Box>

  );
}

export default FabDashboard;
