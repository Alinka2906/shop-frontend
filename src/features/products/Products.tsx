import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Button, Grid, Typography } from '@mui/material';
import { selectProducts } from './productsSlice';
import { fetchProducts } from './productsThunk';
import ProductItem from './components/ProductItem';


const Products = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4">
            Products
          </Typography>
        </Grid>
        <Grid item>
          <Button color="primary" component={Link} to="/products/new">
            Add product
          </Button>
        </Grid>
        <Grid item container direction="row" spacing={1}>
          {products.map(product => (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
            />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Products;