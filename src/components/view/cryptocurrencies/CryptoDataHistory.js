import React, { useState } from 'react';
import { useTranslation } from "next-i18next";
import DashboardCard from "@components/ui/cards/DashboardCard";
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import moment from "moment";
import { formatBalance } from "@utils/formatter";
import useSWR from "swr";

const headCells = [
  { key: 'date' }, { key: "opening" }, { key: 'high' }, { key: 'low' }, { key: "closing" }, /*{ key: 'volume-daily' }, { key: 'market-cap' }*/
];

function CryptoDataHistory({ cryptoId, name }) {
  const { t } = useTranslation('common');
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  const [data, setData] = useState([]);

  const { data: response } = useSWR(`/crypto/ohlcHistory/${cryptoId}?page=${page}`, {
    onSuccess: ({ data: newData }) => {
      console.log(newData);
      if (loadMore) {
        setData([...data, ...newData.data]);
        setLoadMore(false);
      } else {
        setData(newData.data);
      }
    }
  });

  const handleLoadMore = () => {
    setLoadMore(true);
    setPage(page + 1);
  };

  return (
    <DashboardCard title={t('historical-data-crypto', { crypto: name })} loading={data.length === 0}>
      <TableContainer>
        <Table sx={{ whiteSpace: 'nowrap', }}>
          <TableHead>
            <TableRow>
              {headCells.map(el => (
                <TableCell key={el.key}>
                  <Typography variant="h5">{t(el.key)}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((el, index) => (
              <TableRow key={index}>
                <TableCell>
                  {moment(el.dateTime).format('DD MMM YYYY') }
                </TableCell>
                <TableCell>
                  {formatBalance(el.open, 'currency', 'USD')}
                </TableCell>
                <TableCell>
                  {formatBalance(el.high, 'currency', 'USD')}
                </TableCell>
                <TableCell>
                  {formatBalance(el.low, 'currency', 'USD')}
                </TableCell>
                <TableCell>
                  {formatBalance(el.close, 'currency', 'USD')}
                </TableCell>
               {/* <TableCell>
                  {formatBalance(el.volume, 'currency', 'USD')}
                </TableCell>
                <TableCell>
                  {formatBalance(el.marketCap, 'currency', 'USD')}
                </TableCell>*/}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box textAlign="center" mt={4}>
        <Button size="large" variant="contained" onClick={handleLoadMore} disabled={data?.data?.meta?.next === null}>
          {t('see-more')}
        </Button>
      </Box>
    </DashboardCard>
  );
}

export default CryptoDataHistory;
