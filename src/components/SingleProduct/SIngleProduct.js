import { Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import './SingleProduct.css'

const SIngleProduct = (props) => {
    // console.log(props);
    const { name, category, about, price } = props.pd;
    let imgDisit = props.idx;

    return (

        <Grid item xs={12} sm={6} md={4}>

            <Paper elevation={0} align='center' sx={{ m: 5, pt: 5 }}>
                <img className='product-img' src={require(`../../images/${category}/${category}${imgDisit + 1}.png`)} alt='Product_Image' />
                <Typography mb={1} variant='h5'>
                    {name}
                </Typography>
                <Typography variant='caption'>
                    {about}
                </Typography>
                <Typography mt={1} variant='h5'>
                    {`${price} ৳`}
                </Typography>
            </Paper>

        </Grid >

    )
}

export default SIngleProduct