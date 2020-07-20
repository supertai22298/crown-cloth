import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100

  const publishableKey =
    'pk_test_51H6nh5FLvYAKFg2hViObnph7EfcmdW8pDZ9nxiqnBaPROmURSjBQKb806bCC5wDvNO5NVNwlZDIIk25lkoAFrjaH00ZUKAErVg'

  const onToken = (token) => {
    console.log(token)
  }
  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Cloth"
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
      />
  )
}

export default StripeCheckoutButton