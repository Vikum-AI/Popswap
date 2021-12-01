import React from 'react'


import mastercard from '../Assets/image 4.png'
import visa from '../Assets/image 5.png'
import arrow from '../Assets/arrow-right.png'
import '../Styles/main.css'
import swap from '../Assets/baseline_import_export_black_24dp.png'


export default function main() {

    let number = '40 ETC'

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

                <div className="balance">

                    <h2> Swap </h2>
                    <h3> Balance { number } </h3>

                </div>

                <div className="from">
                    <h3> From </h3>

                    <div className="from-1">

                        <select name="from" id="from"> 

                            <option value="eth"> ETH </option>
                            <option value="eth"> BTC </option>

                        </select>

                        <input type="number" />

                    </div>

                </div>

                <div className="swap">

                    <button> <img src = { swap } alt="" /> </button>

                </div>

            </div>

            <div className="how">

                <h2> How it works </h2>
                <div className="box">  </div>

            </div>
        </div>
    )
}
