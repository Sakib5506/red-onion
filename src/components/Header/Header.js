import { AppBar, Box, Button, Menu, MenuItem, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import logo from '../../images/logo2.png';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css'
import styled from '@emotion/styled';



const Header = () => {
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
            <AppBar position='static' color='transparent'>
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <img style={{ height: '40px', marginLeft: '30px' }} src={logo} alt="" />
                    </Box>
                    <Box sx={{ mr: 2 }}>
                        <ShoppingCartOutlinedIcon sx={{ mr: 2 }} />
                        <LoginButton sx={{ display: { xs: 'none', md: 'inline-block' } }} variant='text'
                        >
                            Login
                        </LoginButton>

                        <SignUpButton sx={{ display: { xs: 'none', md: 'inline-block' } }} className='btn-header'>
                            Sign Up
                        </SignUpButton>

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
                                <MenuItem>
                                    <LoginButton variant='text'>
                                        Login
                                    </LoginButton>
                                </MenuItem>
                                <MenuItem>
                                    <SignUpButton variant='contained'>
                                        Sign Up
                                    </SignUpButton>
                                </MenuItem>
                            </Box>


                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box >
    );
};

export default Header;