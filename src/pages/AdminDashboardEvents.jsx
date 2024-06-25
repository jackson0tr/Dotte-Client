import React from 'react'
import AdminHeader from '../components/Layout/AdminHeader'
import AdminSideBar from '../components/Admin/Layout/AdminSideBar'
import AllEvents from '../components/Admin/AllEvents';
import { Helmet } from 'react-helmet-async';
import { host } from '../server';

const AdminDashboardEvents = () => {
  return (
    <>
    <Helmet>
            <title>Admin All Events Dotte</title>
            <meta
            name="description"
            content="Welcome to Dotte E-Commerce Website. Let's know about Dotte Click for more..."
            />
            <link rel="canonical" href={`${host}/admin-events`} />
        </Helmet>
    <AdminHeader />
    <div className="w-full flex">
      <div className="flex items-start justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <AdminSideBar active={8} />
        </div>
        <AllEvents />
      </div>
    </div>
  </>
  )
}

export default AdminDashboardEvents