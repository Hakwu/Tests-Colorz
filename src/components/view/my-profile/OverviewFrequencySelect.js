import React from 'react';
// import Backend from "@services/Backend";
import { MenuItem } from "@mui/material";
import CustomSelect from "@components/ui/forms/CustomSelect";
import { useTranslation } from "next-i18next";
import Card from "@components/ui/Card";
import useProfile from "@lib/useProfile";

function OverviewFrequencySelectCard() {
  const { profile } = useProfile();
  const { t } = useTranslation('common');

  const options = ["daily", "weekly", "monthly", "disabled"];

  const handleChange = async ({ target: { value } }) => {
    // await Backend.updateProfile({ recap_frequency: value.toUpperCase() });
  };

  return (
    <Card title={t('overview-email-frequency')}>
      <CustomSelect fullWidth defaultValue={profile?.recapFrequency.toLowerCase() || options[0]} onChange={handleChange}>
        {options.map(el => (
          <MenuItem key={el} value={el}>
            {t(`select.${el}`)}
          </MenuItem>
        ))}
      </CustomSelect>
    </Card>
  );
}

export default OverviewFrequencySelectCard;
