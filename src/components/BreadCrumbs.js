import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useSelector } from 'react-redux';

const BreadcrumbsComponent = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  const products = useSelector(state => state.products.products || []);
  const isDetailPage = pathnames.includes('detail');
  const productID = pathnames[pathnames.length - 1];
  const product = products.find(p => p.id === productID);
  const productName = product ? product.name : '';

  return (
    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} style={{ padding: 10, paddingLeft: 60 }}>
      <Link
        component={RouterLink}
        to="/"
        style={{ textDecoration: 'none', color: '#5a5a5a' }}
      >
        Home
      </Link>
      {pathnames.map((value, index) => {
        if (value === 'detail') return null;

        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return last && isDetailPage ? (
          <Typography key={to} style={{ fontWeight: 'bold' }}>
            {productName || value.charAt(0).toUpperCase() + value.slice(1)}
          </Typography>
        ) : (
          <Link
            component={RouterLink}
            to={to}
            key={to}
            style={{ textDecoration: 'none', color: '#5a5a5a' }}
          >
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default BreadcrumbsComponent;
