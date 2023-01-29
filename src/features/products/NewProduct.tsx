import { useAppDispatch } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import ProductForm from './components/ProductForm';
import { createProduct } from './productsThunk';
import { ProductMutation } from '../../types';



const NewProduct = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onFormSubmit = async (productMutation: ProductMutation) => {
    await dispatch(createProduct(productMutation));
    navigate('/');

  };
  return (
    <>
      <Typography variant="h4" sx={{mb: 2}}>New product</Typography>
      <ProductForm onSubmit={onFormSubmit}/>
    </>
  );
};

export default NewProduct;