import React from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import TrackOrder from "../components/Profile/TrackOrder";
import { Helmet } from 'react-helmet-async';
import { host } from '../server';
import { useParams } from 'react-router-dom';

const TrackOrderPage = () => {
  const {id} = useParams();
  return (
    <>
    <Helmet>
            <title>Track Order Page Dotte</title>
            <meta
            name="description"
            content="Welcome to Dotte E-Commerce Website. Let's know about Dotte Click for more..."
            />
            <link rel="canonical" href={`${host}/user/track/order/${id}`} />
        </Helmet>
        <Header />
        <TrackOrder />
        <Footer />
    </>
  )
}

export default TrackOrderPage