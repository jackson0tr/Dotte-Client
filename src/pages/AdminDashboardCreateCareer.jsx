import React from 'react'
import AdminHeader from '../components/Layout/AdminHeader'
import AdminSideBar from '../components/Admin/Layout/AdminSideBar'
import CreateCareer from '../components/Admin/CreateCareer'
import { Helmet } from 'react-helmet-async'
import { host } from '../server'

const AdminDashboardCreateCareer = () => {
  return (
    <>
      <Helmet>
        <title>Admin Create Career Dotte</title>
        <meta
          name="description"
          content="Welcome to Dotte E-Commerce Website. Let's know about Dotte Click for more..."
        />
        <link rel="canonical" href={`${host}/admin-create-career`} />
      </Helmet>
      <AdminHeader />
      <div className="flex items-center justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <AdminSideBar active={6} />
        </div>
        <div className="w-full justify-center flex">
          <CreateCareer />
        </div>
      </div>
    </>
  )
}

export default AdminDashboardCreateCareer