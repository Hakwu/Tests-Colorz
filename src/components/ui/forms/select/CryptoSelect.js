import React, { useEffect, useState } from 'react';
import { useTranslation } from "next-i18next";
import Box from '@mui/material/Box';
import Loader from "@components/ui/Loader";
import CryptoIcon from "@components/ui/CryptoIcon";
import CustomTextField from "@components/ui/forms/CustomTextField";
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import useCryptocurrencies from "@lib/useCryptocurrencies";

const _filterOptions = createFilterOptions();

function CryptoSelect({ defaultValue = null, size= "small", onChange, InputProps }) {
  const { t } = useTranslation('common');
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(null);
  const { data, loading } = useCryptocurrencies({ search, limit: 50 });

  useEffect(() => {
    if (defaultValue && !open) {
      setSearch(defaultValue);

      if (!value && data.length > 0) {
        setValue(data[0]);
      }
    }
  }, [data]);

  const filterOptions = React.useCallback((options, state) => {
    const results = _filterOptions(options, state);

    if (results.length === 0 && state.inputValue.length > 0) {
      setSearch(state.inputValue);
    }

    return results;
  }, []);


  const handleChange = (e, newValue) => {
    setValue(newValue);
    onChange(newValue);
  };

  const isLoading = loading && open && search !== null;

  return (
    <Autocomplete
      fullWidth
      open={open}
      options={data}
      value={value}
      onChange={handleChange}
      onInputChange={(e) => open ? setSearch(e?.target?.value || '') : null}
      loading={isLoading}
      noOptionsText={search === null ? t('enter-text-autocomplete') : t('no-options')}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      loadingText={t('loading-autocomplete')}
      //filterOptions={filterOptions}
      getOptionLabel={(option) => `${option.name} (${option.symbol})`}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      renderOption={(props, option) => (
        <Box
          key={option.id}
          component="li"
          sx={{ fontSize: 15, '& > span': { mr: '10px' } }}
          {...props}
        >
          <span>
          <CryptoIcon name={option.name} icon={option.logo} />
          </span>
          {option.name} ({option.symbol})
        </Box>
      )}
      renderInput={(params) => (
        <CustomTextField
          {...params}
          {...InputProps}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <Box display="flex" mr={4}>
                {isLoading ? <Loader size={20} /> : null}
                {params.InputProps.endAdornment}
              </Box>
            ),
          }}
          placeholder="Bitcoin (BTC)"
          size={size}
        />
      )}
    />
  );
}

export default CryptoSelect;
