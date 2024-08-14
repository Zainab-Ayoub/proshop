import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useGetProductsQuery } from '../slices/productApiSlice';

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  
  console.log({ isLoading, error, products }); // Debugging line

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <div>{error?.data?.message || error.error}</div>;
  }

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
