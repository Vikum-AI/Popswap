import React from 'react'
import '../Styles/faq.css'

// Need more styling on FAQ with animations

export default function faq(props) {
    return (
        <div className='faq'>
            
            <h2> { props.header } </h2>
            <p> { props.content } </p>

        </div>
    )
}
