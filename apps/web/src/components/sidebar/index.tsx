import React from 'react'
import './style.css'
import Image from 'next/image'
import { lockIcon, plusIcon, searchIcon } from '@/assets'
const Sidebar = () => {
    return (
        <div className='sidebarContainer' >
            <div className='walletName-sidebar' ><span>😀</span><h2>Wallet 1</h2><Image src={lockIcon} alt='lock-icon' /></div>
            <div className='addAccount-sidebar' >
                <button><Image src={plusIcon} alt='plus-icon' />Add Account</button>
                <button><Image src={searchIcon} alt='search-icon' /></button>
            </div>
        </div>
    )
}

export default Sidebar