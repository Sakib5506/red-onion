import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Product from '../Product/Product';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Hero></Hero>
            <Product></Product>
            <Services></Services>
            <Footer></Footer>
        </>
    );
};

export default Home;