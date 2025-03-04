import Image from 'next/image';
import React from 'react'
import ThreeDMotion from '../3d-motion';
import { openSourceIcon, secureIcon, simpleIcon } from '@/assets';
import './style.css'
const Welcome = () => {
  const data = [
    { title: 'Open Source', icon: openSourceIcon, description: 'Pactus Wallet is fully open source, explore and contribute to our code [here](LINK).' },
    { title: 'Simple', icon: simpleIcon, description: 'Pactus Wallet is designed for everyone, from beginners to advanced users.' },
    { title: 'Secure', icon: secureIcon, description: 'Pactus Wallet is a fully static wallet. There is no server involved and all data including \n your private keys are stored in your browser. ' },
  ];
  return (
    <>
      <div className='titer-GetStarted' >
        <h1>
          Hello!<br />
          <span>Welcome to</span><span style={{ marginLeft: '5px' }} className='gradient-GetStarted' >Pactus Wallet</span>
        </h1>
      </div>

      <div className='section1-GetStarted' >
        <div className='slogans-GetStarted' >
          {
            data.map((item, i) => (<div key={`${i}-slogan`} >
              <Image src={item.icon} alt='' />
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>))
          }
        </div>
        <div>
          <ThreeDMotion />
        </div>
      </div>

      <div className='letsCta-GetStarted' >

        <div><input type="checkbox" /><p>I have read and agreed to the <span className='gradient-GetStarted'> Terms and Conditions</span>.</p></div>
        <button>Let’s Start</button>
      </div>

    </>)
}

export default Welcome