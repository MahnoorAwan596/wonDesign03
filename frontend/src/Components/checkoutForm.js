import { useElements, useStripe , PaymentElement } from '@stripe/react-stripe-js';
  const   MyPaymentForm = ()=> {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    const result = await stripe.createToken(elements.getElement(PaymentElement));
    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
    } else {
      // Send the token to your server
      console.log(result.token);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      {/* <button type="submit" disabled={!stripe}>
        Pay
      </button> */}
    </form>
  );
}
export default MyPaymentForm 