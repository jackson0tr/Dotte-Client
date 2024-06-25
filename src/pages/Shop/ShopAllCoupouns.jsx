import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar'
import AllCoupons from "../../components/Shop/AllCoupons";
import { Helmet } from 'react-helmet-async';
import { host } from '../../server';

const ShopAllCoupouns = () => {
  return (
    <>
    <Helmet>
            <title>Shop All Coupouns Dotte</title>
            <meta
            name="description"
            content="Welcome to Dotte E-Commerce Website. Let's know about Dotte Click for more..."
            />
            <link rel="canonical" href={`${host}/dashboard-coupouns`} />
        </Helmet>
        <DashboardHeader />
        <div className="flex justify-between w-full">
            <div className="w-[80px] 800px:w-[330px]">
              <DashboardSideBar active={9} />
            </div>
            <div className="w-full justify-center flex">
                <AllCoupons />
            </div>
          </div>
    </>
  )
}

export default ShopAllCoupouns