import React, {useEffect, useState} from 'react';
import { useFormik } from "formik";
import { useTranslation } from "next-i18next";
import { loginValidation } from "@utils/validations";
// import Backend from "@services/Backend";

import { Box, Typography, FormGroup, FormControlLabel, Button, Alert } from '@mui/material';

import Link from '@components/ui/Link';
import CustomFormLabel from "@components/ui/forms/CustomFormLabel";
import CustomTextField from "@components/ui/forms/CustomTextField";
import CustomCheckbox from "@components/ui/forms/CustomCheckbox";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import CustomTextFieldPassword from "@components/ui/forms/CustomTextFieldPassword";

function Login() {
  const router = useRouter();
  const { t } = useTranslation(['auth', 'common']);
  const [[severity, message], setMessage] = useState([null, null]);

  const handleSubmit = async (values) => {
    // setMessage([null, null]);
    // const { status } = await Backend.login(values);

    // if (status === 200) {
    //   router.push('/app');
    // } else {
    //   setMessage(['error', t('message.bad-credentials')]);
    // }
  };

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: loginValidation,
    onSubmit: handleSubmit
  });


  return (
   <>
   <Typography fontWeight="700" variant="h2">
     {t('login.title')}
   </Typography>
     <Box display="flex" alignItems="center">
       <Typography
         color="textSecondary"
         variant="h6"
         fontWeight="500"
         sx={{
           mr: 1,
         }}
       >
         {t('login.desc')}
       </Typography>
       <Typography
         component={Link}
         href="/register"
         fontWeight="500"
         sx={{
           display: 'block',
           textDecoration: 'none',
           color: 'primary.main',
         }}
       >
         {t('login.desc-href')}
       </Typography>
     </Box>
     <form onSubmit={formik.handleSubmit} noValidate>
       <Box mt={3}>
         {(severity && message) && (
           <Alert variant="filled" severity={severity}>{message}</Alert>
         )}
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
         <Box
           sx={{
             display: {
               xs: 'block',
               sm: 'flex',
               lg: 'flex',
             },
             alignItems: 'center',
           }}
         >
           <FormGroup>
             <FormControlLabel
               control={<CustomCheckbox defaultChecked />}
               label={t('login.remember')}
               sx={{
                 mb: 2,
               }}
             />
           </FormGroup>
           <Box
             sx={{
               ml: 'auto',
             }}
           >
             <Typography
               component={Link}
               href="/reset-password"
               fontWeight="500"
               sx={{
                 display: 'block',
                 textDecoration: 'none',
                 mb: '16px',
                 color: 'primary.main',
               }}
             >
               {t('login.forgot-password')}
             </Typography>
           </Box>
         </Box>

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
           {t('login.sign-in')}
         </Button>
       </Box>
     </form>
   </>
  );
}

export default Login;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'errors', 'auth', 'notifications'])),
    },
  };
}
