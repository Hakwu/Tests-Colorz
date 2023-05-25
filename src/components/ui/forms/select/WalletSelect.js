import React from 'react';
import CustomSelect from "@components/ui/forms/CustomSelect";
import { Box, MenuItem } from "@mui/material";
import useSWR from "swr";
import ExchangeIcon from "@components/ui/ExchangeIcon";

function WalletSelect({ ...props }) {
  const { data } = useSWR('/wallet');

  const wallets = data?.data || [];

  return (
    <CustomSelect
      labelId="walletId"
      id="walletId"
      name="walletId"
      fullWidth
      size="small"
      value={props.value}
      onChange={props.onChange}
    >
      {wallets.map(el => (
        <MenuItem key={el.id} value={el.id} sx={{ display: 'flex' }}>
          <Box display="flex">
            <ExchangeIcon icon={el?.exchange.name} sx={{ mr: 1 }} custom={el?.exchange.custom} />
            {el.name}
          </Box>
        </MenuItem>
      ))}
    </CustomSelect>
  );
}

export default WalletSelect;
