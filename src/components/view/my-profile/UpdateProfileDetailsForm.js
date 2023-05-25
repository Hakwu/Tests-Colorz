import React from 'react';
import { Box, Button } from "@mui/material";
import { useFormik } from "formik";
import { useTranslation } from "next-i18next";
import useProfile from "@lib/useProfile";
import CustomFormLabel from "@components/ui/forms/CustomFormLabel";
import CustomTextField from "@components/ui/forms/CustomTextField";
import { updateProfileDetails } from "@utils/validations";
import FormLayout from "@components/ui/forms/FormLayout";

function UpdateProfileDetailsForm({ onSubmit }) {
  const { profile } = useProfile();
  const { t } = useTranslation('common');

  const formik = useFormik({
    initialValues: { email: profile.email, name: profile.name },
    validationSchema: updateProfileDetails,
    onSubmit: onSubmit
  });


  return (
    <FormLayout title={t('update-profile')} onSubmit={formik.handleSubmit}>
      <CustomFormLabel htmlFor="name">{t('name', { ns: 'common' })}</CustomFormLabel>
      <CustomTextField
        id="name"
        name="name"
        variant="outlined"
        fullWidth
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && t(formik.errors.name, { ns: 'errors' })}
      />

      <CustomFormLabel htmlFor="email">{t('e-mail', { ns: 'common' })}</CustomFormLabel>
      <CustomTextField
        id="email"
        name="email"
        variant="outlined"
        fullWidth
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && t(formik.errors.email, { ns: 'errors' })}
      />

      <Box textAlign="center" mt={3}>
        <Button color="primary" variant="contained" type="submit">
          {t('update')}
        </Button>
      </Box>
    </FormLayout>
  );
}

export default UpdateProfileDetailsForm;
