'use client'
import { addWalletLottie, existingWalletIcon, newWalletIcon } from '@/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import LottiePlayer from '@/components/lottie-player'

const AddWallet = () => {


    return (
        <div className='container-addwallet' >

            <LottiePlayer endFrame={30} lottieFile={addWalletLottie} />
            <h1>Add Wallet</h1>
            <p>Easily create a new wallet or import an existing one to manage your digital assets securely.</p>
            <div className='ctas-addwallet' >
                <button  >
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