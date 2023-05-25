import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import Link from '@components/ui/Link';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Error = () => (
  <Box
    display="flex"
    flexDirection="column"
    height="100vh"
    textAlign="center"
    justifyContent="center"
    sx={{ backgroundColor: '#e4f5ff' }}
  >
    <Container maxWidth="md">
      <Typography
        align="center"
        variant="h1"
        sx={{
          pt: 2,
          color: (theme) =>
            `${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.87)' : 'rgba(0, 0, 0, 0.87)'}`,
        }}
      >
        404
      </Typography>
      <Typography
        align="center"
        variant="h4"
        sx={{
          pt: 1,
          pb: 3,
          color: (theme) =>
            `${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.87)' : 'rgba(0, 0, 0, 0.87)'}`,
        }}
      >
        This page could not be found.
      </Typography>
      <Button color="primary" variant="contained" component={Link} href="/" disableElevation>
        Back to Home
      </Button>
    </Container>
  </Box>
);

export default Error;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'errors', 'home'])),
    },
  };
}
