import React from 'react'
import './style.css'

function Loading() {
    return (
        <div className="loading">
            <div className='loading-image'>
                <img src="/images/loading.png" alt="Loading" />
                <h1>Hey, Please search any movies</h1>
            </div>
        </div>
    )
}

export default Loading