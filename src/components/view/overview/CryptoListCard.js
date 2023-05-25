import React from 'react';
import Chip from "@components/ui/Chip";
import CryptoList from "@components/view/overview/CryptoList";
import DashboardCard from "@components/ui/cards/DashboardCard";
import { useTranslation } from "next-i18next";
import { Button } from "@mui/material";
import Link from "@components/ui/Link";
import FeatherIcon from "feather-icons-react";

function CryptoListCard({ balance = [], loading }) {
  const { t } = useTranslation('common');

  const title = (
    <>
      {t('recap.top-title')} <Chip label={balance.length} />
    </>
  );

  const actions = (
    <>
      <Button
        variant="contained"
        component={Link}
        href="/app/my-portfolio"
        endIcon={<FeatherIcon  icon="chevron-right"/>}
      >
        {t('my-portfolio')}
      </Button>
    </>
  );

  return (
    <DashboardCard title={title} action={actions} loading={loading}>
      {balance.length > 0 ? (
        <CryptoList data={balance} />
      ) : (
        <div>

        </div>
      )}
    </DashboardCard>
  );
}

export default CryptoListCard;
