import React, { useState } from 'react';
import { useRouter } from "next/router";
import { Alert, Box, Button, Typography } from "@mui/material";
import CustomFormLabel from "@components/ui/forms/CustomFormLabel";
import CustomTextField from "@components/ui/forms/CustomTextField";
// import Backend from "@services/Backend";
import { useFormik } from "formik";
import { resetPasswordValidation } from "@utils/validations";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

function ResetPasswordToken({ token }) {
  const router = useRouter();
  const { t } = useTranslation('common');
  const [[severity, message], setMessage] = useState([null, null]);

  const handleSubmit = async (values) => {
      console.log(values);
    // const { status } = await Backend.resetPassword(token, values);

    // if (status === 200) {
    //   setMessage(['success', t('reset-password.password-updated', { ns: 'auth' })]);
    //   setTimeout(() => {
    //     router.push('/login');
    //   }, 2000);
    // } else {
    //   setMessage(['error', t('unexpected-error', { ns: 'errors' })]);
    // }
  };

  const formik = useFormik({
    initialValues: { email: '', password: '', password_confirmation: '' },
    validationSchema: resetPasswordValidation,
    onSubmit: handleSubmit
  });

  return (
    <>
      <Typography variant="h2" fontWeight="700">
        {t('reset-password.title-2', { ns: 'auth' })}
      </Typography>

      <Typography
        color="textSecondary"
        variant="h5"
        fontWeight="400"
        sx={{
          mt: 2,
        }}
      >
        {t('reset-password.desc-2', { ns: 'auth' })}
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Box mt={3}>
          {(severity && message) && (
            <Alert variant="filled" severity={severity}>{message}</Alert>
          )}
          <CustomFormLabel htmlFor="email">{t('e-mail', { ns:'common' })}</CustomFormLabel>
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

          <CustomFormLabel htmlFor="password">{t('password')}</CustomFormLabel>
          <CustomTextField
            id="password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && t(formik.errors.password, { ns: 'errors' })}
          />

          <CustomFormLabel htmlFor="password_confirmation">{t('password_confirmation')}</CustomFormLabel>
          <CustomTextField
            id="password_confirmation"
            name="password_confirmation"
            type="password"
            variant="outlined"
            fullWidth
            value={formik.values.password_confirmation}
            onChange={formik.handleChange}
            error={formik.touched.password_confirmation && Boolean(formik.errors.password_confirmation)}
            helperText={formik.touched.password_confirmation && t(formik.errors.password_confirmation, { ns: 'errors' })}
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
            {t('reset-password.submit-2', { ns: 'auth' })}
          </Button>
        </Box>
      </form>
    </>
  );
}

export default ResetPasswordToken;

export async function getServerSideProps({ params, locale }) {
  return {
    props: {
      token: params.token,
      ...(await serverSideTranslations(locale, ['common', 'errors', 'auth', 'notifications'])),
    },
  };
}
