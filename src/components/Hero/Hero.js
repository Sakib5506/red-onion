import styled from '@emotion/styled';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bgImage from '../../images/bannerbackground.png';
import './Hero.css'

const Hero = () => {
    const SearchBox = styled(TextField)(() => ({
        '& fieldset': {
            borderRadius: '25px',

        },
    }));

    return (

        <Box sx={{
            backgroundImage: `url(${bgImage})`,
            height: { xs: '50vw', sm: '35vh', md: '60vh', lg: '70vh' },
            width: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
            <Box>
                <Box>
                    <Typography align='center'
                        sx={{
                            fontSize: {
                                lg: 50,
                                md: 40,
                                sm: 30,
                                xs: 15
                            }
                        }}
                    >
                        Best food waiting for your belly
                    </Typography>
                </Box>

                <Box m={2} >
                    <form>
                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, md: 0 }}>

                            <SearchBox sx={{ width: { xs: '30vh', sm: '50vh' }, backgroundColor: 'white' }} variant='outlined' placeholder='Search food items'>

                            </SearchBox>

                            <Button type='submit' variant='contained' sx={{

                                color: 'white', backgroundColor: '#CA1533',
                                ':hover': {
                                    color: '#CA1533',
                                    bgcolor: 'white',
                                }, padding: '15px 30px', borderRadius: '25px', fontWeight: 'bold',
                            }}>
                                Search
                            </Button>

                        </Stack>




                    </form>
                </Box>



            </Box>
        </Box >

    );
};

export default Hero;