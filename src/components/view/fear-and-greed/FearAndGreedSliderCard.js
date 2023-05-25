import React from 'react';
import { Box, LinearProgress, Typography } from "@mui/material";
import useFearAndGreed from "@lib/useFearAndGreed";
import { useTranslation } from "next-i18next";
import Card from "@components/ui/Card";

function FearAndGreedSliderCard({ symbol, data }) {
  const { t } = useTranslation('common');
  const { formatIndex } = useFearAndGreed();

  return (
    <Card>
      <Typography variant="h2" textAlign="center" fontWeight="600" gutterBottom>
        {symbol}
      </Typography>

      {Object.keys(data).map((key) => {
        const { score, color, label } = formatIndex(data[key]);

        if (key === 'today') return null;

        return (
          <Box key={key} mb={key === 'lastMonth' ? 0 : 2}>
            <Typography variant="h4">
              {t(key)}
            </Typography>
            <Box display="flex" alignItems="center" pb={0.5}>
              <Typography color="textSecondary" variant="h6">
                {label}
              </Typography>
              <Box ml="auto">
                <Typography color="textSecondary" variant="h6" fontWeight="400">
                  {score || "-"}
                </Typography>
              </Box>
            </Box>
            <LinearProgress
              value={score}
              variant="determinate"
              sx={{
                '& span': {
                  backgroundColor: color
                },
              }}
            />
          </Box>
        );
      })}
    </Card>
  );
}

export default FearAndGreedSliderCard;
