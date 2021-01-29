import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51He4xkG8Gl4cuFbNehiyPmPhhFjRh3i7w7kwPeqnno4MM9ETl1xJXZ9buJxVnu3iPeRx5XaXpIUr1UyES7FVqSfu00ePl4ICej';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;