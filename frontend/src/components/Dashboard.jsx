import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Dashboard = () => {
      return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 w-64 flex h-screen">
        {/* Sidebar content */}
        <div className="py-4 px-6">
          <h1 className="text-white text-lg font-semibold mb-4 justify-center flex shadow-xl">Admin Panel</h1>
          <hr />
          <ul>
            <li className="mb-2">
              <Link to="/dashboard" className="text-gray-300 text-sm hover:bg-gray-700 py-2 px-4 block">Dashboard</Link>
            </li>
            <li className="mb-2">
              <Link to="/dashboard/employees" className="text-gray-300 text-sm hover:bg-gray-700 py-2 px-4 block">Manage Employees</Link>
            </li>
            <li className="mb-2">
              <Link to="/dashboard/categories" className="text-gray-300 text-sm hover:bg-gray-700 py-2 px-4 block">Category</Link>
            </li>
            <li className="mb-2">
              <Link to="/dashboard/profiles" className="text-gray-300 text-sm hover:bg-gray-700 py-2 px-4 block">Profile</Link>
            </li>
            <li className="mb-2">
              <Link to="#" className="text-gray-300 text-sm hover:bg-gray-700 py-2 px-4 block">Logout</Link>
            </li>
            {/* Add more sidebar links here */}
          </ul>
        </div>
      </div>

 
      <div className="flex-1 bg-gray-100">
        <div className="shadow-xl p-3" >
          <h1 className="text-gray-800 text-lg font-semibold flex justify-center items-center">Employee Management System</h1>
        </div>
        <Outlet />
      </div>
    </div>
  
  )
}
