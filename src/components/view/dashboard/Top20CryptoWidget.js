import React from "react";
import Link from "@components/ui/Link";
import { useTranslation } from "next-i18next";
import useTopCryptosList from "@lib/useTopCryptosList";
import DashboardCard from "@components/ui/cards/DashboardCard";
import TopCryptoList from "@components/view/dashboard/TopCryptoList";
import { Box, Button } from "@mui/material";


function Top20CryptoWidget()  {
  const { t } = useTranslation('dashboard');
  const { loading, data, direction, orderBy, handleSort } = useTopCryptosList({ limit: 20 });

  return (
    <DashboardCard title={t('top-crypto.title')}>
      <TopCryptoList
        data={data}
        loading={loading}
        direction={direction}
        orderBy={orderBy}
        handleSort={handleSort}
      />
      <Box textAlign="center" mt={4}>
        <Button
          size="large"
          variant="contained"
          component={Link}
          href="/app/cryptocurrencies"
        >
          {t('top-crypto.see-more')}
        </Button>
      </Box>
    </DashboardCard>
  );
}

export default Top20CryptoWidget;
