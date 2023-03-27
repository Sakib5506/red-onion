import styled from '@emotion/styled'
import { Button, FormControl, Grid, TextField, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { CartContext } from '../../App'
import Cart from '../Cart/Cart'
import CartDetails from '../CartDetails/CartDetails'

const Review = () => {
    const StyledButton = styled(Button)({
        backgroundColor: '#CA1533', cursor: 'pointer', ':hover': {
            color: '#CA1533',
            backgroundColor: 'white',
        }, fontWeight: 'bold'
    })
    const { cartState, cartDispatch } = useContext(CartContext);
    return (
        <>
            <Grid container sx={{ minHeight: '65vh' }}>
                <Grid item xs={12} sm={6} textAlign={'center'} p={5}>
                    <Typography variant='h3'>
                        Delivery Details
                    </Typography>
                    <hr />
                    <FormControl sx={{ width: '50%' }}>
                        <TextField variant='filled' placeholder="House no" />
                        <TextField variant='filled' placeholder="Street no / Appartment" />
                        <TextField variant='filled' placeholder="Mobile no" />
                        <TextField variant='filled' placeholder="Add delivery Instruction" />
                        <StyledButton variant='contained'>
                            Save & Continue
                        </StyledButton>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={5} p={5}>
                    <Cart cartState={cartState}>
                        <CartDetails></CartDetails>
                    </Cart>
                </Grid>

            </Grid>
        </>
    )
}

export default Review