import React from 'react';
import { Box, Button } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useFormik } from "formik";
import { updateProfilePassword } from "@utils/validations";
import CustomFormLabel from "@components/ui/forms/CustomFormLabel";
import FormLayout from "@components/ui/forms/FormLayout";
import CustomTextFieldPassword from "@components/ui/forms/CustomTextFieldPassword";

function UpdateProfilePasswordForm({ onSubmit }) {
  const { t } = useTranslation('common');

  const formik = useFormik({
    initialValues: { password: '', new_password: '', new_password_confirmation: '' },
    validationSchema: updateProfilePassword,
    onSubmit: (values, form) => {
      onSubmit(values);
      form.resetForm();
    }
  });

  return (
    <FormLayout title={t('update-password')} onSubmit={formik.handleSubmit}>
      <CustomFormLabel htmlFor="password">{t('password')}</CustomFormLabel>
      <CustomTextFieldPassword
        id="password"
        name="password"
        size="small"
        variant="outlined"
        fullWidth
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && t(formik.errors.password, { ns: 'errors' })}
      />

      <CustomFormLabel htmlFor="new_password">{t('new_password')}</CustomFormLabel>
      <CustomTextFieldPassword
        id="new_password"
        name="new_password"
        size="small"
        variant="outlined"
        fullWidth
        value={formik.values.new_password}
        onChange={formik.handleChange}
        error={formik.touched.new_password && Boolean(formik.errors.new_password)}
        helperText={formik.touched.new_password && t(formik.errors.new_password, { ns: 'errors' })}
      />

      <CustomFormLabel htmlFor="new_password_confirmation">{t('new_password_confirmation')}</CustomFormLabel>
      <CustomTextFieldPassword
        id="new_password_confirmation"
        name="new_password_confirmation"
        size="small"
        variant="outlined"
        fullWidth
        value={formik.values.new_password_confirmation}
        onChange={formik.handleChange}
        error={formik.touched.new_password_confirmation && Boolean(formik.errors.new_password_confirmation)}
        helperText={formik.touched.new_password_confirmation && t(formik.errors.new_password_confirmation, { ns: 'errors' })}
      />


      <Box textAlign="center" mt={3}>
        <Button color="primary" variant="contained" type="submit">
          {t('update')}
        </Button>
      </Box>
    </FormLayout>
  );
}

export default UpdateProfilePasswordForm;
