import React from 'react'
import AdminHeader from '../components/Layout/AdminHeader'
import AdminSideBar from '../components/Admin/Layout/AdminSideBar'
import GetRequestDetails from '../components/Admin/GetRequestDetails'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { host } from '../server'

const AdminDashboardJobDetails = () => {
  const {id} = useParams();
  return (
    <>
    <Helmet>
            <title>Admin Job Details Dotte</title>
            <meta
            name="description"
            content="Welcome to Dotte E-Commerce Website. Let's know about Dotte Click for more..."
            />
            <link rel="canonical" href={`${host}/admin-get-career-request/${id}`} />
        </Helmet>
    <AdminHeader />
    <div className="w-full flex">
      <div className="flex items-center justify-center w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <AdminSideBar />
        </div>
        <GetRequestDetails />
      </div>
    </div>
  </>
  )
}

export default AdminDashboardJobDetails