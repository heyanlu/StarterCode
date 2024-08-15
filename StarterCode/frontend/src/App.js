import React, { useReducer, useEffect } from 'react';
import { initialState, reducer } from "./reducer";
import { fetchProducts, deleteProduct } from './services';
import { ACTIONS } from './constants';
import ProductList from './App/Page/ProductList';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onFetchProducts = () => {
    dispatch({ type: ACTIONS.START_LOADING });
    fetchProducts()
      .then(products => {
        dispatch({ type: ACTIONS.FETCH_PRODUCTS, payload: products });
      })
      .catch(error => {
        dispatch({ type: ACTIONS.SET_ERROR, payload: error.message });
      });
  };

  const onDeleteProduct = (id) => {
    deleteProduct(id)
      .then(() => {
        dispatch({ type: ACTIONS.DELETE_PRODUCT, payload: id });
      })
      .catch(error => {
        dispatch({ type: ACTIONS.SET_ERROR, payload: error.message });
      });
  };

  useEffect(() => {
    onFetchProducts();
  }, []);

  return (
    <div>
      <ProductList 
        products={state.products}
        onDeleteProduct={onDeleteProduct}
        isLoading={state.isLoading}
        error={state.error}
      />
    </div>
  );
};

export default App;
