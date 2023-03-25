import { Box, Grid, Toolbar, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import footerLogo from '../../images/logo.png'

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: 'black', p: 5 }}>

            <Grid >
                <Grid container

                >
                    <Grid item xs={12} sm={6} >
                        <Box p={2}>
                            <Link to={'/'}>
                                <img style={{ width: '30%' }} src={footerLogo} alt="" />
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Grid container
                            direction="row"
                            justifyContent={{ xs: 'center', sm: 'flex-end' }}
                            alignItems="center" spacing={5}>
                            <Grid item p={5}>
                                <Typography color={'white'}>
                                    About Online food
                                </Typography>
                                <Typography color={'white'}>
                                    Lorem ipsum dolor
                                </Typography>
                                <Typography color={'white'}>
                                    consectetur adipisicing
                                </Typography>
                                <Typography color={'white'}>
                                    dolor sit amet
                                </Typography>
                            </Grid>

                            <Grid item p={5}>
                                <Typography color={'white'}>
                                    Get Help
                                </Typography>
                                <Typography color={'white'}>
                                    Lorem, ipsum dolor.
                                </Typography>
                                <Typography color={'white'}>
                                    Lorem, ipsum.
                                </Typography>
                                <Typography color={'white'}>
                                    Lorem, ipsum dolor.
                                </Typography>
                            </Grid>



                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid mt={5}>
                <Grid container direction="row"
                    justifyContent="space-between"
                    alignItems="center">
                    <Grid item >
                        <Typography color={'white'} variant='caption'>
                            Copyright © 2023 MD. Sakib
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Grid container spacing={5}>
                            <Grid item>
                                <Typography color={'white'}>
                                    Privacy Policy
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography color={'white'}>
                                    Terms of use
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography color={'white'}>
                                    Pricing
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box >
    )
}

export default Footer