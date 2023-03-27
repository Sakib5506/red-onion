import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import { CartContext } from '../../App';
import './CartDetails.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const CartDetails = (props) => {
    // console.log(props);

    const { cartState, cartDispatch } = useContext(CartContext);
    const { name, qty, category, id, idx } = props.item;
    // console.log(cartState);
    return (
        <Box>
            <Stack direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2} >
                <img className='cart-img' src={require(`../../images/${category}/${category}${idx + 1}.png`)} alt='Product_Image' />
                <Typography sx={{ fontWeight: '700' }}>{name}</Typography>
                <Typography sx={{ fontWeight: '700' }} >Total item: {qty}</Typography>
                <DeleteForeverIcon
                    onClick={() => cartDispatch({ type: 'REMOVE_FROM_CART', payload: id })}
                    sx={{
                        cursor: 'pointer', ':hover': {
                            color: '#CA1533',
                        },
                    }}></DeleteForeverIcon>
            </Stack>




        </Box>
    )
}

export default CartDetails