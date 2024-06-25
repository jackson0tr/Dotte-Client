import React from 'react'
import AdminHeader from '../components/Layout/AdminHeader'
import AdminSideBar from '../components/Admin/Layout/AdminSideBar'
import EditCareer from '../components/Admin/EditCareer'

const AdminDashboardCreateCareer = () => {
  return (
    <div>
    <AdminHeader />
    <div className="w-full flex">
      <div className="flex items-start justify-between w-full">
        <div className="w-[80px] pr-[40px] 800px:w-[330px]">
          <AdminSideBar />
        </div>
        <EditCareer />
      </div>
    </div>
  </div>
  )
}

export default AdminDashboardCreateCareer