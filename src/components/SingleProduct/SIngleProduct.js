import { Grid, Paper, Typography } from '@mui/material';
import React, { useReducer } from 'react'
import { Link } from 'react-router-dom';
import './SingleProduct.css'

const SIngleProduct = (props) => {
    const { name, category, about, price, id } = props.pd.pd;
    let imgDisit = props.idx;

    return (

        <Grid item xs={12} sm={6} md={4}>

            <Paper elevation={0} align='center' sx={{ m: 5, pt: 5, cursor: 'pointer' }}
            // onClick={(e) => console.log(id)}
            > <Link className='link' to={'/food/' + id + '/index/' + imgDisit}>

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
                </Link>
            </Paper>

        </Grid >

    )
}

export default SIngleProduct