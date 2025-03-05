import { chooseNameIcon } from '@/assets'
import Image from 'next/image'
import React from 'react'
import './style.css'
const ChooseNameWallet = () => {
    const emojis = [
        "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "🥲", "🥹", "☺️", "😊", "😇", "🙂", "🙃", "😉", "😌",
        "😍", "🥰", "😘", "😗", "😙", "😚", "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🥸", "🤩",
        "🥳", "🙂‍↕️", "😏", "😒", "🙂‍↔️", "😞", "😔", "😟", "😕", "🙁", "☹️", "😣", "😖", "😫", "😩", "🥺",
        "😢", "😭", "😮‍💨", "😤", "😠", "😡", "🤬", "🤯", "😳", "🥵", "🥶", "😱", "😨", "😰", "😥", "😓", "🫣",
        "🤗", "🫡", "🤔", "🫢", "🤭", "🤫", "🤥", "😶", "😶‍🌫️", "😐", "😑", "😬", "🫨", "🫠", "🙄", "😯", "😦",
        "😧", "😮", "😲", "🥱", "😴", "🤤", "😪", "😵", "😵‍💫", "🫥", "🤐", "🥴", "🤢", "🤮", "🤧", "😷", "🤒",
        "🤕", "🤑", "🤠", "😈", "👿", "👹", "👺", "🤡", "💩", "👻", "💀", "☠️", "👽", "👾", "🤖", "🎃", "😺", "😸",
        "😹", "😻", "😼", "😽", "🙀", "😿", "😾"
    ];

    return (
        <div className='container-ChooseNameWallet' >
            <Image src={chooseNameIcon} alt='recovery-ChooseNameWallet' />
            <h1>Name your Wallet</h1>
            <p>Name yor wallet to easily identify it using the Pactus wallet. these names are stored locally, and can only be seen by you.</p>
            <div className='input-ChooseNameWallet'>
                <input
                    type='text'
                    placeholder="Wallet name"
                />

            </div>
            <div className='emoji-ChooseNameWallet' >
                {emojis.map((emoji, index) => (<button key={`${index}-emoji`} >{emoji}</button>))}
            </div>
            <button className='cta-ChooseNameWallet'  >Finish</button>
        </div>
    )
}

export default ChooseNameWallet