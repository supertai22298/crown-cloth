import React from 'react'

import './sign-in.style.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions'
class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }
  handleSubmit = async (event) => {
    event.preventDefault()
    const { email, password } = this.state
    const { emailSignInStart } = this.props

    emailSignInStart(email, password)
  }

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  render() {
    const { googleSignInStart } = this.props

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            name="email"
            value={this.state.email}
            type="email"
            required
            label="Email"
          />

          <FormInput
            name="password"
            value={this.state.password}
            type="password"
            required
            handleChange={this.handleChange}
            label="Password"
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              type="button"
              onClick={googleSignInStart}
              isGoogleSignInButton={true}
            >
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
})

export default connect(null, mapDispatchToProps)(SignIn)
