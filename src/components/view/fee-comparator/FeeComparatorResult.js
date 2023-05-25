import React, { useState } from 'react';
import { useTranslation } from "next-i18next";
import { Skeleton, Grid, Box, Typography, Collapse, Divider } from "@mui/material";
import Card from "@components/ui/Card";
import { StarRounded } from "@mui/icons-material";
import { formatBalance } from "@utils/formatter";
import ExchangeIcon from "@components/ui/ExchangeIcon";

const ResultCard = ({ rank, el }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const border = (theme) => {
    return (el && rank === 1) ? `2px solid ${theme.palette.secondary.main}` : "";
  };

  return (
    <Card touchable onClick={() => setOpen(el ? !open : false)} sx={{ border: (theme) => border(theme) }}>
      {el ? (
        <Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              <Box display="flex" alignItems="center" mb={1}>
                <ExchangeIcon icon={el.exchangeName} custom={el.custom} size={32} sx={{ mr: 1 }} />
                <Typography variant="h2" fontWeight="700">
                  {el.exchangeName} {el.walletName && <Typography color="textSecondary" variant="caption">{el.walletName}</Typography>}
                </Typography>
              </Box>
              <Typography color="textSecondary">
                {t('cost')}: {formatBalance(el.cost.value)} ({el.cost.currency})
              </Typography>
            </Box>
            {rank === 1 ? <StarRounded color="secondary" /> : <Typography fontWeight="700">{rank}</Typography>}
          </Box>
          <Collapse in={open}>
            <Box mt={1}>
              <Divider sx={{ my: 1 }}/>
              <Typography color="textSecondary" variant="body2">
                {t('price')}: {formatBalance(el.price.value)} ({el.price.currency})
              </Typography>
              <Divider sx={{ my: 1 }}/>
              <Typography color="textSecondary" variant="body2">
                {t('fee')}: {formatBalance(el.fee.value)} ({el.fee.currency})
                {el.fee.currency !== el.quoteFee.currency && <> / {formatBalance(el.quoteFee.value)} ({el.quoteFee.currency})</>}
              </Typography>
              <Divider sx={{ my: 1 }}/>
              <Typography color="textSecondary" variant="body2">
                {t('rate')}: {el.feePercentage}%
              </Typography>
            </Box>
          </Collapse>
        </Box>
      ) : (
        <Box>
          <Skeleton sx={{ height: '36px' }}/>
          <Skeleton sx={{ width: '67px' }} />
        </Box>
      )}
    </Card>

  );
};

function FeeComparatorResult({ result = [] }) {
  const data = result.length > 0 ? result : new Array(3).fill(null);

  return (
    <Grid container>
      {data.map((el, key)=>
        <Grid item xs={6} lg={4} key={key}>
          <ResultCard
            rank={key + 1}
            el={el}
          />
        </Grid>
      )}
    </Grid>
  );
}

export default FeeComparatorResult;
