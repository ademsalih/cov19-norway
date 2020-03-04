import React from 'react'
import './style.css'

import spinner from './spinner.png'

export const Spinner = () => {
    return(
        <div className="spinnerBox">
            <img src={spinner} className="spinner" alt="spinner"/>
            <p>Laster inn</p>
        </div>
    )
}