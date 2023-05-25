import React  from 'react';
import { useTranslation } from "next-i18next";
import { Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel, Typography } from "@mui/material";
import WalletTableRow from "@components/view/wallets/WalletTableRow";
import useWalletList from "@lib/useWalletList";

const headCells = [{
  field: "#",
  key: '#',
}, {
  field: 'name',
  key: 'name',
}, {
  field: 'exchange.name',
  key: 'exchange-name',
}, {
  field: 'total',
  key: 'balance',
}];

function WalletList({ data }) {
  const { t } = useTranslation();
  const { direction, orderBy, handleSort } = useWalletList();

  return (
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
                onClick={() => handleSort(el.field, data)}
              >
                <Typography variant="h5">{t(el.key)}</Typography>
              </TableSortLabel>
            </TableCell>
          ))}
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((el, index ) => (
          <WalletTableRow
            key={el.id}
            item={{ ...el, index }}
          />
        ))}
      </TableBody>
    </Table>
  );
}

export default WalletList;
