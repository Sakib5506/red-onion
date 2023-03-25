import { Button, Grid, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import React, { useContext, useReducer, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import fakeDATA from '../../fakeData/menu';
import './ProductDetails.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from '@emotion/styled';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { countReducer, countInitState } from '../../reducers/countReducer';
import Cart from '../Cart/Cart';
import { CartContext } from '../../App';


const ProductDetails = () => {
    const { foodId, indexId } = useParams();
    const foodItem = fakeDATA.find(item => item.id === foodId);
    const imgDisit = parseInt(indexId);
    const randomNumber1 = Math.floor(Math.random() * (6 - 1)) + 1;
    const randomNumber2 = Math.floor(Math.random() * (6 - 1)) + 1;

    const [countState, dispatchCount] = useReducer(countReducer, countInitState);

    //context
    const { cartState, cartDispatch } = useContext(CartContext)

    const addToCartHandler = () => {

        cartDispatch({ type: 'ADD_TO_CART', payload: { foodItem, countState, imgDisit } });
        dispatchCount({ type: 'RESET' })

    }



    const StyledButton = styled(Button)({
        marginRight: '10px', color: 'white', backgroundColor: '#CA1533', borderRadius: '20px', padding: '10px 30px',
        ':hover': {
            color: '#CA1533',
            backgroundColor: 'white'
        }, fontWeight: 'bold'
    })

    // console.log(cartState);

    return (
        <Box>
            <Grid container >
                <Grid item xs={12} sm={5} p={3} >
                    <Box sx={{ margin: { xs: '1rem', sm: '2rem', lg: '6rem' } }}>

                        <Grid container
                            direction="column"
                            justifyContent="center"
                            alignItems="flex-start">



                            <Typography variant='h3' mb={5}>
                                {foodItem.name}
                            </Typography>

                            <Typography variant='caption' color={grey} mb={5}>
                                {foodItem.details}
                            </Typography>

                            <Stack direction={'row'} alignItems={'center'} spacing={5} mb={4}>
                                <Typography variant='h4'>
                                    {`${foodItem.price} ৳`}
                                </Typography>
                                <Box>
                                    <Stack direction={'row'} sx={{ cursor: 'pointer' }} spacing={2}>
                                        <RemoveIcon fontSize='medium'
                                            onClick={() => dispatchCount({ type: 'DECREASE_COUNT', payload: foodItem.id })}
                                        >

                                        </RemoveIcon>
                                        <Typography variant='h5'>
                                            {countState.count}
                                        </Typography>
                                        <AddIcon fontSize='medium'
                                            onClick={() => dispatchCount({ type: 'INCREASE_COUNT', payload: foodItem.id })}
                                        >
                                        </AddIcon>
                                    </Stack>
                                </Box>

                            </Stack>
                            <StyledButton onClick={() => addToCartHandler(foodItem, countState)}>
                                <ShoppingCartOutlinedIcon />
                                Add
                            </StyledButton>

                        </Grid>
                    </Box>
                </Grid >


                <Grid item xs={12} sm={3} lg={4} p={2}>
                    <img className='product-img' src={require(`../../images/${foodItem.category}/${foodItem.category}${imgDisit + 1}.png`)} alt='Product_Image' />
                </Grid>

                <Grid item xs={12} sm={4} lg={3} p={2}>
                    <Cart cartState={cartState}></Cart>
                </Grid>


                <Grid sx={{ marginLeft: { xs: '1rem', sm: '2rem', lg: '6rem' } }} mb={5}>
                    <Stack direction={'row'} spacing={2} alignItems={'center'} >
                        <img className='suggestion-img' src={require(`../../images/${foodItem.category}/${foodItem.category}${randomNumber1}.png`)} alt='Product_Image' />
                        <img className='suggestion-img' src={require(`../../images/${foodItem.category}/${foodItem.category}${randomNumber2}.png`)} alt='Product_Image' />
                        <Link to={'/'}>
                            <ArrowForwardIosIcon color='error'></ArrowForwardIosIcon>
                        </Link>

                    </Stack>
                </Grid>

            </Grid >
        </Box >
    )
}

export default ProductDetails