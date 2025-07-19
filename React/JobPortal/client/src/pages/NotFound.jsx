import React from 'react'
import { FiHome, FiAlertTriangle, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div className="min-h-[90vh] bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        {/* 404 Icon */}
        <div className="mb-6">
          <div className="relative">
            <FiAlertTriangle className="mx-auto text-6xl text-red-400 mb-2" />
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-8 h-8 flex items-center justify-center font-bold">
              !
            </div>
          </div>
        </div>

        {/* 404 Text */}
        <div className="mb-6">
          <h1 className="text-6xl font-bold text-gray-800 mb-2">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Page Not Found</h2>
          <p className="text-gray-500 leading-relaxed">
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Link
            to="/"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center gap-2 transform hover:scale-105"
          >
            <FiHome className="text-lg" />
            Go Back Home
          </Link>
        </div>

        {/* Additional Help */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-400">
            Need help? Contact our{' '}
            <Link to="/contact" className="text-blue-500 hover:text-blue-600 font-medium">
              support team
            </Link>
          </p>
        </div>
      </div>

      {/* Background Animation Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-indigo-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-purple-200 rounded-full opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-pink-200 rounded-full opacity-20 animate-pulse delay-3000"></div>
      </div>
    </div>
    </>
  )
}

export default NotFound