import React from 'react'

const Button = ({ styles }) => (
    <button type='button' className={`py-4 px-6 bg-blue-gradient
    hover:bg-gradient-to-r from-sky-200 to-cyan-500
    font-poppins font-medium text-[18px] rounded-md
    text-primary outline-none  ${styles}`}>
      Get Started
    </button>
  )

export default Button