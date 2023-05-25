import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import {
  Box, Pagination, Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel, Typography
} from "@mui/material";
import Link from "@components/ui/Link";
import EmptyTable from "@components/ui/EmptyTable";
import CryptoListTableRow from "@components/view/portfolio/CryptoListTableRow";
import { sortTable } from "@utils/formatter";

const headCells = [
  {
  field: 'name',
  key: 'name',
}, {
  field: 'price',
  key: 'price',
}, {
  field: 'amount',
  key: 'amount',
}, {
  field: 'total',
  key: 'total',
}, {
  field: 'usd24hChange',
  key: 'change-daily',
}];

const rowsPerPage = 50;

const CryptoList = ({ data = [] }) => {
  const { t } = useTranslation('common');
  const [state, setState] = useState(data);
  const [page, setPage] = useState(0);
  const [[orderBy, direction], setOrderBy] = useState(["", ""]);

  useEffect(() => {
    setState(data);
  }, [data]);

  const handleSort = (field) => {
    let order = "asc";
    if (field === orderBy) {
      order = direction === "asc" ? "desc" : "asc";
    }

    const operator = direction === "asc" ? "<" : ">";
    const sorted = sortTable(state, field, operator);

    setState(sorted);
    setOrderBy(field);
    setOrderBy([field, order]);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage - 1);
  };

  return (
    <Box>
      {state.length > 0 ? (
        <>
          <Table sx={{ whiteSpace: 'nowrap' }}>
            <TableHead>
              <TableRow>
                {headCells.map(el => (
                  <TableCell
                    key={el.key}
                    sortDirection={orderBy === el.field ? direction : false}
                  >
                    <TableSortLabel
                      active={orderBy === el.field}
                      direction={orderBy === el.field ? direction : 'asc'}
                      onClick={() => handleSort(el.field)}
                    >
                      <Typography variant="h5">{t(el.key)}</Typography>
                    </TableSortLabel>
                  </TableCell>
                ))}
                <TableCell align="right" />
              </TableRow>
            </TableHead>
            <TableBody>
              {state.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(el => (
                <CryptoListTableRow
                  key={el.symbol}
                  item={el}
                />
              ))}
            </TableBody>
          </Table>
          <Box display="flex" justifyContent="flex-end" pt={2}>
            <Pagination
              count={Math.ceil(state.length / rowsPerPage)}
              page={page + 1}
              color="primary"
              showFirstButton={true}
              showLastButton={true}
              onChange={(_, newPage) => handlePageChange(newPage)}
            />
          </Box>
        </>
      ) : (
        <EmptyTable
          message={t('message.empty.title-2', { ns: 'wallets' })}
          buttonText={t('message.empty.btn', { ns: 'wallets' })}
          buttonProps={{
            component: Link,
            href: "/app/wallets/add"
          }}
        />
      )}
    </Box>
  );
};

export default CryptoList;
