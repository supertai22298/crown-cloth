import React from 'react'
import './App.css'
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'

import { Switch, Route, Redirect } from 'react-router-dom'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { connect } from 'react-redux'
import { checkUserSession } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors'
import { createStructuredSelector } from 'reselect'
import CheckoutPage from './pages/checkout/checkout.component'

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { checkUserSession } = this.props
    checkUserSession()
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />

          <Route
            exact
            path="/sign-in"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
