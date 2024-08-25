import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from 'react-router-dom';

export const CheckoutSteps = ( step1, step2, step3, step4 ) => {
  return (
    <Nav className='justify-content-center mb-4'>
        <Nav.Item>
            {step1 ? (
                <LinkContainer to='/login'>
                    <NavLink>Sign In</NavLink>
                </LinkContainer>
            ) : (
                <NavLink disabled>Sign In</NavLink>
            )}
        </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;