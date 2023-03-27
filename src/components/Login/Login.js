import React, { useContext, useState } from 'react'
import { UserContext } from '../../App'
import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import GoogleIcon from '@mui/icons-material/Google';
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import firebaseConfig from './firebase.config';
import { Button, Checkbox, FormControl, FormControlLabel, Paper, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { red } from '@mui/material/colors';
import { useLocation, useNavigate } from 'react-router-dom';

const app = initializeApp(firebaseConfig);

const Login = () => {

    const [newUser, setNewUser] = useState(false);
    // console.log(newUser);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        isSignedIn: 'false',
        photo: ''
    });
    // console.log(loggedInUser);
    //for private route
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || "/";

    console.log(user.isSignedIn);
    const handleGoogleSignIn = () => {

        const provider = new GoogleAuthProvider();

        // if (firebase.app.length === 0) { }
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
                const { displayName, email, photoURL } = result.user;
                const newUserInfo = { name: displayName, email, photo: photoURL }
                newUserInfo.isSignedIn = true;
                setUser(newUserInfo)
                setLoggedInUser(newUserInfo);
                navigate(from, { replace: true })

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }


    const handleChage = (e) => {
        let isFormValid = true;
        if (e.target.name === 'email') {
            isFormValid = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(e.target.value);
        }
        if (e.target.name === 'password' && e.target.value === e.target.value) {
            const isPasswordValid = e.target.value.length > 5;
            const isPasswordHasNumber = /\d{1}/.test(e.target.value);
            isFormValid = isPasswordHasNumber && isPasswordValid;
        }
        if (isFormValid) {
            const validUser = { ...user };
            validUser[e.target.name] = e.target.value;
            setUser(validUser)
        }
    }
    // console.log(user);


    const handleSubmit = (e) => {
        e.preventDefault();

        if (newUser && user.email && user.password) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, user.email, user.password)
                .then((userCredential) => {

                    const newUserInfo = userCredential.user;
                    newUserInfo.displayName = user.name;

                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    newUserInfo.error = '';
                    newUserInfo.isSignedIn = true;
                    console.log(newUserInfo);
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    navigate(from, { replace: true })
                })
                .catch((error) => {
                    const newUserInfo = {};
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    navigate(from, { replace: true })

                    // ..
                });
        }

        if (!newUser && user.email && user.password) {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, user.email, user.password)
                .then((userCredential) => {
                    // Signed in 
                    const newUserInfo = userCredential.user;
                    newUserInfo.success = true;
                    newUserInfo.isSignedIn = true;
                    newUserInfo.error = '';
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    navigate(from, { replace: true })

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    const newUserInfo = {};
                    newUserInfo.error = errorMessage;
                    newUserInfo.isSignedIn = false;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    navigate(from, { replace: true })
                });

        }

    }
    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            const newUserInfo = {
                name: '',
                email: '',
                isSignedIn: false,
                photo: '',
                error: '',
                success: false
            }
            setUser(newUserInfo);
            setLoggedInUser(newUserInfo)
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });

    }


    return (
        <Box sx={{ minHeight: '65vh' }}>
            <Stack direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}>


                <Paper sx={{ margin: '20px', padding: '20px', minWidth: '50vh' }} elevation={20}>
                    <Stack spacing={2}>

                        {
                            user.isSignedIn ? (<Button variant='contained' onClick={handleGoogleSignIn}><GoogleIcon sx={{ marginRight: '5px' }} />Contineu with Google </Button>) : (<Button variant='contained' onClick={handleSignOut}>Sign Out</Button>)
                        }

                        <form onSubmit={handleSubmit}>

                            <Stack >
                                <FormControlLabel
                                    onChange={() => setNewUser(!newUser)} control={<Checkbox />} label="New User Sign up" />

                                {
                                    newUser && (
                                        <TextField onBlur={handleChage} label='Name' name='name' variant='filled' placeholder='Enter your name' required></TextField>
                                    )
                                }

                                <TextField onBlur={handleChage} label='Email' name='email' variant='filled' placeholder='Enter your email' required></TextField>

                                <TextField onBlur={handleChage} type={'password'} name='password' label='Password' variant='filled' placeholder='Enter password' required></TextField>

                                <Button type='submit' variant='contained'>{newUser ? 'Sign up' : 'Sign in'}</Button>
                            </Stack>
                        </form>
                        {
                            <Typography textAlign={'center'} color={'red'}>{user.error}</Typography>
                        }
                        {
                            user.success && (
                                <Typography textAlign={'center'} color={'green'}>
                                    User {newUser ? 'created' : 'logged in'} successfully
                                </Typography>)
                        }
                    </Stack>
                </Paper>


            </Stack>

        </Box >
    )
}

export default Login