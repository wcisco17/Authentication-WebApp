import React from 'react'


const Button = ({ text, color, onClick }) => (
    <button style={{ backgroundColor: color }} className='main_btn'
    onClick={onClick}
    >
        {text}
    </button>
)


export { Button }