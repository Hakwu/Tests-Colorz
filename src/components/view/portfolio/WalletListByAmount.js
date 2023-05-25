import { useTranslation } from "next-i18next";
import Spinner from "@components/ui/Spinner";
import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import Link from "@components/ui/Link";
import React from "react";
import FeatherIcon from "feather-icons-react";
import Price from "@components/ui/Price";
import ExchangeIcon from "@components/ui/ExchangeIcon";

const headCells = [{
  key: 'name',
}, {
  key: 'amount',
}, {
  key: 'balance',
}];

const WalletListByAmount = ({ data = [], loading }) => {
  const { t } = useTranslation('common');

  if (loading) return <Spinner />;

  return (
    <Box>
      <Table sx={{ whiteSpace: 'nowrap' }}>
        <TableHead>
          <TableRow>
            {headCells.map(el => (
              <TableCell key={el.key}>
                <Typography variant="h5">{t(el.key)}</Typography>
              </TableCell>
            ))}
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(data).map(key => (
            <TableRow key={key} hover>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <ExchangeIcon icon={data[key].exchange.name} custom={data[key].exchange.custom} sx={{ mr: 1 }} />
                  <Typography fontWeight="600">
                    {data[key].name}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Price amount={data[key].amount} hidePrefix />
              </TableCell>
              <TableCell>
                <Price amount={data[key].total} />
              </TableCell>
              <TableCell align="right">
                <Button
                  component={Link}
                  href={'/app/wallets/' + data[key].id}
                  variant="contained"
                  endIcon={<FeatherIcon  icon="chevron-right"/>}
                  size="small"
                >
                  {t('see')}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default WalletListByAmount;
