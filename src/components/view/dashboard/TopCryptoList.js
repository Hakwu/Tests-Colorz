import React from 'react';
import useTopCryptosList from "@lib/useTopCryptosList";
import { useTranslation } from "next-i18next";
import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel, Typography } from "@mui/material";
import Spinner from "@components/ui/Spinner";
import FeatherIcon from "feather-icons-react";
import { formatBalance, formatPercentage } from "@utils/formatter";
import useRealTimeCryptoPrices from "@lib/useRealTimeCryptoPrices";
import CryptoIcon from "@components/ui/CryptoIcon";
import { useTheme } from "@mui/material/styles";
import Link from "@components/ui/Link";

const headCells = [{
  field: 'marketCap',
  key: '#',
}, {
  field: "name",
  key: 'name',
}, {
  field: "price",
  key: 'price',
}, {
  field: "marketCap",
  key: 'market-cap',
}, {
  field: "volume24h",
  key: 'volume-daily',
}, {
  field: "changePercent24h",
  key: 'change-daily',
}];

const TopCryptoList = ({ loading, data, direction, orderBy, handleSort }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { prices } = useRealTimeCryptoPrices();

  const getDynamicStyle = (elem) => {
    const currentPrice = parseFloat(elem.price);
    const updatedPrice = parseFloat(prices[elem.id]);

    if (Object.keys(prices).includes(elem.id)  && currentPrice !== updatedPrice) {
      elem.price = prices[elem.id];

      return {
        fontWeight: 600,
        color: currentPrice < updatedPrice ? theme.palette.success.main : theme.palette.danger.main,
      };
    }
    return { color: 'inherit' } ;
  };

  if (loading) return <Spinner />;

  return (
    <Table
      aria-label="simple table"
      size="small"
      sx={{
        whiteSpace: 'nowrap',
      }}
    >
      <TableHead>
        <TableRow>
          {headCells.map(el => (
            <TableCell
              key={el.key}
              align={el?.align || "left"}
              sortDirection={orderBy === el.field ? direction : false}
            >
              <TableSortLabel
                active={orderBy === el.field}
                direction={orderBy === el.field? direction : 'asc'}
                onClick={() => handleSort(el.field)}
              >
                <Typography variant="h5">{t(el.key)}</Typography>
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((el, index) => (
          <TableRow key={index}>
            <TableCell>
              {el.rank}
            </TableCell>
            <TableCell>
              <Button component={Link} href={"/app/cryptocurrencies/" + el.id}>
                <CryptoIcon name={el.name} icon={el.logo} size={25} />
                <Box ml={1}>
                  <Typography fontWeight="600">
                    {el.name}
                  </Typography>
                </Box>
              </Button>
            </TableCell>
            <TableCell sx={{ width: 150, ...getDynamicStyle(el) }}>
              {formatBalance(el.price, "currency", "USD")}
            </TableCell>
            <TableCell>
              {formatBalance(el.marketCap, "currency", "USD")}
            </TableCell>
            <TableCell>
              {formatBalance(el.volume24h, "currency", "USD")}
            </TableCell>
            <TableCell>
              {el.changePercent24h !== null ? (
                <Box
                  display="flex"
                  alignItems="center"
                  color={
                    (theme) => Math.sign(el.changePercent24h) === -1 ? theme.palette.danger.main : theme.palette.success.main
                  }
                >
                  <FeatherIcon
                    icon={Math.sign(el.changePercent24h) === -1  ? "trending-down" :  "trending-up"}
                    width="20"
                    height="20"
                  />
                  &nbsp;{formatPercentage(el.changePercent24h)}
                </Box>
              ): "-"}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};


export default TopCryptoList;
