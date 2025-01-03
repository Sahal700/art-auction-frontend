import React from "react";
import { useNavigate } from "react-router-dom";

function AdminHome() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Admin Dashboard
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Manage Auctions */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Manage Auctions
            </h2>
            <p className="text-gray-500 mb-6">
              View and manage all auctions on the platform.
            </p>
            <button onClick={()=>{navigate('/admin-manage/auction')}} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              View Auctions
            </button>
          </div>

          {/* Manage Users */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Manage Users
            </h2>
            <p className="text-gray-500 mb-6">
              View, edit, and manage user accounts.
            </p>
            <button onClick={()=>{navigate('/admin-view/users')}} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
              View Users
            </button>
          </div>

          {/* Add Auction */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Add New Auction
            </h2>
            <p className="text-gray-500 mb-6">
              Add new auctions to the platform.
            </p>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
              Add Auction
            </button>
          </div>

          {/* Reports */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Reports & Analytics
            </h2>
            <p className="text-gray-500 mb-6">
              View platform performance and generate reports.
            </p>
            <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">
              View Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
