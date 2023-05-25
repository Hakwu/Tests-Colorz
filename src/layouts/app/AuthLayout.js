import React, { useEffect } from 'react';
import { useRouter } from "next/router";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import img1 from "@assets/images/backgrounds/login-bg.svg";
import LogoIcon from "@layouts/logo/LogoIcon";
// import AccessToken from "@services/AccessToken";

function AuthLayout({ children }) {
  const router = useRouter();
  // const accessToken = AccessToken.get();

    // useEffect(() => {
    //     if (accessToken) router.push('/app');
    // }, [accessToken]);

  return (
    <Grid container spacing={0} sx={{ height: '100vh', justifyContent: 'center' }}>
      <Grid item xs={12} sm={12} lg={6}  sx={{
        background: (theme) => `${theme.palette.mode === 'dark' ? '#1c1f25' : '#ffffff'}`,
      }}>
        <Box position="relative">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              position: {
                xs: 'relative',
                lg: 'absolute',
              },
              height: { xs: 'auto', lg: '100vh' },
              right: { xs: 'auto', lg: '-50px' },
              margin: '0 auto',
            }}
          >
            <Image src={img1} alt="bg img"/>
          </Box>

          <Box display="flex" alignItems="center" position="absolute" p={4} top={0}>
            <LogoIcon/>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={8} lg={6} display="flex" alignItems="center">
        <Grid container spacing={0} display="flex" justifyContent="center">
          <Grid item xs={12} lg={9} xl={6}>
            <Box p={4}>
              {children}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AuthLayout;
