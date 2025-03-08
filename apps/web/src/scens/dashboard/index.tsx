"use client";
import React, { Suspense } from 'react'
import './style.css'
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'

const Dashboard = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='container-dashboard' >
        <Sidebar />
        <div className='content-dashboard'>
          <Header title='Overview' />

        </div>
      </div>
    </Suspense>
  )
}

export default Dashboard