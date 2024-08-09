import React from 'react';
import { Link } from '@mui/material';
import { useLocation, Link as RouterLink } from 'react-router-dom';
const SearchResults = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const query = queryParams.get('query') || '';
  return (
    <div>
      <h1>{query}</h1>
      <Link 
        component={RouterLink} 
        to={`${query}`}
        sx={{ 
          textDecoration: 'none',
          color: '#5a5a5a !important',
        }}
      ></Link>
    </div>
  );
};

export default SearchResults;
