import React from 'react';
import { Grid, Typography, Box, Breadcrumbs } from '@mui/material';
import Link from '@components/ui/Link';

import PropTypes from 'prop-types';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Breadcrumb = ({ subtitle, items, title, icon, children }) => {
  return (
    <Grid container>
      <Grid item xs={12} sm={children ? 6 : 12} lg={children ? 8 : 12}>
        <Typography color="textSecondary" fontWeight="400" variant="h4">
          {subtitle}
        </Typography>

        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          {items
            ? items.map((item, index) => (
              <div key={index}>
                {item.href ? (
                  <Link underline="none" color="inherit" href={item.href}>
                    {item.title}
                  </Link>
                ) : (
                  <Typography color="textPrimary">{item.title}</Typography>
                )}
              </div>
            ))
            : ''}
        </Breadcrumbs>
        <Box display="flex" alignItems="center">
          {icon && (
            <Box component="span" mr={1}>
              {icon}
            </Box>
          )}
          <Typography
            fontWeight="700"
            variant="h1"
            sx={{
              lineHeight: '1.235',
            }}
          >
            {title}
          </Typography>
        </Box>

      </Grid>
      {children && (
        <Grid item xs={12} sm={6} lg={4} display="flex" alignItems="flex-end">
          <Box
            sx={{
              display: { xs: 'none', md: 'block', lg: 'flex' },
              alignItems: 'center',
              justifyContent: 'flex-end',
              width: '100%',
            }}
          >
            {children}
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

Breadcrumb.propTypes = {
  subtitle: PropTypes.string,
  items: PropTypes.array,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
};

export default Breadcrumb;
