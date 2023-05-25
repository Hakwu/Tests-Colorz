import React from 'react';
import { useTranslation } from "next-i18next";
import { useFormik } from "formik";
import { addTransactionValidation } from "@utils/validations";
import Modal from "@components/ui/Modal";
import {
  Box, Button, FormControl, FormControlLabel, FormHelperText, Grid, InputAdornment, MenuItem, RadioGroup, Typography
} from "@mui/material";
import CustomFormLabel from "@components/ui/forms/CustomFormLabel";
import CustomTextField from "@components/ui/forms/CustomTextField";
import { DateTimePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import CryptoSelect from "@components/ui/forms/select/CryptoSelect";
import CustomRadio from "@components/ui/forms/CustomRadio";
import WalletSelect from "@components/ui/forms/select/WalletSelect";
// import Backend from "@services/Backend";
import { useSnackbar } from "notistack";

function AddTransactionModal({ open = false, onClose }) {
  const { t } = useTranslation('common');
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    // const { data, status } = await Backend.addTransaction(values);

    if (status === 200) {
      enqueueSnackbar({ message: 'success.added', options: { type: t(values.type) } });
      handleClose();
    } else {
      enqueueSnackbar({ message: `error.${data.error}`, variant: 'error' });
    }
  };

  const formik = useFormik({
    initialValues: { currencyId: "", walletId: "", amount: 0,  doneAt: new Date(), type: "deposit" },
    validationSchema: addTransactionValidation,
    onSubmit: handleSubmit
  });

  const handleClose = () => {
    onClose();
    formik.resetForm();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Typography variant="h2" textAlign="center" fontWeight="600" gutterBottom>
        {t('add-deposit-withdrawal')}
      </Typography>
      <form onSubmit={formik.handleSubmit} noValidate>
        <Grid container rowSpacing={0} columnSpacing={2}>
          <Grid item xs={12} lg={6}>
            <CustomFormLabel htmlFor="currencyId">{t('currency')}</CustomFormLabel>
            <CryptoSelect
              id="currencyId"
              onChange={(value) => formik.setFieldValue("currencyId", value?.id || "")}
              InputProps={{
                error: formik.touched.currencyId && Boolean(formik.errors.currencyId),
                helperText: formik.touched.currencyId && t(formik.errors.currencyId, { ns: 'errors' })
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

          <Grid item xs={12} lg={6}>
            <CustomFormLabel htmlFor="amount">{t('type')}</CustomFormLabel>
            <RadioGroup row name="type" value={formik.values.type} onChange={(e) => formik.setFieldValue('type', e.target.value)}>
              <FormControlLabel value="deposit" label={t('deposit')} control={<CustomRadio />} />
              <FormControlLabel value="withdrawal" label={t('withdrawal')}  control={<CustomRadio />} />
            </RadioGroup>
          </Grid>

          <Grid item xs={12} lg={6}>
            <CustomFormLabel htmlFor="doneAt">{t('doneAt')}</CustomFormLabel>
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


        </Grid>
        <Box textAlign="center" mt={3}>
          <Button color="primary" variant="contained" type="submit">
            {t('add')}
          </Button>
        </Box>
      </form>
    </Modal>
  );
}

export default AddTransactionModal;
