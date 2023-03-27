import { Button, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import placeOrderImg from '../../images/place-order.PNG';
import bikeLogo from '../../images/Group 1151.png';
import helmet from '../../images/Group 1152.png'
import './PlaceOrder.css'
import styled from '@emotion/styled';

const PlaceOrder = () => {
    const StyledButton = styled(Button)({
        backgroundColor: '#CA1533', cursor: 'pointer', ':hover': {
            color: '#CA1533',
            backgroundColor: 'white',
        }, fontWeight: 'bold', width: '30%'
    })
    return (
        <>
            <Grid container sx={{ minHeight: '65vh' }}>
                <Grid item xs={12} sm={6} textAlign={'center'} p={5}>
                    <img className='place' src={placeOrderImg} alt="" />
                </Grid>
                <Grid item xs={12} sm={6} p={5} >
                    <Stack direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}>
                        <img className='bike' src={bikeLogo} alt="" />
                        <Typography variant='h5'>
                            Your Location
                        </Typography>
                        <Typography variant='body2'>
                            House 61, Road 1
                        </Typography>
                        <Typography variant='h5'>
                            Shop Address
                        </Typography>
                        <Typography variant='body2'>
                            Banani, Road 9
                        </Typography>
                        <Stack direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}>
                            <img className='helmet' src={helmet} alt="" />
                            <Stack>
                                <Typography variant='h5'>
                                    Sakib
                                </Typography>
                                <Typography variant='body2'>
                                    Your Raider
                                </Typography>
                            </Stack>

                        </Stack>
                        <StyledButton variant='contained'>
                            Contact
                        </StyledButton>
                    </Stack>

                </Grid>
            </Grid>
        </>
    )
}

export default PlaceOrder