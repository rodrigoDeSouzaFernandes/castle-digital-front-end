import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './index';

import data from '../data/products';

function Provider({ children }) {
  const [products, setProducts] = useState(data);

  const context = {
    products,
    setProducts,
  };

  return (
    <GlobalContext.Provider value={context}>
      {children}
    </GlobalContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Provider;
