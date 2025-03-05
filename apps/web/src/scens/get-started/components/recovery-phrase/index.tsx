import { ceedRecoveryPhrase, copyIcon, recoveryPhrase } from '@/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import './style.css'
import { useRouter } from 'next/navigation'
const RecoveryPhrase = () => {
    const [step, setStep] = useState(1);
    const [wordCount, setWordCount] = useState(24);
    const navigate = useRouter().push;
//  step 1 ==> hint users , step 2 ==> generate ceeds , step 3 ==> validate ceeds  
    const walletCeeds = [
        'mango', 'nectarine', 'orange', 'papaya', 'quince', 'raspberry',
        'strawberry', 'tangerine', 'ugli', 'vanilla', 'watermelon', 'xigua',
        'yam', 'zucchini', 'avocado', 'blueberry', 'cantaloupe', 'dragonfruit',
        'elderberry', 'gooseberry', 'huckleberry', 'mulberry', 'olive', 'pomegranate'
    ];

    // get random 24/12 words from walletCeeds array and shuffle them
    return (
        <div className='container-RecoveryPhrase' >
            {step === 1 &&
                <div className='hint-RecoveryPhrase' >
                    <Image src={recoveryPhrase} alt='recovery-phrase' />
                    <h1>Write Down Your Recovery Phrase</h1>
                    <p>Your recovery phrase is the only way to restore access to your wallet if you lose your device.
                        We strongly recommend writing it down on paper and keeping it in a safe place. Do not store it digitally, take a screenshot, or send it via email—keeping it offline ensures maximum security.</p>

                    <button className='cta-RecoveryPhrase' onClick={() => setStep(2)} >Continue</button>
                </div>}
            {
                step === 2 &&
                <div className='hint-RecoveryPhrase' style={{ gap: '10px' }} >
                    <Image src={ceedRecoveryPhrase} alt='recovery-phrase' />
                    <h1>Recovery Phrase</h1>
                    <p>Write down the following {wordCount} words in the correct order and keep them in a safe place.</p>
                    <select defaultValue={24} onChange={(e) => setWordCount(parseInt(e.target.value))} >
                        <option value={12} >12 Words</option>
                        <option value={24}>24 Words</option>
                    </select>
                    <div className='ceeds-RecoveryPhrase' >
                        {walletCeeds.slice(0, wordCount).map((word, index) => <span key={index} >{index + 1}. {word}</span>)}
                    </div>
                    <button className='copyCeeds-RecoveryPhrase' ><Image src={copyIcon} alt='' />Copy to clipboard</button>
                    <button className='cta-RecoveryPhrase' onClick={() => setStep(3)} >Continue</button>
                </div>
            }

            {
                step === 3 &&
                <div className='hint-RecoveryPhrase' style={{ gap: '10px' }} >
                    <Image src={ceedRecoveryPhrase} alt='recovery-phrase' />
                    <h1>Confirm Recovery Phrase</h1>
                    <p>Enter the words in the correct order to verify your backup and ensure you’ve written it down correctly.</p>
                    <div className='ceeds-RecoveryPhrase' >
                        {walletCeeds.slice(0, wordCount).map((word, index) => <span key={index} >{index + 1}. {word}</span>)}
                    </div>
                    <button className='copyCeeds-RecoveryPhrase' ><Image src={copyIcon} alt='' />Copy to clipboard</button>
                    <button className='cta-RecoveryPhrase' onClick={() => navigate('/get-started?step=master-password')} >Continue</button>
                </div>
            }
        </div>
    )
}

export default RecoveryPhrase