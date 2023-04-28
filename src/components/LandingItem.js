import React from 'react'

const LandingItem = ({ item }) => {
    const { title, content } = item;
    return (
        <div className='landing-item'>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}

export default LandingItem