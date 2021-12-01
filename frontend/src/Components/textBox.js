import React from 'react'
import '../Styles/textBox.css'

export default function textBox(props) {
    return (
        <div className='text-box'>

            <div className="box">

                <h2> { props.header } </h2>
                <p> { props.content } </p>
                
            </div>
           
        </div>
    )
}
