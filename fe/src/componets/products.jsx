import React from 'react'
import "../styles/products.css"
import axios from "axios"
const Products = ({data}) => 
{
    console.log(data);




    const checkouthandler = async(amount) => {

        const {data : keyData} = await axios.get("/api/v1/getkey");
        const {key} = keyData;
         console.log(keyData);


        const {data : orderData} = await axios.post("/api/v1/payment/process",{
            amount
        })
        const {order} = orderData;
        console.log(order);


        const options = {
        key: key, // Replace with your Razorpay key_id
        amount: amount, // Amount is in currency subunits.
        currency: 'INR',
        name: 'Acme Corp',
        description: 'Test Transaction',
        order_id: order.id, // This is the order_id created in the backend
        callback_url: "http://localhost:5000/api/v1/paymentVerification", // Your success URL
        prefill: {
          name: 'Gaurav Kumar',
          email: 'gaurav.kumar@example.com',
          contact: '9999999999'
        },
        theme: {
          color: '#008bfd'
        },
      };

      const rzp = new Razorpay(options);
      rzp.open();
    
       
    }
    return(
            <div className='products-container'>
                {
                    data.map((item)=>(
                        <div className='product-card' key={item.id}>
                        <img src={item.image} alt="product" className='product-image'></img>
                        <h3 className='product-title'>{item.title}</h3>
                        <p className='product-price'>price <strong>{item.price}</strong> </p>
                        <button className='pay-button' onClick={()=>checkouthandler(item.price)}>pay {item.price}</button>
                        </div>
                    ))}

            </div>
    );
}
export default Products;
