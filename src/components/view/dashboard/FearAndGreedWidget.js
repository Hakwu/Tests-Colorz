import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import FearGreedRadialChart from "@components/ui/graphs/FearGreedRadialChart";
import DashboardCard from "@components/ui/cards/DashboardCard";
import { useTranslation } from "next-i18next";
import useFearAndGreed from "@lib/useFearAndGreed";
import Link from "@components/ui/Link";
import FeatherIcon from "feather-icons-react";

function FearAndGreedWidget() {
  const { t } = useTranslation('common');
  const { data, loading, formatIndex } = useFearAndGreed();

  const action = (
    <Button
      variant="contained"
      component={Link}
      href="/app/fear-and-greed"
      endIcon={<FeatherIcon  icon="chevron-right"/>}
    >
      {t('see-more')}
    </Button>
  );

  return (
    <DashboardCard title={t('fear-gread.title')} loading={loading} action={action}>
      <Grid container spacing={0}>
        {Object.keys(data).map(key => (
          <Grid key={key} item xs={12} lg={6}>
            <Box>
              <FearGreedRadialChart {...formatIndex(data[key].today || 0)} />
              <Typography variant="h4" textAlign="center" fontWeight="600" sx={{ mt: -4 }}>
                {key}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </DashboardCard>
  );
}

export default FearAndGreedWidget;
