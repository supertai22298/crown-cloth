import React, { useState } from 'react'
import './sign-up.style.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { connect } from 'react-redux'
import { signUpStart } from '../../redux/user/user.actions'

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const handleChange = (event) => {
    const { name, value } = event.target
    setUserCredentials({
      ...userCredentials,
      [name]: value,
    })
  }
  const { displayName, email, password, confirmPassword } = userCredentials

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      alert("Password don't match")
      return
    }
    signUpStart({ email, password, displayName })
  }

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          type="text"
          name="displayName"
          label="Display Name"
          value={displayName}
          required
        />
        <FormInput
          handleChange={handleChange}
          type="email"
          name="email"
          label="Email"
          value={email}
          required
        />
        <FormInput
          handleChange={handleChange}
          name="password"
          label="Password"
          type="password"
          value={password}
          required
        />
        <FormInput
          handleChange={handleChange}
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          required
          value={confirmPassword}
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredential) => {
    dispatch(signUpStart(userCredential))
    console.log(userCredential)
  },
})
export default connect(null, mapDispatchToProps)(SignUp)
