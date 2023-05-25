import React from 'react';
import { useRouter } from "next/router";
// import Backend from "@services/Backend";
import { Box, MenuItem } from "@mui/material";
import Link from "@components/ui/Link";
import CustomSelect from "@components/ui/forms/CustomSelect";
import { useTranslation } from "next-i18next";
import Card from "@components/ui/Card";

const countryToFlag = (isoCode) =>
  typeof String.fromCodePoint !== 'undefined'
    ? isoCode
      .toUpperCase()
      .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    : isoCode;

function LangSelectCard() {
  const router = useRouter();
  const { t } = useTranslation('common');

  const locales = {
    "fr": {
      code: "FR",
      title: "Français"
    },
  };

  const handleChangeLang = async ({ target: { value } }) => {
    // await Backend.updateProfile({ lang: value });
  };

  return (
    <Card title={t('language')}>
      <CustomSelect fullWidth defaultValue={router.locale} onChange={handleChangeLang}>
        {router.locales.map(el => (
          <MenuItem
            key={el}
            component={Link}
            href={router.pathname}
            locale={el}
            value={el}
          >
            <Box component="span" mr={2}>{countryToFlag(locales[el].code)}</Box>{locales[el].title}
          </MenuItem>
        ))}
      </CustomSelect>
    </Card>
  );
}

export default LangSelectCard;
