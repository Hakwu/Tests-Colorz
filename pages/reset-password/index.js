import React, { useState } from 'react';
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { Box, Typography, Button, Alert } from '@mui/material';

import Link from '@components/ui/Link';
import CustomFormLabel from "@components/ui/forms/CustomFormLabel";
import CustomTextField from "@components/ui/forms/CustomTextField";


import { emailValidation } from "@utils/validations";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import Backend from "@services/Backend";


const ResetPassword = () => {
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const { t } = useTranslation(['auth', 'common']);

  const handleSubmit = async (values) => {
    // const { status } = await Backend.forgotPassword(values);

    // if (status === 200) {
    //   setSuccess(true);
    //   setTimeout(() => {
    //     router.push('/login');
    //   }, 2000);
    // }

  };

  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema: emailValidation,
    onSubmit: handleSubmit
  });

  return (
    <>
      <Typography variant="h2" fontWeight="700">
        {t('reset-password.title')}
      </Typography>

      <Typography
        color="textSecondary"
        variant="h5"
        fontWeight="400"
        sx={{
          mt: 2,
        }}
      >
        {t('reset-password.desc')}
      </Typography>
      <form onSubmit={formik.handleSubmit} noValidate>
        <Box mt={3}>
          {success && (
            <Alert variant="filled" severity="success">
              {t('reset-password.sended')}
            </Alert>
          )}
          <CustomFormLabel htmlFor="reset-email">{t('e-mail', { ns:'common' })}</CustomFormLabel>
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

          <Button
            color="secondary"
            variant="contained"
            size="large"
            fullWidth
            type="submit"
            sx={{
              pt: '10px',
              pb: '10px',
              mt: 4,
            }}
          >
            {t('reset-password.submit')}
          </Button>
          <Button
            color="secondary"
            size="large"
            fullWidth
            component={Link}
            href="/login"
            sx={{
              pt: '10px',
              pb: '10px',
              mt: 2,
            }}
          >
            {t('reset-password.back-login')}
          </Button>
        </Box>
      </form>
    </>
  );
};

export default ResetPassword;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'errors', 'auth', 'notifications'])),
    },
  };
}
