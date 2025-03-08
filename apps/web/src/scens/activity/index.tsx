import React from 'react'
import './style.css'
import Sidebar from '@/components/sidebar'
import Header from '@/components/header'
const Activity = () => {
  return (
    <div className='container-activity' >
      <Sidebar />
      <div className='content-activity'>
        <Header title='Activity' />

      </div>
    </div>
  )
}

export default Activity