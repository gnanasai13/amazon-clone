import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login'; 
import Orders from './Orders';
import { useStateValue } from './Stateprovider';
import { auth } from './firebase';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const promise = loadStripe('pk_test_51MuhGJSFXjiR08JXZ07m62n9sBX9OprKtNjrk2zEnyWYwv0nmHfboA77TbvKIPV5mLROldbKYN5A6LokI241cjYL00XgCMH9vo');


function App() {
  const [{}, dispatch]= useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        dispatch({
          type:'SET_USER',
          user:null
        })

      }
    })

  }, [])
  return (
<Router>
  <div className="App">
    
    <Routes>
      <Route path="/login" element={[<Login/>]}/>
      <Route path="/checkout" element={[<Header/>,<Checkout/>]}/>
      <Route path="/payment" element={<>
        <Header/> 
        <Elements stripe={promise}>
          <Payment/>
        </Elements>
        </>
      }/>
      <Route path="/orders" element={[<Header/>,<Orders/>]}/>
      <Route path="/" element={[<Header/>,<Home/>]}/>
    </Routes>
  </div>
</Router>
    
  );
}

export default App;
