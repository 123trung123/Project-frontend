import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { useLocation, Link as RouterLink, useParams } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const BreadcrumbsComponent = () => {
  const location = useLocation();
  const { id } = useParams(); // Extract URL parameters
  const pathnames = location.pathname.split('/').filter(x => x);

  // Combine the last two segments if they are the "detail" and an ID
  const combinedPathnames = pathnames.length > 1 && pathnames[pathnames.length - 2] === 'detail' && id
    ? [
        ...pathnames.slice(0, -2),  // All segments except the last two
        `${pathnames[pathnames.length - 2]} ${id}`
      ]
    : pathnames;

  return (
    <Breadcrumbs style={{ padding: 10, paddingLeft: 60 }} separator={<NavigateNextIcon fontSize="small" />}>
      <Link
        component={RouterLink}
        to="/"
        sx={{
          textDecoration: 'none',
          color: '#5a5a5a !important',
        }}
      >
        Home
      </Link>
      {combinedPathnames.map((value, index) => {
        const last = index === combinedPathnames.length - 1;
        const to = `/${combinedPathnames.slice(0, index + 1).join('/')}`;

        return last ? (
          <Typography
            key={to}
            sx={{
              fontWeight: 'bold',
            }}
          >
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </Typography>
        ) : (
          <Link
            component={RouterLink}
            to={to}
            key={to}
            sx={{
              textDecoration: 'none',
              color: '#5a5a5a !important',
              textTransform: 'capitalize',
            }}
          >
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default BreadcrumbsComponent;
