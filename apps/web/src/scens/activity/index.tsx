"use client";
import React, { Suspense } from 'react'
import './style.css'
import Sidebar from '@/components/sidebar'
import Header from '@/components/header'
const Activity = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className='container-activity' >
      <Sidebar />
      <div className='content-activity'>
        <Header title='Activity' />

      </div>
    </div>
    </Suspense>
  )
}

export default Activity