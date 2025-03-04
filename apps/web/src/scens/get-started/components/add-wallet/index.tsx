'use client'
import { existingWalletIcon, newWalletIcon, walletEleman } from '@/assets'
import Image from 'next/image'
import React from 'react'
import './style.css'
const AddWallet = () => {
    return (
        <div className='container-addwallet' >
            <Image src={walletEleman} width={248} height={248} alt='walletEleman' />
            <h1>Add Wallet</h1>
            <p>Easily create a new wallet or import an existing one to manage your digital assets securely.</p>
            <div className='ctas-addwallet' >
                <button>
                    <Image src={newWalletIcon} alt='newWalletIcon' />
                    <div><h3>New Wallet</h3><p>Create a brand-new wallet and start your journey with Pactus securely.</p></div>
                </button>
                <button>
                    <Image src={existingWalletIcon} alt='newWalletIcon' />
                    <div><h3>Existing Wallet</h3><p>Restore access to your wallet by securely entering your recovery phrase or by importing a wallet file.</p></div>
                </button>
            </div>
        </div>
    )
}

export default AddWallet