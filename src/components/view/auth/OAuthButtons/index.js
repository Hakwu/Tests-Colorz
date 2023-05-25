import React from 'react';
import { Box, Button, Grid, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useTranslation } from "next-i18next";

function OAuthButtons(props) {
  const { t } = useTranslation(['auth', 'common']);

  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          textAlign: 'center',
          mt: '20px',
          mb: '20px',
          '&::before': {
            content: '""',
            background: (theme) =>
              `${theme.palette.mode === 'dark' ? '#42464d' : '#ecf0f2'}`,
            height: '1px',
            width: '100%',
            position: 'absolute',
            left: '0',
            top: '13px',
          },
        }}
      >
        <Typography
          component="span"
          color="textSecondary"
          variant="h6"
          fontWeight="400"
          sx={{
            position: 'relative',
            padding: '0 12px',
            background: (theme) =>
              `${theme.palette.mode === 'dark' ? '#282c34' : '#fff'}`,
          }}
        >
          {t('register.or')}
        </Typography>
      </Box>

      <Box>
        <Button
          variant="outlined"
          size="large"
          display="flex"
          alignitems="center"
          justifycontent="center"
          sx={{
            width: '100%',
            borderColor: (theme) =>
              `${theme.palette.mode === 'dark' ? '#42464d' : '#dde3e8'}`,
            borderWidth: '2px',
            textAlign: 'center',
            mt: 2,
            pt: '10px',
            pb: '10px',
            '&:hover': {
              borderColor: (theme) =>
                `${theme.palette.mode === 'dark' ? '#42464d' : '#dde3e8'}`,
              borderWidth: '2px',
            },
          }}
        >
          <Box display="flex" alignItems="center">
            <GoogleIcon
              sx={{
                color: (theme) => theme.palette.error.main,
              }}
            />
            <Typography
              variant="h6"
              sx={{
                ml: 1,
                color: (theme) =>
                  `${
                    theme.palette.mode === 'dark' ? theme.palette.grey.A200 : '#13152a'
                  }`,
              }}
            >
              Google
            </Typography>
          </Box>
        </Button>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={6}>
          <Button
            variant="outlined"
            size="large"
            display="flex"
            alignitems="center"
            justifycontent="center"
            sx={{
              width: '100%',
              borderColor: (theme) =>
                `${theme.palette.mode === 'dark' ? '#42464d' : '#dde3e8'}`,
              borderWidth: '2px',
              textAlign: 'center',
              mt: 2,
              pt: '10px',
              pb: '10px',
              '&:hover': {
                borderColor: (theme) =>
                  `${theme.palette.mode === 'dark' ? '#42464d' : '#dde3e8'}`,
                borderWidth: '2px',
              },
            }}
          >
            <Box display="flex" alignItems="center">
              <FacebookIcon
                sx={{
                  color: (theme) => theme.palette.secondary.main,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  ml: 1,
                  color: (theme) =>
                    `${
                      theme.palette.mode === 'dark' ? theme.palette.grey.A200 : '#13152a'
                    }`,
                }}
              >
                Facebook
              </Typography>
            </Box>
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <Button
            variant="outlined"
            size="large"
            display="flex"
            alignitems="center"
            justifycontent="center"
            sx={{
              width: '100%',
              borderColor: (theme) =>
                `${theme.palette.mode === 'dark' ? '#42464d' : '#dde3e8'}`,
              borderWidth: '2px',
              textAlign: 'center',
              mt: 2,
              pt: '10px',
              pb: '10px',
              '&:hover': {
                borderColor: (theme) =>
                  `${theme.palette.mode === 'dark' ? '#42464d' : '#dde3e8'}`,
                borderWidth: '2px',
              },
            }}
          >
            <Box display="flex" alignItems="center">
              <TwitterIcon
                sx={{
                  color: (theme) => theme.palette.primary.main,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  ml: 1,
                  color: (theme) =>
                    `${
                      theme.palette.mode === 'dark' ? theme.palette.grey.A200 : '#13152a'
                    }`,
                }}
              >
                Twitter
              </Typography>
            </Box>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default OAuthButtons;
