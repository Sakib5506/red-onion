import { AppBar, Avatar, Badge, Box, Button, Menu, MenuItem, Toolbar } from '@mui/material';
import React, { useContext, useState } from 'react';
import logo from '../../images/logo2.png';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css'
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { CartContext, UserContext } from '../../App';
import { Stack } from '@mui/system';



const Header = () => {
    const { cartState, cartDispatch } = useContext(CartContext);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // console.log(state);
    let totalItem = 0;
    for (let index = 0; index < cartState.length; index++) {
        const element = cartState[index];
        totalItem = totalItem + cartState[index].qty;
    }
    // console.log(totalItem);

    const [open, setOpen] = useState(false);

    const LoginButton = styled(Button)({
        marginRight: '10px', color: '#CA1533', padding: '10px 30px', borderRadius: '20px', fontWeight: 'bold'
    })

    const SignUpButton = styled(Button)({
        marginRight: '10px', color: 'white', backgroundColor: '#CA1533', borderRadius: '20px', padding: '10px 30px',
        ':hover': {
            color: '#CA1533',
            backgroundColor: 'white'
        }, fontWeight: 'bold'
    })

    return (
        <Box>
            <AppBar position='sticky' color='transparent'>
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <Link to={'/'}>
                            <img style={{ height: '40px', marginLeft: '30px' }} src={logo} alt="" />
                        </Link>
                    </Box>

                    <Stack direction={'row'} justifyContent="center"
                        alignItems="center" spacing={1} mr={2}>



                        <Link to={'/review'} style={{ textDecoration: 'none', color: 'black' }}>
                            <Badge badgeContent={totalItem} color={'error'} sx={{ m: 2 }} >
                                <ShoppingCartOutlinedIcon />
                            </Badge>

                        </Link>

                        {
                            loggedInUser.isSignedIn ? <Avatar
                                alt={(loggedInUser.name)}
                                src={loggedInUser.photo} /> : null
                        }


                        {
                            loggedInUser.isSignedIn ? (
                                <Link to={'/login'}>
                                    <LoginButton sx={{ display: { xs: 'none', md: 'inline-block' } }} variant='text'
                                        onClick={() => setLoggedInUser({})}
                                    >
                                        Log Out
                                    </LoginButton>
                                </Link>
                            ) : null
                        }


                        {
                            loggedInUser.isSignedIn ? null : (
                                <Link to={'/login'}>
                                    <LoginButton sx={{ display: { xs: 'none', md: 'inline-block' } }} variant='text'
                                    >
                                        Login
                                    </LoginButton>
                                </Link>
                            )
                        }

                        {
                            loggedInUser.isSignedIn ? null : (
                                <Link to={'/login'}>
                                    <SignUpButton sx={{ display: { xs: 'none', md: 'inline-block' } }} className='btn-header'>
                                        Sign Up
                                    </SignUpButton>
                                </Link>
                            )
                        }






                        <MenuIcon sx={{ cursor: 'pointer', display: { xs: 'inline-block', md: 'none' } }}
                            onClick={() => setOpen(!open)}
                        />
                        <Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"

                            open={open}
                            onClose={() => setOpen(!open)}

                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <Box sx={{ height: '90vh' }}>
                                {
                                    loggedInUser.isSignedIn ? null : (
                                        <MenuItem>
                                            <Link to={'/login'} style={{ textDecoration: 'none' }}>
                                                <LoginButton variant='text' >
                                                    login
                                                </LoginButton>
                                            </Link>
                                        </MenuItem>
                                    )
                                }

                                {
                                    loggedInUser.isSignedIn ? null : (
                                        <MenuItem>
                                            <Link to={'/login'} style={{ textDecoration: 'none' }}>
                                                <SignUpButton variant='contained' >
                                                    Sign Up
                                                </SignUpButton>
                                            </Link>
                                        </MenuItem>
                                    )
                                }


                                {
                                    loggedInUser.isSignedIn ? (
                                        <MenuItem>
                                            <Link to={'/login'} style={{ textDecoration: 'none' }}>
                                                <SignUpButton variant='text'
                                                    onClick={() => setLoggedInUser({})}
                                                >
                                                    Log Out
                                                </SignUpButton>
                                            </Link>
                                        </MenuItem>
                                    ) : null
                                }


                            </Box>


                        </Menu>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box >
    );
};

export default Header;