import styled from '@emotion/styled';
import { Button, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useState } from 'react'
import { CartContext } from '../../App';
import CartDetails from '../CartDetails/CartDetails';
import { Link, useLocation } from 'react-router-dom';

const Cart = (props) => {
    const location = useLocation();
    // console.log(location);
    // console.log(props);
    const { cartState, cartDispatch } = useContext(CartContext);
    // console.log(state);
    let deliveryFee = 0;
    if (cartState.length > 0) {
        deliveryFee = 20;
    }
    let totalPrice = 0;
    for (let index = 0; index < cartState.length; index++) {
        const element = cartState[index];
        totalPrice = totalPrice + element.price * cartState[index].qty;
    }
    totalPrice = totalPrice + deliveryFee;

    // console.log(cartState.length);
    const StyledButton = styled(Button)({
        backgroundColor: '#CA1533', cursor: 'pointer', ':hover': {
            color: '#CA1533',
            backgroundColor: 'white',
        }, fontWeight: 'bold'
    })

    return (
        <>

            {
                cartState.length > 0 &&
                <Paper elevation={16} sx={{ padding: '10px' }}>
                    <Box textAlign={'center'}>
                        <Typography variant='h4'>
                            Your Cart
                        </Typography>
                        {
                            props.cartState.map(item => (
                                <CartDetails
                                    item={item}
                                    key={item.id}
                                >

                                </CartDetails>
                            ))
                        }
                        <hr />
                        <Typography sx={{ fontWeight: '700' }}>
                            Delivery fee : Tk {deliveryFee}
                        </Typography>
                        <Typography sx={{ fontWeight: '700' }}>
                            Total : Tk {totalPrice}
                        </Typography>
                        {
                            location.pathname === `/review` ? (
                                <Link to={'/placeorder'} style={{ textDecoration: 'none' }}>
                                    <StyledButton onClick={() => cartDispatch({ type: 'RESET' })} variant='contained'>
                                        Place Order
                                    </StyledButton>
                                </Link>
                            ) : (
                                <Link to={'/review'} style={{ textDecoration: 'none' }}>
                                    <StyledButton variant='contained'>
                                        Checkout Your Food
                                    </StyledButton>
                                </Link>
                            )
                        }

                    </Box>
                </Paper>
            }

        </>

    )
}

export default Cart