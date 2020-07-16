import React from 'react'
import './custom-button.style.scss'

const CustomButton = ({
  children,
  isGoogleSignInButton,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`
      ${isGoogleSignInButton && 'google-sign-in-button '}
      ${inverted && 'inverted '} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  )
}
export default CustomButton
