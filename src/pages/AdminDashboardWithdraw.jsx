import React from 'react'
import AdminHeader from '../components/Layout/AdminHeader'
import AdminSideBar from '../components/Admin/Layout/AdminSideBar'
import AllWithdraw from "../components/Admin/AllWithdraw";
import { Helmet } from 'react-helmet-async';
import { host } from '../server';

const AdminDashboardWithdraw = () => {
  return (
    <>
    <Helmet>
            <title>Admin Withdraw Dotte</title>
            <meta
            name="description"
            content="Welcome to Dotte E-Commerce Website. Let's know about Dotte Click for more..."
            />
            <link rel="canonical" href={`${host}/admin-withdraw-request`} />
        </Helmet>
    <AdminHeader />
    <div className="w-full flex">
      <div className="flex items-start justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <AdminSideBar active={10} />
        </div>
         <AllWithdraw />
      </div>
    </div>
  </>
  )
}

export default AdminDashboardWithdraw