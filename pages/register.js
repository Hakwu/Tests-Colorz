import React, { useState } from 'react';
import { useTranslation } from "next-i18next";

import { Box, Typography, Button, Alert } from '@mui/material';

import Link from '@components/ui/Link';
import CustomFormLabel from "@components/ui/forms/CustomFormLabel";
import CustomTextField from "@components/ui/forms/CustomTextField";

import { useFormik } from "formik";
import { registerValidation } from "@utils/validations";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
// import Backend from "@services/Backend";
import CustomTextFieldPassword from "@components/ui/forms/CustomTextFieldPassword";

const Register = () => {
  const router = useRouter();
  const { t } = useTranslation(['auth', 'common']);
  const [[severity, message], setMessage] = useState([null, null]);

  const handleSubmit = async (values) => {
    // const { data, status } = await Backend.register(values);

    // if (status === 200) {
    //   router.push('/app');
    // } else {
    //   setMessage(['error', t('message.email-already-taken')]);
    // }
  };

  const formik = useFormik({
    initialValues: { name: '', email: '', password: '' },
    validationSchema: registerValidation,
    onSubmit: handleSubmit
  });


  return (
    <>
      <Typography fontWeight="700" variant="h2">
        {t('register.title')}
      </Typography>
      <Box display="flex" alignItems="center">
        <Typography
          color="textSecondary"
          variant="h6"
          fontWeight="400"
          sx={{
            mr: 1,
          }}
        >
          {t('register.desc')}
        </Typography>
        <Typography
          component={Link}
          href="/login"
          fontWeight="500"
          sx={{
            display: 'block',
            textDecoration: 'none',
            color: 'primary.main',
          }}
        >
          {t('register.desc-href')}
        </Typography>
      </Box>
      <form onSubmit={formik.handleSubmit} noValidate>
        <Box mt={3}>
          {(severity && message) && (
            <Alert variant="filled" severity={severity}>{message}</Alert>
          )}
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
          <CustomFormLabel htmlFor="password">{t('password', { ns: 'common' })}</CustomFormLabel>
          <CustomTextFieldPassword
            id="password"
            name="password"
            variant="outlined"
            fullWidth
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && t(formik.errors.password, { ns: 'errors' })}
            sx={{
              mb: 3,
            }}
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
            }}
          >
            {t('register.sign-up')}
          </Button>


        </Box>
      </form>
    </>
  );
};

export default Register;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'errors', 'auth', 'notifications'])),
    },
  };
}
