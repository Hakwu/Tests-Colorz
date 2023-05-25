import React from "react";
import { useTranslation } from "next-i18next";
import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import Link from "@components/ui/Link";
import CryptoIcon from "@components/ui/CryptoIcon";
import { formatBalance, formatPercentage } from "@utils/formatter";
import Price from "@components/ui/Price";
import FeatherIcon from "feather-icons-react";

const headCells = [{ key: '#' }, { key: 'name' }, { key: 'price' }, { key: 'amount' }, { key: 'total' }, { key: 'recap.balance-change' }];

const CryptoList = ({ data = [] }) => {
  const { t } = useTranslation('common');

  return (
    <Box>
      <Table sx={{ whiteSpace: 'nowrap' }}>
        <TableHead>
          <TableRow>
            {headCells.map((el) => (
              <TableCell key={el.key}>
                <Typography variant="h5">{t(el.key)}</Typography>
              </TableCell>
            ))}
            <TableCell align="right" />
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow hover key={item.name}>
              <TableCell>{index + 1}</TableCell>
              <TableCell sx={{ width: "200px" }}>
                <Box display="flex" alignItems="center" >
                  <CryptoIcon name={item.name} icon={item.logo || item.symbol} size={25} />
                  <Box ml={1}>
                    <Typography fontWeight="600">
                      {item.name || item.symbol}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell sx={{ width: 150 }}>
                {formatBalance(item.price || 0, "currency", "USD")}
              </TableCell>
              <TableCell>
                <Price amount={item.amount} hidePrefix/>
              </TableCell>
              <TableCell>
                <Price amount={item.total} />
              </TableCell>
              <TableCell>
                {item.changePercent ? (
                  <Box
                    display="flex"
                    alignItems="center"
                    color={
                      (theme) => Math.sign(item.changePercent) === -1 ? theme.palette.danger.main : theme.palette.success.main
                    }
                  >
                    <FeatherIcon
                      icon={Math.sign(item.changePercent) === -1  ? "trending-down" : "trending-up"}
                      width="20"
                      height="20"
                    />
                    &nbsp;{formatPercentage(item.changePercent)}
                  </Box>
                ) : "-"}
              </TableCell>
              <TableCell align="right">
                <Button
                  component={Link}
                  href={'/app/my-portfolio/' + item.id}
                  variant="contained"
                  endIcon={<FeatherIcon  icon="chevron-right"/>}
                >
                  {t('details')}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default CryptoList;
