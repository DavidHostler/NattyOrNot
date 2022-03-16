import React, { useState } from 'react';
//import { useHistory, useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

/* Repurpose this code to build the AddToOrder object and use JSON string to store local cart data
for a user who is not logged in*/


/*  order_order_id = models.CharField(max_length=15, default="0")
    customer_customer_name = models.CharField(max_length=50)
    customer_customer_address = models.CharField(max_length=50)
    customer_customer_phone_number_number = models.CharField(max_length=50, default="0-000-000-000")
*/


//onClick create new Javascript object to store details of particular item and send it to the database
const AddCartItem = () => {

    //let history = useHistory();
    let history = useNavigate();
    //If there is not default value set for the prop.child below in the Django REST api, 
    //There will be an error 400 in the web console.
    const [order_id, setOrder_id] = useState(null);
    const [customer_name, setCustomer_name] = useState(null);
    const [customer_address, setCustomer_address]  = useState(null);
    const [customer_phone_number, setCustomer_phone_number] = useState(null);

    


     
    //const [cookie, setCookie] = useState([])


    const addNewCartItem = async () => {
        const formArray = [];
        let formField = new FormData()
        formField.append('order_id', order_id)
        formField.append('customer_name',customer_name)
        formField.append('customer_address',customer_address)
        formField.append('customer_phone_number',customer_phone_number)
        //formField.append('cookie', cookie)
        for (var value of formField.values()) {
          //console.log(value); 
          formArray.push(value);
       }
       let formJSON = JSON.stringify(formArray);

       

        await axios({
          method: 'post',
          url:'http://localhost:8000/api/orders/',
          data: formField 
          /*
        data: {
        
          order_id: formJSON.order_id,
          customer_name: formJSON.customer_name,
          customer_address:formJSON.customer_address,
          customer_phone_number: formJSON.customer_phone_number,
          //cookie: formField.cookie,
          
        }
        */
        

        }).then(response=>{
          //console.log(response.data);
          
         console.log(formJSON);
          history.push('/')

        })
    }
   
    return (
        <div classcustomer_name="container">
            <div classcustomer_name="container">
      <div classcustomer_name="w-75 mx-auto shadow p-5">
        <h2 classcustomer_name="text-center mb-4">Add A CartItem</h2>
        
        <div classcustomer_name="form-group">
            <input
              type="text"
              classcustomer_name="form-control form-control-lg"
              placeholder="Enter Your order_id"
              customer_name="order_id"
              value={order_id}
              onChange={(e) => setOrder_id(e.target.value)}
            />
          </div>
         
       

          <div classcustomer_name="form-group">
            <input
              type="text"
              classcustomer_name="form-control form-control-lg"
              placeholder="Enter Your Name"
              customer_name="customer_name"
              value={customer_name}
              onChange={(e) => setCustomer_name(e.target.value)}
            />
          </div>
         
            <div classcustomer_name="form-group">
            <input
              type="customer_address"
              classcustomer_name="form-control form-control-lg"
              placeholder="Enter Your Address"
              customer_name="customer_address"
              value={customer_address}
              onChange={(e) => setCustomer_address(e.target.value)}
            />
          </div>
          <div classcustomer_name="form-group">
            <input
              type="text"
              classcustomer_name="form-control form-control-lg"
              placeholder="Enter Your Number"
              customer_name="customer_phone_number"
              value={customer_phone_number}
              onChange={(e) => setCustomer_phone_number(e.target.value)}
            />
          </div>
           
          <button classcustomer_name="btn btn-primary btn-block" onClick={addNewCartItem}>Submit Customer Details</button>
       
    </div>
      </div>
        </div>
    );
};

export default AddCartItem;
