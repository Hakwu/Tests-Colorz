import React from 'react';
import { useTranslation } from "next-i18next";
import { useFormik } from "formik";
import { addAlertValidation } from "@utils/validations";
import Modal from "@components/ui/Modal";
import { Box, Button, FormControlLabel, Grid, InputAdornment, RadioGroup, Typography } from "@mui/material";
import CustomFormLabel from "@components/ui/forms/CustomFormLabel";
import CustomTextField from "@components/ui/forms/CustomTextField";
import CryptoSelect from "@components/ui/forms/select/CryptoSelect";
// import Backend from "@services/Backend";
import { useSnackbar } from "notistack";
import CustomRadio from "@components/ui/forms/CustomRadio";
import useAlerts from "@lib/useAlerts";

function AddAlertModal({ open = false, onClose }) {
  const { t } = useTranslation('common');
  const { mutate } = useAlerts();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    // const { data, status } = await Backend.addAlert(values);

    // if (status === 200) {
    //   await mutate();
    //   enqueueSnackbar({ message: 'success.alert-added' });
    //   handleClose();
    // } else {
    //   enqueueSnackbar({ message: `error.${data.error}`, variant: 'error' });
    // }
  };

  const formik = useFormik({
    initialValues: { name: "", cryptoId: "", price: 0, type: "MIN" },
    validationSchema: addAlertValidation,
    onSubmit: handleSubmit
  });

  const handleClose = () => {
    onClose();
    formik.resetForm();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Typography variant="h2" textAlign="center" fontWeight="600" gutterBottom>
        {t('add.title', { ns: 'alerts' })}
      </Typography>
      <form onSubmit={formik.handleSubmit} noValidate>
        <Grid container rowSpacing={0} columnSpacing={2}>
          <Grid item xs={12}>
            <CustomFormLabel htmlFor="name">{t('name')}</CustomFormLabel>
            <CustomTextField
              id="name"
              name="name"
              fullWidth
              size="small"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && t(formik.errors.name, { ns: 'errors' })}
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <CustomFormLabel htmlFor="cryptoId">{t('currency')}</CustomFormLabel>
            <CryptoSelect
              id="cryptoId"
              onChange={(value) => formik.setFieldValue("cryptoId", value?.id || "")}
              InputProps={{
                error: formik.touched.cryptoId && Boolean(formik.errors.cryptoId),
                helperText: formik.touched.cryptoId && t(formik.errors.cryptoId, { ns: 'errors' })
              }}
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <CustomFormLabel htmlFor="price">{t('price')}</CustomFormLabel>
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

          <Grid item xs={12}>
            <CustomFormLabel htmlFor="type">{t('when')}</CustomFormLabel>
            <RadioGroup row name="type" value={formik.values.type} onChange={(e) => formik.setFieldValue('type', e.target.value)}>
              <FormControlLabel value="MIN" label={t('types.MIN', { ns: "alerts" })} control={<CustomRadio />} />
              <FormControlLabel value="MAX" label={t('types.MAX', { ns: "alerts" })}  control={<CustomRadio />} />
            </RadioGroup>
          </Grid>
        </Grid>
        <Box textAlign="center" mt={3}>
          <Button color="primary" variant="contained" type="submit" disabled={formik.isSubmitting}>
            {t('add')}
          </Button>
        </Box>
      </form>
    </Modal>
  );
}

export default AddAlertModal;
