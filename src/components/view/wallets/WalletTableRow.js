import React, { useState } from 'react';
import { Box, Button, IconButton, TableCell, TableRow, Tooltip, Typography } from "@mui/material";
import FeatherIcon from "feather-icons-react";
import DeleteConfirmButton from "@components/ui/buttons/DeleteConfirmButton";
import Link from "@components/ui/Link";
// import Backend from "@services/Backend";
import { useTranslation } from "next-i18next";
import CustomTextField from "@components/ui/forms/CustomTextField";
import useWalletList from "@lib/useWalletList";
import { useSnackbar } from "notistack";
import Price from "@components/ui/Price";
import Loader from "@components/ui/Loader";
import ExchangeIcon from "@components/ui/ExchangeIcon";

function WalletTableRow({ item }) {
  const { t } = useTranslation();
  const { mutate } = useWalletList();
  const { enqueueSnackbar } = useSnackbar();
  const [name, setName] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const handleDelete = async (item) => {
    // const { status } = await Backend.deleteWallet(item.id);

    // if (status === 200) {
    //   await mutate();
    //   enqueueSnackbar({ message: 'success.wallet-deleted' });
    // }
  };

  const handleEditName = async (item) => {
    // if (item.name !== name) {
    //   const { status } = await Backend.editWalletName(item.id, name);

    //   if (status === 200) {
    //     enqueueSnackbar({ message: 'success.wallet-name-edited' });
    //     await mutate();
    //   }
    }
    // setSelectedId(null);
  };

  const handleSelect = (id) => {
    setSelectedId(id);
  };

  const selected = selectedId === item.id;

  return (
    <TableRow key={item.id} hover>
      <TableCell>{item.index + 1}</TableCell>
      <TableCell sx={{ width: "200px" }}>
        <Box>
          {selected ? (
            <CustomTextField
              autoFocus
              size="small"
              defaultValue={name || item.name}
              onChange={({ target }) => setName(target.value)}
              onFocus={({ target }) => setName(target.value)}
              sx={{ ml: -1 }}
            />
          ) : (
            <Typography fontWeight="600">
              {name || item.name}
            </Typography>
          )}
        </Box>
      </TableCell>
      <TableCell>
        <Box display="flex" alignItems="center">
          <ExchangeIcon icon={item?.exchange.name} custom={item?.exchange.custom} sx={{ mr: 1 }} />
          {item?.exchange.name}
        </Box>
      </TableCell>
      <TableCell>
        {!item.pulling ? <Price amount={item.total} /> : (
          <Box display="flex" alignItems="center">
            <Loader size={20} sx={{ mr: 1 }} />
            {t('wallet-sync')}
          </Box>
        )}
      </TableCell>
      <TableCell align="right">
        <Box display="flex" alignItems="center" justifyContent="flex-end">
          <Tooltip title={selected ? t('validate') : t('edit')} placement="top">
            <IconButton
              variant="contained"
              color="success"
              size="large"
              onClick={() => selected ? handleEditName(item) : handleSelect(item.id)}
              sx={{ backgroundColor: (theme) => theme.palette.danger.light, mr: 2 }}
            >
              <FeatherIcon icon={selected ? "check" : "edit-2"} width="18" height="18" />
            </IconButton>
          </Tooltip>
          <DeleteConfirmButton
            onConfirm={() => handleDelete(item)}
          />
          <Button
            component={Link}
            href={'/app/wallets/' + item.id}
            variant="contained"
            endIcon={<FeatherIcon  icon="chevron-right"/>}
            disabled={item.pulling}
            sx={{ ml: 2 }}
          >
            {t('details')}
          </Button>
        </Box>

      </TableCell>
    </TableRow>
  );
}

export default WalletTableRow;
