import React from 'react'
import Products from "./componets/products.jsx";
import data from './componets/data.js';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import PaymentSuccess from './componets/paymentSuccess.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products data={data}/>}/>

        <Route path="/Success" element={<PaymentSuccess />}/>
      </Routes>
    </Router>

  );
};

export default App
