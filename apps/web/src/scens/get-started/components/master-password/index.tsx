import { masterPasswordIcon, showPasswordIcon } from '@/assets'
import Image from 'next/image'
import React from 'react'
import './style.css'
const MasterPassword = () => {
    return (

        <div className='container-MasterPassword' >
            <Image src={masterPasswordIcon} alt='' />
            <h1>Create Master Password</h1>
            <p>Set a strong password to protect your wallet and keep your funds safe.</p>
            <div className='input-MasterPassword' > <input type='text' /><button><Image src={showPasswordIcon} alt='' /></button> </div>
            <div className='input-MasterPassword' > <input type='password' /><button><Image src={showPasswordIcon} alt='' /></button> </div>
            <div className='terms-MasterPassword' ><input type="checkbox" /><p>I have read and agreed to the <span className='gradient-MasterPassword'> Terms and Conditions</span>.</p></div>

            <button className='cta-MasterPassword'  >Continue</button>
        </div>
    )
}

export default MasterPassword