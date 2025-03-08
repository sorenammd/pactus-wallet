"use client";

import React, { Suspense } from 'react'
import './style.css'
import Sidebar from '@/components/sidebar';
import Header from '@/components/header';
const Wallet = () => {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className='container-wallet' >
                <Sidebar />
                <div className='content-wallet'>
                    <Header title='Overview' />

                </div>
            </div>
        </Suspense>
    )
}

export default Wallet