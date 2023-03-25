import { AppBar, Badge, Box, Button, Menu, MenuItem, Toolbar } from '@mui/material';
import React, { useContext, useState } from 'react';
import logo from '../../images/logo2.png';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css'
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { CartContext } from '../../App';



const Header = () => {
    const { cartState, cartDispatch } = useContext(CartContext)
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
            <AppBar position='static' color='transparent'>
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <Link to={'/'}>
                            <img style={{ height: '40px', marginLeft: '30px' }} src={logo} alt="" />
                        </Link>
                    </Box>
                    <Box sx={{ mr: 2 }}>
                        <Badge badgeContent={totalItem} color={'error'} sx={{ m: 2 }} >
                            <ShoppingCartOutlinedIcon />
                        </Badge>

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