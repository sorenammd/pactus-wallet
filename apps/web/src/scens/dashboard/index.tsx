import React from 'react'
import './style.css'
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
const Dashboard = () => {
  return (
    <div className='container-dashboard' >
      <Sidebar />
      <div className='content-dashboard'>
        <Header title='Overview' />

      </div>
    </div>
  )
}

export default Dashboard