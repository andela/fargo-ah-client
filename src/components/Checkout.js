import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import PropTypes from 'prop-types';

const successPayment = () => {
  window.location.reload();
};

const errorPayment = () => {
  alert('Payment unsuccessful');
};

const fromDollarToCents = amount => parseFloat(amount, 10) * 100;


const onToken = (amount, description, articleSlug) => (token) => {
  axios.post(`https://fargo-ah-staging.herokuapp.com/api/pay/${articleSlug}`,
    {
      description,
      stripeTokenType: token.type,
      stripeEmail: token.email,
      stripeToken: token.id,
      amount: fromDollarToCents(amount),
    }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('authorsHaven-token')}` },
    })
    .then(successPayment)
    .catch(errorPayment);
};

const Checkout = ({
  name, description, amount, articleSlug,
}) => (
  <StripeCheckout
    name={name}
    description={description}
    amount={fromDollarToCents(amount)}
    token={onToken(amount, description, articleSlug)}
    stripeKey="pk_test_wru4olmO5pcwwBfBkbh2OTy3"
  />
);

export default Checkout;

Checkout.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  articleSlug: PropTypes.string.isRequired,
};
