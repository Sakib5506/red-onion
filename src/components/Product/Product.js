import styled from '@emotion/styled';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/menu'
import SIngleProduct from '../SingleProduct/SIngleProduct';
import './Product.css'

const Product = () => {
    const [allFood, setAllFood] = useState([]);
    const [selectedType, setSelectedType] = useState('breakfast');
    const [isSelected, setSelected] = useState(false);

    useEffect(() => {
        setAllFood(fakeData);
    }, [])

    const StyledTypography = styled(Typography)({
        fontWeight: 'bold', ':hover': {
            color: '#CA1533',
            borderBottom: '1px solid #CA1533'
        }, cursor: 'pointer'
    });

    const StyledButton = styled(Button)({
        backgroundColor: '#CA1533', cursor: 'pointer', ':hover': {
            color: '#CA1533',
            backgroundColor: 'white',
        }, fontWeight: 'bold'
    })

    const handleStyle = event => {

        console.log(event);
        event.target.style.borderBottom = '1px solid #CA1533';
        event.target.style.color = '#CA1533';
        setSelectedType(event.target.innerText.toLowerCase());
    };


    return (
        <Box sx={{ p: 5 }}
        >
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={5}
            >
                <Grid item >
                    <StyledTypography
                        onClick={(e) =>
                            handleStyle(e)
                        }

                    >
                        Breakfast
                    </StyledTypography>
                </Grid>
                <Grid item>
                    <StyledTypography
                        onClick={(e) =>
                            handleStyle(e)
                        }
                    >
                        Lunch
                    </StyledTypography>
                </Grid>
                <Grid item>
                    <StyledTypography
                        onClick={(e) =>
                            handleStyle(e)
                        }
                    >
                        Dinner
                    </StyledTypography>
                </Grid>
            </Grid>


            <Grid container>
                {
                    allFood.filter((item) => item.category === selectedType).map((pd, idx) =>
                        <SIngleProduct pd={pd}
                            idx={idx}
                            key={pd.index}
                        >

                        </SIngleProduct>)
                }
            </Grid>
            <Box align='center' m={3}>
                <StyledButton variant='contained'>
                    Checkout Your Food
                </StyledButton>
            </Box>

        </Box >
    )
}

export default Product

