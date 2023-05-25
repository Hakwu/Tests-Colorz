import React from "react";
import { useTranslation } from "next-i18next";
import {
  Box, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Typography
} from "@mui/material";
import { formatBalance } from "@utils/formatter";
import moment from "moment";
import Chip from "@components/ui/Chip";
import useOrders from "@lib/useOrders";
import DeleteConfirmButton from "@components/ui/buttons/DeleteConfirmButton";
// import Backend from "@services/Backend";
import { useSnackbar } from "notistack";
import ExchangeIcon from "@components/ui/ExchangeIcon";

const headCells = [{
  field: 'quoteId',
  key: 'pair',
}, {
  key: 'type',
}, {
  sortable: false,
  key: 'wallet-name',
}, {
  key: 'side',
}, {
  key: 'price',
}, {
  key: 'amount',
}, {
  field: 'cost',
  key: 'total',
}, {
  sortable: false,
  key: 'fee',
}, {
  key: 'doneAt',
}];

const OrderList = ({ cryptoId }) => {
  const { t } = useTranslation('common');
  const { data, handleSort, setPage, orderBy, direction, mutate } = useOrders({ cryptoId });
  const { enqueueSnackbar } = useSnackbar();

  const handleDelete = async (item) => {
    // const { status } = await Backend.deleteOrder(item.id);

    // if (status === 200) {
    //   await mutate();
    //   enqueueSnackbar({ message:'success.order-deleted' });
    // }
  };

  const { meta: pagination, data: orders } = data;

  return (
    <Box>
      <TableContainer>
        <Table sx={{ whiteSpace: 'nowrap' }}>
          <TableHead>
            <TableRow>
              {headCells.map(el => (
                <TableCell
                  key={el.key}
                  align={el?.align || "left"}
                  sortDirection={orderBy === (el.field || el.key) ? direction : false}
                >
                  {el.sortable === false ? (
                    <Typography variant="h5">{t(el.key)}</Typography>
                  ) : (
                    <TableSortLabel
                      active={orderBy === (el.field || el.key)}
                      direction={orderBy === (el.field || el.key) ? direction : 'asc'}
                      onClick={() => handleSort((el.field || el.key))}
                    >
                      <Typography variant="h5">{t(el.key)}</Typography>
                    </TableSortLabel>
                  )}
                </TableCell>
              ))}
              <TableCell/>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders?.map(el => (
              <TableRow key={el.id} hover>
                <TableCell>
                  {el.base.symbol}/{el.quote.symbol}
                </TableCell>
                <TableCell>
                  <Chip size="small" label={t(el.type)} />
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <ExchangeIcon icon={el.wallet.exchange.name} custom={el.wallet.exchange.custom} sx={{ mr: 1 }} />
                    {el.wallet.name}
                  </Box>
                </TableCell>
                <TableCell>
                  <Chip size="small" label={t(el.side)} />
                </TableCell>
                <TableCell>
                  {formatBalance(el.price, "currency", "USD")}
                </TableCell>
                <TableCell>
                  {formatBalance(el.amount)} ({el.base.symbol})
                </TableCell>
                <TableCell>
                  {formatBalance(el.cost)} ({el.quote.symbol})
                </TableCell>
                <TableCell>
                  {el.feeAmount !== null ? `${formatBalance(el.feeAmount)} (${el.feeCurrency.symbol})` : "-" }
                </TableCell>
                <TableCell>
                  {el.doneAt ? moment(el.doneAt).format('DD/MM/YYYY HH:mm:ss') : "-"}
                </TableCell>
                <TableCell>
                  <DeleteConfirmButton
                    onConfirm={() => handleDelete(el)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box display="flex" justifyContent="flex-end" pt={2}>
        <Pagination
          page={pagination?.currentPage || 1}
          count={pagination?.lastPage || 1}
          color="primary"
          showFirstButton={true}
          showLastButton={true}
          onChange={(_, newPage) => setPage(newPage)}
        />
      </Box>
    </Box>
  );
};

export default OrderList;
