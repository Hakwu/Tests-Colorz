import React from 'react';
import { useTranslation } from "next-i18next";
import { useFormik } from "formik";
import { addOrderValidation } from "@utils/validations";
import Modal from "@components/ui/Modal";
import {
  Box, Button, FormControl, FormControlLabel, FormHelperText, Grid, InputAdornment, MenuItem, RadioGroup, Typography
} from "@mui/material";
import CustomFormLabel from "@components/ui/forms/CustomFormLabel";
import CustomTextField from "@components/ui/forms/CustomTextField";
import CustomSelect from "@components/ui/forms/CustomSelect";
import { DateTimePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import CryptoSelect from "@components/ui/forms/select/CryptoSelect";
import CustomRadio from "@components/ui/forms/CustomRadio";
import WalletSelect from "@components/ui/forms/select/WalletSelect";
// import Backend from "@services/Backend";
import { useSnackbar } from "notistack";

function AddOrderModal({ open = false, onClose }) {
  const { t } = useTranslation('common');
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    // const { data, status } = await Backend.addOrder(values);

    if (status === 200) {
      enqueueSnackbar({ message: 'success.order-added' });
      handleClose();
    } else {
      enqueueSnackbar({ message: `error.${data.error}`, variant: 'error' });
    }
  };

  const formik = useFormik({
    initialValues: { baseId: "", quoteId: "", walletId: "", price: 0, amount: 0, fee: null, doneAt: new Date(), type: "", side: "buy" },
    validationSchema: addOrderValidation,
    onSubmit: handleSubmit
  });

  const handleChangeCost = ({ target: { value: cost } }) => {
    const { price, amount } = formik.values;
    const newPrice = amount > 0 ? cost / amount : price;
    formik.setFieldValue('price', newPrice);
  };

  const handleClose = () => {
    onClose();
    formik.resetForm();
  };

  const types = ["market", "limit"];

  return (
    <Modal open={open} onClose={handleClose}>
      <Typography variant="h2" textAlign="center" fontWeight="600" gutterBottom>
        {t('add-orders')}
      </Typography>
      <form onSubmit={formik.handleSubmit} noValidate>
        <Grid container rowSpacing={0} columnSpacing={2}>
          <Grid item xs={12} lg={6}>
            <CustomFormLabel htmlFor="baseId">{t('Base')}</CustomFormLabel>
            <CryptoSelect
              id="baseId"
              onChange={(value) => formik.setFieldValue("baseId", value?.id || "")}
              InputProps={{
                error: formik.touched.baseId && Boolean(formik.errors.baseId),
                helperText: formik.touched.baseId && t(formik.errors.baseId, { ns: 'errors' })
              }}
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <CustomFormLabel htmlFor="quoteId">{t('Quote')}</CustomFormLabel>
            <CryptoSelect
              id="quoteId"
              onChange={(value) => formik.setFieldValue("quoteId", value?.id || "")}
              InputProps={{
                error: formik.touched.quoteId && Boolean(formik.errors.quoteId),
                helperText: formik.touched.quoteId && t(formik.errors.quoteId, { ns: 'errors' })
              }}
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <FormControl error={formik.touched.walletId && Boolean(formik.errors.walletId)} fullWidth>
              <CustomFormLabel htmlFor="walletId">{t('wallet-name')}</CustomFormLabel>
              <WalletSelect
                value={formik.values.walletId}
                onChange={formik.handleChange}
              />
              {formik.touched.walletId && <FormHelperText>{t(formik.errors.walletId, { ns: 'errors' })}</FormHelperText>}
            </FormControl>
          </Grid>

          <Grid item xs={12} lg={6}>
            <CustomFormLabel>{t('side')}</CustomFormLabel>
            <RadioGroup row name="side" value={formik.values.side} onChange={(e) => formik.setFieldValue('side', e.target.value)}>
              <FormControlLabel value="buy" label={t('buy')} control={<CustomRadio />} />
              <FormControlLabel value="sell" label={t('sell')}  control={<CustomRadio />} />
            </RadioGroup>
          </Grid>


          <Grid item xs={12} lg={4}>
            <CustomFormLabel htmlFor="amount">{t('amount')}</CustomFormLabel>
            <CustomTextField
              id="amount"
              name="amount"
              type="number"
              fullWidth
              size="small"
              value={formik.values.amount}
              onChange={formik.handleChange}
              error={formik.touched.amount && Boolean(formik.errors.amount)}
              helperText={formik.touched.amount && t(formik.errors.amount, { ns: 'errors' })}
              inputProps={{ min: 0, step: 0.1 }}
            />
          </Grid>

          <Grid item xs={12} lg={4}>
            <CustomFormLabel htmlFor="price">{t(`${formik.values.side}-price`)}</CustomFormLabel>
            <CustomTextField
              id="price"
              name="price"
              type="number"
              fullWidth
              size="small"
              value={formik.values.price}
              onChange={formik.handleChange}
              error={formik.touched.price && Boolean(formik.errors.price)}
              helperText={formik.touched.price && t(formik.errors.price, { ns: 'errors' })}
              inputProps={{ min: 0, step: 0.1 }}
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />
          </Grid>

          <Grid item xs={12} lg={4}>
            <CustomFormLabel htmlFor="amount">{t('cost')}</CustomFormLabel>
            <CustomTextField
              type="number"
              fullWidth
              size="small"
              value={formik.values.amount * formik.values.price}
              onChange={handleChangeCost}
              inputProps={{ min: 0, step: 0.1 }}
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <CustomFormLabel htmlFor="doneAt">{t(`${formik.values.side}-date`)}</CustomFormLabel>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={
                  (props) => <CustomTextField {...props} helperText={formik.touched.doneAt && t(formik.errors.doneAt, { ns: 'errors' })} fullWidth size="small" />
                }
                maxDate={new Date()}
                value={formik.values.doneAt}
                onChange={value => formik.setFieldValue("doneAt", value)}
                error={formik.touched.doneAt && Boolean(formik.errors.doneAt)}
              />
            </LocalizationProvider>
          </Grid>

          <Grid item xs={12} lg={6}>
            <FormControl error={formik.touched.type && Boolean(formik.errors.type)} fullWidth>
              <CustomFormLabel htmlFor="type">{t('type')}</CustomFormLabel>
              <CustomSelect
                labelId="type"
                id="type"
                name="type"
                size="small"
                value={formik.values.type}
                onChange={formik.handleChange}
              >
                {types.map(el => (
                  <MenuItem key={el} value={el}>{t(el)}</MenuItem>
                ))}
              </CustomSelect>
              {formik.touched.type && <FormHelperText>{t(formik.errors.type, { ns: 'errors' })}</FormHelperText>}
            </FormControl>
          </Grid>

        </Grid>
        <Box textAlign="center" mt={3}>
          <Button color="primary" variant="contained" type="submit">
            {t('add-orders')}
          </Button>
        </Box>
      </form>
    </Modal>
  );
}

export default AddOrderModal;
