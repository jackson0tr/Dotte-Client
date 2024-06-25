import React from 'react'
import AdminHeader from '../components/Layout/AdminHeader'
import AdminSideBar from '../components/Admin/Layout/AdminSideBar'
import AllCareers from '../components/Admin/AllCareers'
import { Helmet } from 'react-helmet-async'
import { host } from '../server'

const AdminDashboardAllCareers = () => {
  return (
    <>
    <Helmet>
            <title>Admin All Careers Dotte</title>
            <meta
            name="description"
            content="Welcome to Dotte E-Commerce Website. Let's know about Dotte Click for more..."
            />
            <link rel="canonical" href={`${host}/admin-all-careers`} />
        </Helmet>
    <AdminHeader />
    <div className="w-full flex">
      <div className="flex items-start justify-between w-full">
        <div className="w-[80px] pr-[40px] 800px:w-[330px]">
          <AdminSideBar active={7} />
        </div>
        <AllCareers />
      </div>
    </div>
  </>
  )
}

export default AdminDashboardAllCareers