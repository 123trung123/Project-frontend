import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const BreadcrumbsComponent = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <Breadcrumbs   style={{padding:10,paddingLeft:40}}
      separator={<NavigateNextIcon fontSize="small" />}
    >
      <Link 
        color="inherit" 
        component={RouterLink} 
        to="/" 
        sx={{ 
          textDecoration: 'none',
          color: '#5a5a5a',
        }}
      >
        Home
      </Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        return last ? (
          <Typography 
            key={to} 
          >
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </Typography>
        ) : (
          <Link 
            color="inherit" 
            component={RouterLink} 
            to={to} 
            key={to} 
            sx={{ 
              textDecoration: 'none',
              color: '#5a5a5a', 
              textTransform: 'capitalize',
            }}
          >
            {value}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default BreadcrumbsComponent;
