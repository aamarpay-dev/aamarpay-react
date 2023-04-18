import axios from 'axios';
import { useState } from 'react'
const sandboxUrl = 'https://sandbox.aamarpay.com/index.php';

function App() {
  let uploadAbleData = new FormData();

  const request = async () => {
    const data = {
      cus_name: "rayhan",
      cus_email: "r@gmail.com",
      cus_phone: "01767766789",
      amount: 10,
      store_id: "aamarpaytest",
      tran_id: Math.floor(Math.random() * 10000),
      success_url: "example.com",
      fail_url: "example.com",
      cancel_url: "example.com",
      currency: "BDT",
      signature_key: "dbb74894e82415a2f7ff0ec3a97e4183",
      desc: "Description",
      cus_add1: "Dhaka",
      cus_add2: "Dhaka",
      cus_city: "Dhaka",
      cus_state: "Dhaka",
      cus_postcode: "0",
      cus_country: "Bangladesh",
      type: "json"
    }
    for (const x in data) {
      uploadAbleData.append(x, data[x]);
    }
    try {
      const response = await axios.post(sandboxUrl, uploadAbleData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },

      });
      const data = await response.data;
      console.log(data)
    } catch (error) {
      console.log(error);
    } finally {

    }
  }
  request()
  return (
    <div className="App">
      Rayhan
    </div>
  )
}

export default App;
