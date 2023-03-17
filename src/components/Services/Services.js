import { Grid, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import services1 from '../../images/adult-blur-blurred-background-687824.png';
import services2 from '../../images/chef-cook-food-33614.png';
import services3 from '../../images/architecture-building-city-2047397.png';
import './Services.css'
import SingleService from '../SingleService/SingleService';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const Services = () => {
    return (
        <Container >
            <Box sx={{ m: { xs: 5, lg: 3 } }}>
                <Typography variant='h4' mb={5}>
                    Why you choose us
                </Typography>
                <Typography variant='h6' mb={5}>
                    Lorem ipsum dolor sit, amet consectetur  adipisicing elit. <br /> Assumenda sit magni facere tempore voluptas cum
                </Typography>
            </Box>

            <Grid container direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <Grid item xs={12} sm={6} lg={4} >

                    <SingleService
                        img={services1}
                        title={'Fast Delivery'}
                        icon={<DeliveryDiningIcon fontSize='small' sx={{ color: 'white', backgroundColor: '#CA1533', borderRadius: '50%', p: 1 }} />}

                    />

                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <SingleService
                        img={services2}
                        title={'A Good Auto Response'}
                        icon={<CircleNotificationsIcon fontSize='small' sx={{ color: 'white', backgroundColor: '#CA1533', borderRadius: '50%', p: 1 }} />}
                    />

                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <SingleService
                        img={services3}
                        title={'Home Delivery'}
                        icon={<LocalShippingIcon fontSize='small' sx={{ color: 'white', backgroundColor: '#CA1533', borderRadius: '50%', p: 1 }} />}
                    />
                </Grid>
            </Grid>

        </Container >
    )
}

export default Services