import React from 'react';
import { Box, Container, Typography } from "@mui/material";
import Breadcrumb from "@components/ui/Breadcrumb";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import data from "@config/company.json";

function PrivacyPolicy(props) {
  const { company_name, street, city, state, postcode, country, website, email } = data;

  return (
    <Box>
    </Box>
  );
}

export default PrivacyPolicy;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  };
}
