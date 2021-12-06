import React from 'react'


import mastercard from '../Assets/image 4.png'
import visa from '../Assets/image 5.png'
import arrow from '../Assets/arrow-right.png'
import '../Styles/main.css'
import swap from '../Assets/baseline_import_export_black_24dp.png'
import SwapCoin from './SwapCoin/SwapCoin'

export default function main() {

    return (
        <div className='main'>
            
            <div className="info">

                <h1 className='exchange'> Simple & Secure <br /> Crypto Exchange </h1>

                <p> The fastest and most secure way to exchange <br /> your crypto without registration, limits, and <br /> worriness. </p>

                <button> Get your wallet <img src = { arrow } alt="" /> </button>

                <p> Buy crypto with: </p>

                <div className="pay">

                    <img className='master' src = { mastercard } alt="mastercard" />
                    <img className='visa' src = { visa } alt="visa" />

                </div>

            </div>

            <div className="convert">

                <SwapCoin />

            </div>

        </div>
    )
}
