import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col, Tab } from 'react-bootstrap';
import { FaTimes, FaEdit, FaTrash } from 'react-icons/fa';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { useGetProductsQuery } from '../../slices/productsApiSlice';

const ProductListScreen = () => {
  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Products</h1>
        </Col> 
        <Col className='text-end'>
          <Button className='btn-sm m-3'>
            <FaEdit /> Create Product
          </Button>
        </Col>
      </Row>

      {isLoading ? <Loader /> : error ? <Message variant='danger'>
        {error}
      </Message> : (
        <>
          <Table striped hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th></th>
              </tr>
            </thead>
          </Table>
        </>
      )}
    </>
  )
}

export default ProductListScreen;  