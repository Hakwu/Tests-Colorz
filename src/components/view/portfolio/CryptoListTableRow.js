import React from 'react';
import { Box, Button, TableCell, TableRow, Typography } from "@mui/material";
import CryptoIcon from "@components/ui/CryptoIcon";
import { formatBalance, formatPercentage } from "@utils/formatter";
import FeatherIcon from "feather-icons-react";
import Link from "@components/ui/Link";
import { useTranslation } from "next-i18next";
import Price from "@components/ui/Price";

function CryptoListTableRow({ item }) {
  const { t } = useTranslation('common');

  return (
    <TableRow hover>
      <TableCell sx={{ width: "200px" }}>
        <Box display="flex" alignItems="center" >
          <CryptoIcon name={item.name} icon={item.logo || item.symbol} size={25} />
          <Box ml={1}>
            <Typography fontWeight="600">
              {item.name || item.symbol}
            </Typography>
          </Box>
        </Box>
      </TableCell>
      <TableCell sx={{ width: 150 }}>
        {formatBalance(item.price || 0, "currency", "USD")}
      </TableCell>
      <TableCell>
        <Price amount={item.amount} hidePrefix />
      </TableCell>
      <TableCell>
        <Price amount={item.total} />
      </TableCell>
      <TableCell>
        {item.usd24hChange ? (
          <Box
            display="flex"
            alignItems="center"
            color={
              (theme) => Math.sign(item.usd24hChange) === -1 ? theme.palette.danger.main : theme.palette.success.main
            }
          >
            <FeatherIcon
              icon={Math.sign(item.usd24hChange) === -1  ? "trending-down" : "trending-up"}
              width="20"
              height="20"
            />
            &nbsp;{formatPercentage(item.usd24hChange)}
          </Box>
        ) : "-"}
      </TableCell>
      <TableCell align="right">
        <Button
          component={Link}
          href={'/app/my-portfolio/' + item.id}
          variant="contained"
          endIcon={<FeatherIcon  icon="chevron-right"/>}
        >
          {t('details')}
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default CryptoListTableRow;
