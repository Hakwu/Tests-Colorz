import React  from 'react';
import { useTranslation } from "next-i18next";
import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import Link from "@components/ui/Link";
import useAlerts from "@lib/useAlerts";
import DeleteConfirmButton from "@components/ui/buttons/DeleteConfirmButton";
// import Backend from "@services/Backend";
import { useSnackbar } from "notistack";
import CryptoIcon from "@components/ui/CryptoIcon";
import Chip from "@components/ui/Chip";
import { formatBalance } from "@utils/formatter";

const headCells = [
  { field: 'name', key: 'name' }, { field: 'crypto', key: 'currency' }, { field: 'type', key: 'when' }, { field: 'price', key: 'price' }
];

function AlertList() {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const { data, orderBy, direction, mutate } = useAlerts();
  const currency = "$";

  const handleDelete = async (item) => {
    // const { status } = await Backend.deleteAlert(item.id);

    // if (status === 200) {
    //   await mutate();
    //   enqueueSnackbar({ message: 'success.alert-deleted' });
    // }
  };

  return (
    <Table sx={{ whiteSpace: 'nowrap' }}>
      <TableHead>
        <TableRow>
          {headCells.map(el => (
            <TableCell key={el.key} sortDirection={orderBy === el.field ? direction : false}>
              <Typography variant="h5">{t(el.key)}</Typography>

              {/*<TableSortLabel
                active={orderBy === el.field}
                direction={orderBy === el.field ? direction : 'asc'}
                //onClick={() => handleSort(el.field)}
              >
                <Typography variant="h5">{t(el.key)}</Typography>
              </TableSortLabel>*/}
            </TableCell>
          ))}
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={item.id || index} hover>
            <TableCell sx={{ width: "200px" }}>
              <Typography fontWeight="600">
                {item.name}
              </Typography>
            </TableCell>
            <TableCell>
              <Button
                component={Link}
                href={"/app/cryptocurrencies/" + item.crypto.id}
              >
                <CryptoIcon name={item.crypto.name} icon={item.crypto?.logo || item.crypto.symbol} size={25} />
                <Box ml={1}>
                  <Typography fontWeight="600">
                    {item.crypto.name}
                  </Typography>
                </Box>
              </Button>
            </TableCell>
            <TableCell>
              <Chip label={t(`types.${item.type}`, { ns: "alerts" })} color={item.type === "MIN" ? "primary" : "secondary"}/>
            </TableCell>
            <TableCell>
              {formatBalance(item.price, "currency", "USD")}
            </TableCell>
            <TableCell>
              <DeleteConfirmButton onConfirm={() => handleDelete(item)} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default AlertList;
