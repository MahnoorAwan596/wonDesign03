import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import './styles/ImagesView.css';
import { RingLoader } from 'react-spinners';
 import Modal from 'react-modal';
 import {loadStripe} from '@stripe/stripe-js';
 import {
   CardElement,
   Elements,
   useStripe,
   useElements,
 } from '@stripe/react-stripe-js';
 import  MyPaymentForm  from "./checkoutForm";
 const stripePromise = loadStripe('pk_test_yKONw0n63AR2OCYEfbgdwJlg');

const user = JSON.parse(localStorage.getItem("user"));

function ImagesView(props) {
  
  const [singleContest, setSingleContest] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [price , setPrice] = useState('')
  const [paidView , setPaidView] = useState(false)

  const location = useLocation();

  let data = props.data;
  console.log('abc',data)
  

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
    console.log(data);
    fetch(`/browse/contestopen/${location.state.id}`)
      .then((response) => response.json())
      .then((json) => setSingleContest(json));
  }, [data]);
  const options = {
    // passing the client secret obtained from the server
    clientSecret: 'sk_test_7tZHyX642LmkZN8myf1Fs6yh',
  };
  const CARD_ELEMENT_OPTIONS = {
    iconStyle: "solid",
      hidePostalCode: true,
      style: {
        base: {
          iconColor: "rgb(240, 57, 122)",
          color: "rgb(240, 57, 122)",
         fontSize: "16px",
          fontFamily: '"Open Sans", sans-serif',
          fontSmoothing: "antialiased",
       "::placeholder": {
           color: "#CFD7DF"
        }
        },
        invalid: {
          color: "#e5424d",
          ":focus": {
            color: "#303238"
          }
        }
      }
    };
  // const CheckoutForm = () => {
  //   return (
  //     <div>
  //  <div class="product-info">
  //   <h3 className="product-title">Apple MacBook Pro</h3>
  //         <h4 className="product-price">$999</h4>
  //       </div>
  //       <form onSubmit={()=>{
  //         console.log(
  //           "ok"
  //         )
  //       }}>
  //        <PaymentElement />
  //         <button className="btn-pay">Buy Now</button>
  //       </form>
  //     </div>
  //   );
    
  // };
  // function CardSection() {
  //   return <CardElement options={CARD_ELEMENT_OPTIONS} />;
  // }
const CheckoutForm = (data) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    console.log('event',event);
   
      // try {
      //   const res = await fetch("/payment", {
      //     method: "post",
      //     headers: {
      //       "Content-Type": "application/json"
      //     },
      //     body:{
      //       amount:100
      //     }
      //   });
      //   const data = await res.json();
      //   console.log(data);
      //   setUserName(data.username);
      //   setShow(true);
  
      // } catch (err) {
      //   console.log(err);
      // }

    event.preventDefault();

    if (elements == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
  };
  console.log('>>>>>>>>>>>>>',data);
  return (

    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || !elements}>
        Pay
      </button>
    </form>
  );
};
  function arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  const selectedWinner = (id) => {
    window.alert("Winner Selected");
    fetch("/winner", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        contestId: location.state.id,
        phone: user.phone,
        userId: id,
      }),
    });
    console.log("winner id ", id);
  };

  let currenttime = new Date().getTime();

  let eventtime = new Date(singleContest.enddate).getTime();

  return (
    <div>
      {
        loading ?
          <RingLoader
            className="loader"
            color={"#147d6c"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          :
          <div className="ImagesView-section">
            <h2>Images for this contest</h2>
            <div className="IV-map-method">
              {data.map((item) => {
                let base64String = arrayBufferToBase64(item.img.data.data);
                return (
                  <div style={{ padding: "30px" }}>
                    <div className="IV-card">
                      <img className="IV-card-image" src={`data:image/png;base64,${base64String}`} alt="" />
                      {/* <h4>Designer</h4> */}
                      <span className="IV-card-name">
                        <h5>Name : <span>{item.name}</span></h5>
                      </span>
                      <span className="IV-card-email">
                        <h5>Email : <span>{item.email}</span></h5>
                      </span>
                      <span className="IV-card-email">
                        <h5>Phone : <span>{item.phone}</span></h5>
                      </span>
                      {
                        // (user.type === 'client' && user.name === 'Asim') ?
                        (user.type === 'client') && (currenttime < eventtime) ?
                         <div>
                           {paidView ? null : 
                          <div>
<button className="IV-card-select-button"
                            onClick={() => selectedWinner(item.userId)}>
                            {/* onClick={revert(item)}>  */}
                            Select As Winner
                          </button>
                         <input placeholder="pkr"  onChange={(text)=>{
                           setPrice(text.target.value)
                         }}/>
                         <button onClick={async ()=>{
                 let result = await fetch(
                  '/payment',
                  {
                    method: 'POST',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({price , "customer":"cus_FHsxH6kvZqTpJN" , "source":"tok_visa" , "currency":"usd", "description":"Charge for JJ@example.com" , "receipt_email":"test@test.com",id:item._id}),
                  },
                );
                result = await result.json();
                if(result.message === 'payment done'){
                  setPaidView(true)
                  alert('Payment Done')
                }
                
                         }}>
                           Pay
                         </button>
                          </div> 
                          }
                            
                         </div>
                          :
                          null
                      }
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
      }
    
    </div>


  );
}

export default ImagesView;
