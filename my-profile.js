import React, { useState } from 'react';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import useProfile from "@lib/useProfile";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
// import Backend from "@services/Backend";
import UpdateProfileDetailsForm from "@components/view/my-profile/UpdateProfileDetailsForm";
import UpdateProfilePasswordForm from "@components/view/my-profile/UpdateProfilePasswordForm";
import OverviewFrequencySelectCard from "@components/view/my-profile/OverviewFrequencySelect";
import LangSelectCard from "@components/view/my-profile/LangSelectCard";
import Card from "@components/ui/Card";
import { useSnackbar } from "notistack";
import ProfileStore from "@recoil/store/ProfileStore";

function MyProfile() {
  const { profile, mutate } = useProfile();
  const { t } = useTranslation('common');
  const { enqueueSnackbar } = useSnackbar();
  const { logout } = ProfileStore();

  const handleSubmit = async (values) => {
    // const payload = { ...values };
    // if (profile.email === values.email)
    //   delete payload.email;
    // if (profile.name === values.name)
    //   delete payload.name;

    // if (Object.keys(payload).length === 0)
    //   return;

    // const { data, status } = await Backend.updateProfile(payload);

    // if (status === 200) {
    //   if (values.password)
    //     enqueueSnackbar({ message:'success.password-updated' });
    //   else {
    //     mutate();
    //     enqueueSnackbar({ message:'success.profile-updated' });
    //   }
    // } else {
    //   enqueueSnackbar({ message:`error.${data.error}`, variant: 'error' });
    // }
  };


  return (
    <Grid container spacing={0}>
      <Grid item lg={4} md={12} xs={12}>
        <Card>
          <Typography variant="h2">{profile.name}</Typography>
          <Typography variant="body2">{profile.email}</Typography>
          <Box mt={2}>
            <Button
              color="error"
              variant="contained"
              onClick={() => logout()}
            >
              {t('logout')}
            </Button>
          </Box>
        </Card>
        <LangSelectCard />
        <OverviewFrequencySelectCard />
      </Grid>
      <Grid item lg={8} md={12} xs={12}>
        <UpdateProfileDetailsForm onSubmit={handleSubmit} />
        <UpdateProfilePasswordForm onSubmit={handleSubmit} />
      </Grid>
    </Grid>
  );
}

export default MyProfile;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'notifications', 'errors'])),
    },
  };
}
