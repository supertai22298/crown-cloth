import React from 'react'
import './custom-button.style.scss'

const CustomButton = ({ children, isGoogleSignInButton, ...otherProps }) => {
  return (
    <button
      className={`${
        isGoogleSignInButton && 'google-sign-in-button'
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  )
}
export default CustomButton
