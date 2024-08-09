import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = window.location.pathname;
  const pathnames = location.split('/').filter((x) => x);

  return (
    <nav style={{ padding: '10px 60px' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#5a5a5a' }}>
        Home
      </Link>
      {pathnames.map((value, index) => {
        const isLast = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return isLast ? (
          <span key={to} style={{ marginLeft: 8, fontWeight: 'bold' }}>
            {' / '}
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </span>
        ) : (
          <span key={to} style={{ marginLeft: 8 }}>
            {' / '}
            <Link to={to} style={{ textDecoration: 'none', color: '#5a5a5a' }}>
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </Link>
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
