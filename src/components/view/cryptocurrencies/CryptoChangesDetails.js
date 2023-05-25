import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import DashboardCard from "@components/ui/cards/DashboardCard";
import { formatNumberChange } from "@utils/formatter";
import { useTranslation } from "next-i18next";

function CryptoChangesDetails({ name, data, loading }) {
  const { t } = useTranslation('common');

  const getColor = (value) => {
    if (value < 0)
      return "danger.main";
    return "success.main";
  };

  return (
    <DashboardCard title={t('changes-crypto', { crypto: name } )} loading={loading}>
      <TableContainer>
        <Table sx={{ whiteSpace: 'nowrap', }}>
          <TableHead>
            <TableRow>
              <TableCell align="center">1h</TableCell>
              <TableCell align="center">24h</TableCell>
              <TableCell align="center">7j</TableCell>
              <TableCell align="center">30j</TableCell>
              <TableCell align="center">1 an</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center" sx={{ color: getColor(data?.changePercent1h) }}>{formatNumberChange(data?.changePercent1h / 100)}</TableCell>
              <TableCell align="center" sx={{ color: getColor(data?.changePercent24h) }}>{formatNumberChange(data?.changePercent24h / 100)}</TableCell>
              <TableCell align="center" sx={{ color: getColor(data?.changePercent7d) }}>{formatNumberChange(data?.changePercent7d / 100)}</TableCell>
              <TableCell align="center" sx={{ color: getColor(data?.changePercent30d) }}>{formatNumberChange(data?.changePercent30d / 100)}</TableCell>
              <TableCell align="center" sx={{ color: getColor(data?.changePercent1y) }}>{formatNumberChange(data?.changePercent1y / 100)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </DashboardCard>
  );
}

export default CryptoChangesDetails;
