import React from 'react'
import Header from '../components/Layout/Header'
import CheckoutSteps from "../components/Checkout/CheckoutSteps";
import Checkout from "../components/Checkout/Checkout";
import Footer from '../components/Layout/Footer';
import { Helmet } from 'react-helmet-async';
import { host } from '../server';

const CheckoutPage = () => {
  return (
    <>
    <Helmet>
            <title>Check Out Dotte</title>
            <meta
            name="description"
            content="Welcome to Dotte E-Commerce Website. Let's know about Dotte Click for more..."
            />
            <link rel="canonical" href={`${host}/checkout`} />
        </Helmet>
        <Header />
        <br />
        <br />
        <CheckoutSteps active={1} />
        <Checkout />
        <br />
        <br />
        <Footer />
    </>
  )
}

export default CheckoutPage