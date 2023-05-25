import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Card, CardHeader, CardContent } from '@mui/material';
import Spinner from "@components/ui/Spinner";

const DashboardCard = ({  title, subtitle, action, children, loading = false, ...props }) => {
  const { custompadding, customheaderpadding, customdisplay, custommargin } = props;
  return (
    <Card
      sx={{
        p: custompadding,
        '& .MuiCardContent-root:last-child': {
          pb: custompadding,
        },
      }}
    >
      <CardHeader
        sx={{
          p: customheaderpadding,
          display: {
            xs: customdisplay,
            lg: 'flex',
            sm: 'flex',
          },
        }}
        title={
          <Typography
            variant="h3"
            sx={{
              mb: {
                xs: custommargin,
              },
            }}
          >
            {title}
          </Typography>
        }
        subtitle={subtitle}
        action={action || ''}
      />
      {/* content area */}
      <CardContent
        sx={{
          p: custompadding,
        }}
      >
        {loading ? (
          <Spinner />
        ) : children}
      </CardContent>
    </Card>
  );
};

DashboardCard.propTypes = {
  custompadding: PropTypes.string,
  customheaderpadding: PropTypes.string,
  customdisplay: PropTypes.string,
  custommargin: PropTypes.string,
  title: PropTypes.node,
  subtitle: PropTypes.string,
  action: PropTypes.any,
  children: PropTypes.node,
};

export default DashboardCard;
