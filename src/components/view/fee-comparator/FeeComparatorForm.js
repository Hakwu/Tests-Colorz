import React from 'react';
import { Box, Button, FormControlLabel, Grid, RadioGroup } from "@mui/material";
import CustomFormLabel from "@components/ui/forms/CustomFormLabel";
import CryptoSelect from "@components/ui/forms/select/CryptoSelect";
import CustomTextField from "@components/ui/forms/CustomTextField";
import CustomRadio from "@components/ui/forms/CustomRadio";
// import Backend from "@services/Backend";
import { useFormik } from "formik";
import { feeComparatorValidation } from "@utils/validations";
import { useTranslation } from "next-i18next";

function FeeComparatorForm({ onSubmit, base }) {
  const { t } = useTranslation('common');

  const handleSubmit = async (values) => {
    // onSubmit([]);
    // const { data, status } = await Backend.feeComparator(values);

    // if (status === 200) {
    //   onSubmit(data);
    // }
  };

  const formik = useFormik({
    initialValues: { base: base || '', quote: base ? "USDT": "",  amount: 1, type: 'taker', side: 'buy' },
    validationSchema: feeComparatorValidation,
    onSubmit: handleSubmit
  });

  return (
    <form onSubmit={formik.handleSubmit} noValidate>
      <Grid container columnSpacing={2} style={{ alignItems: "center" }}>
        <Grid item xs={3}>
          <CustomFormLabel htmlFor="amount">{t('side')}</CustomFormLabel>
          <RadioGroup row name="side" value={formik.values.side} onChange={(e) => formik.setFieldValue('side', e.target.value)}>
            <FormControlLabel value="buy" label={t('buy')} control={<CustomRadio />} />
            <FormControlLabel value="sell" label={t('sell')} control={<CustomRadio />} />
          </RadioGroup>
        </Grid>
        <Grid item xs={12}>
          <CustomFormLabel htmlFor="pair">{t('pair')}</CustomFormLabel>
          <Grid container columnSpacing={2}>
            <Grid item xs={6}>
              <CryptoSelect
                id="base"
                size="large"
                defaultValue={base ? formik.values.base : null}
                onChange={(value) => formik.setFieldValue("base", value?.symbol || "")}
                InputProps={{
                  error: formik.touched.base && Boolean(formik.errors.base),
                  helperText: formik.touched.base && t(formik.errors.base, { ns: 'errors' })
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <CryptoSelect
                id="quote"
                size="large"
                defaultValue={base ? formik.values.quote : null}
                onChange={(value) => formik.setFieldValue("quote", value?.symbol || "")}
                InputProps={{
                  error: formik.touched.quote && Boolean(formik.errors.quote),
                  helperText: formik.touched.quote && t(formik.errors.quote, { ns: 'errors' })
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <CustomFormLabel htmlFor="amount">{t('amount')}</CustomFormLabel>
          <CustomTextField
            id="amount"
            name="amount"
            type="number"
            fullWidth
            size="large"
            value={formik.values.amount}
            onChange={formik.handleChange}
            error={formik.touched.amount && Boolean(formik.errors.amount)}
            helperText={formik.touched.amount && t(formik.errors.amount, { ns: 'errors' })}
            inputProps={{ min: 0, step: 0.1 }}
          />
        </Grid>

        <Grid item xs={6}>
          <CustomFormLabel htmlFor="type">{t('type')}</CustomFormLabel>
          <RadioGroup row name="type" value={formik.values.type} onChange={(e) => formik.setFieldValue('type', e.target.value)}>
            <FormControlLabel value="taker" label={`${t("market")} (Taker)`} control={<CustomRadio />} />
            <FormControlLabel value="maker" label={`${t("limit")} (Maker)`}   control={<CustomRadio />} />
          </RadioGroup>
        </Grid>
      </Grid>


      <Box textAlign="center" mt={3}>
        <Button
          color="primary"
          variant="contained"
          type="submit"
          size="large"
          disabled={formik.isSubmitting}
        >
          {t('submit')}
        </Button>
      </Box>
    </form>
  );
}

export default FeeComparatorForm;
