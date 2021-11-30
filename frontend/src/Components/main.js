import React from 'react'
import mastercard from '../Assets/image 4.png'
import visa from '../Assets/image 5.png'


export default function main() {
    return (
        <div>
            
            <div className="info">

                <h1> Simple & Secure Crypto Exchange </h1>

                <p> The fastest and most secure way to exchange your crypto without registration, limits, and worriness. </p>

                <button> Get your wallet </button>

                <p> Buy crypto with: </p>

                <div className="pay">

                    <img src = { mastercard } alt="mastercard" />
                    <img src = { visa } alt="visa" />

                </div>

            </div>

            <div className="convert">

                

            </div>
        </div>
    )
}
