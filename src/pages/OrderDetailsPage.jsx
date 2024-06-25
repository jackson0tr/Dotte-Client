import React from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import UserOrderDetails from "../components/UserOrderDetails";
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { host } from '../server';

const OrderDetailsPage = () => {
  const {id} = useParams();
  return (
    <>
    <Helmet>
            <title>Order Details Dotte</title>
            <meta
            name="description"
            content="Welcome to Dotte E-Commerce Website. Let's know about Dotte Click for more..."
            />
            <link rel="canonical" href={`${host}/user/order/${id}`} />
        </Helmet>
        <Header />
        <UserOrderDetails />
        <Footer />
    </>
  )
}

export default OrderDetailsPage