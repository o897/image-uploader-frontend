import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {

  const {user,loading} = useAuth()

  if (loading) return <div class="loader"></div> 
  if(!user) return <Navigate to="login" replace />

  return <Outlet/>; //render whichever child route matched

}

export default ProtectedRoute