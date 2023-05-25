import React, { useState } from 'react';
import FeatherIcon from "feather-icons-react";
import { Alert, Box, Button, Container, Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
// import Backend from "@services/Backend";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import CustomFormLabel from "@components/ui/forms/CustomFormLabel";
import CustomTextField from "@components/ui/forms/CustomTextField";
import { contactValidation } from "@utils/validations";

function Contact() {
  const { t } = useTranslation('common');
  const [success, setSuccess] = useState(false);

  // const handleSubmit = async (values) => {
  //   const { status } = await Backend.contact(values);

  //   if (status === 200) {
  //     setSuccess(true);
  //   }
  // };

  const formik = useFormik({
    initialValues: { email: '', subject: '', message: '' },
    validationSchema: contactValidation,
    onSubmit: handleSubmit
  });

  return (
    <Container sx={{ height: '100vh', display: 'flex' }}>
      <Box width="600px" margin="auto">
        <Typography variant="h1" fontWeight="700" gutterBottom>
          <Stack direction="row" alignItems="center" justifyContent="center" gap={1}>
            <FeatherIcon icon="send" size={30} />
            {t('contact.title')}
          </Stack>
        </Typography>
        <Typography variant="h5" fontWeight="500" color="textSecondary" textAlign="center">
          {t('contact.description')}
        </Typography>
        <form onSubmit={formik.handleSubmit} noValidate>
          <Box mt={3}>
            {success && (
              <Alert variant="filled" severity="success">
                {t('contact.send')}
              </Alert>
            )}

            <CustomFormLabel htmlFor="name">{t('e-mail')}</CustomFormLabel>
            <CustomTextField
              id="email"
              name="email"
              type="email"
              variant="outlined"
              size="large"
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && t(formik.errors.email, { ns: 'errors' })}
            />

            <CustomFormLabel htmlFor="name">{t('subject')}</CustomFormLabel>
            <CustomTextField
              id="subject"
              name="subject"
              variant="outlined"
              size="large"
              fullWidth
              value={formik.values.subject}
              onChange={formik.handleChange}
              error={formik.touched.subject && Boolean(formik.errors.subject)}
              helperText={formik.touched.subject && t(formik.errors.subject, { ns: 'errors' })}
            />

            <CustomFormLabel htmlFor="name">{t('message')}</CustomFormLabel>
            <CustomTextField
              id="message"
              name="message"
              multiline
              rows={6}
              variant="outlined"
              size="large"
              fullWidth
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && t(formik.errors.message, { ns: 'errors' })}
            />

            <Box mt={3}>
              <Button
                fullWidth
                color="primary"
                variant="contained"
                type="submit"
                size="large"
                disabled={formik.isSubmitting}
                sx={{
                  py: 2,
                }}
              >
                {t('submit')}
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

export default Contact;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'errors', 'home'])),
    },
  };
}
