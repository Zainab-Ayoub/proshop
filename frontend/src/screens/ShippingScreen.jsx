import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from '../slices/cartSlice';
import FormContainer from '../components/FormContainer';
import { saveShippingAddress } from '../slices/cartSlice';

const ShippingScreen = () => {
 
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;  

  const [address, setAddress] = useState(shippingAddress?.address || '');
  const [city, setCity] = useState(shippingAddress?.city || '');
  const [postalCode, setPostalCode] = useState(shippingAddress?.postalCode || '');
  const [country, setCountry] = useState(shippingAddress?.country || '');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({address, city, postalCode, country}));
    navigate('/payment');
  } 

  return (
    <FormContainer>
        ShippingScreen
    </FormContainer>
  )
}

export default ShippingScreen