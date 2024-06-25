import React from 'react'
import AdminHeader from '../components/Layout/AdminHeader'
import AdminSideBar from '../components/Admin/Layout/AdminSideBar'
import AllMails from '../components/Admin/AllMails'
import { Helmet } from 'react-helmet-async'
import { host } from '../server'

const AdminAllSubscribers = () => {
  return (
    <>
    <Helmet>
            <title>Admin All Subscribers Dotte</title>
            <meta
            name="description"
            content="Admin All Subscribers Dotte"
            />
            <link rel="canonical" href={`${host}/admin-all-subscribers`} />
        </Helmet>
    <AdminHeader />
    <div className="w-full flex">
      <div className="flex items-start justify-between w-full">
        <div className="w-[80px] pr-[40px] 800px:w-[330px]">
          <AdminSideBar active={11} />
        </div>
        <AllMails />
      </div>
    </div>
  </>
  )
}

export default AdminAllSubscribers