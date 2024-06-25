import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import Footer from '../../components/Layout/Footer'
import OrderDetails from "../../components/Shop/OrderDetails";
import { Helmet } from 'react-helmet-async';
import { host } from '../../server';
import { useParams } from 'react-router-dom';

const ShopOrderDetails = () => {
  const {id} = useParams();
  return (
    <>
    <Helmet>
            <title>Shop Order Details Dotte</title>
            <meta
            name="description"
            content="Welcome to Dotte E-Commerce Website. Let's know about Dotte Click for more..."
            />
            <link rel="canonical" href={`${host}/order/${id}`} />
        </Helmet>
         <DashboardHeader />
         <OrderDetails />
          <Footer />
    </>
  )
}

export default ShopOrderDetails