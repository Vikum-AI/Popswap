import React from 'react'
import '../Styles/header.css'
import logo from '../Assets/Asset 4@4x-100 1.png'

// Use useRef for navigation (or just classes)
// JSX

export default function header() {
    return (
        <div className='header'>
            
            <img src = { logo } alt="logo" />

            

                <ul className="nav-links">

                
                    <div className="link">
                        <li className="nav-link"> <a href="#"> How it works </a> </li>
                        <li className="nav-link"> <a href="#"> FAQ </a> </li>
                        <li className="nav-link"> <a href="#"> Languages </a> </li>
                    </div>
                </ul>

                <ul className='nav-links'>

                    <div className="connect">
                        <li className="nav-link"> <a href="#"> Connect Wallet </a> </li>
                    </div>


                </ul>

            

        </div>
    )
}
