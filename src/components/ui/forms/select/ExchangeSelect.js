import React from 'react';
import CustomSelect from "@components/ui/forms/CustomSelect";
import { Box, MenuItem } from "@mui/material";
import useExchanges from "@lib/useExchanges";
import ExchangeIcon from "@components/ui/ExchangeIcon";

function ExchangeSelect({ setFieldValue, ...props }) {
  const { exchanges } = useExchanges();

  const handleChange = (e) => {
    const { reqPassword, custom } = exchanges.find(el => el.id === e.target.value);

    if (!reqPassword || custom)
      setFieldValue('password', '');

    if (custom) {
      setFieldValue('secretKey', '');
      setFieldValue('publicKey', '');
    }

    setFieldValue('custom', custom);
    setFieldValue('withPassword', reqPassword);
    props.onChange(e);
  };

  return (
    <CustomSelect
      labelId="exchangeId"
      id="exchangeId"
      name="exchangeId"
      fullWidth
      size="small"
      value={props.value}
      onChange={handleChange}
    >
      {exchanges.map(el => (
        <MenuItem key={el.id} value={el.id}>
          <Box display="flex">
            <ExchangeIcon icon={el.name} sx={{ mr: 1 }} custom={el.custom} />
            {el.name}
          </Box>
        </MenuItem>
      ))}
    </CustomSelect>
  );
}

export default ExchangeSelect;
