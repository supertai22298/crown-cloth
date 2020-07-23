import React from 'react'
import './sign-up.style.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { connect } from 'react-redux'
import { signUpStart } from '../../redux/user/user.actions'

class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  }
  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }
  handleSubmit = async (event) => {
    event.preventDefault()
    const { displayName, email, password, confirmPassword } = this.state

    const { signUpStart } = this.props

    if (password !== confirmPassword) {
      alert("Password don't match")
      return
    }
    signUpStart({ email, password, displayName })
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            type="text"
            name="displayName"
            label="Display Name"
            value={displayName}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            type="email"
            name="email"
            label="Email"
            value={email}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            name="password"
            label="Password"
            type="password"
            value={password}
            required
          />
          <FormInput
            handleChange={this.handleChange}
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
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredential) => {
    dispatch(signUpStart(userCredential))
    console.log(userCredential)
  },
})
export default connect(null, mapDispatchToProps)(SignUp)
