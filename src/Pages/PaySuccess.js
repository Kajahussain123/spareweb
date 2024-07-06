import React from 'react';
import './PaySuc.css'

function PaySuccess() {
  return (
    <div className="order-app">
      <header className="order-app-header">
        <img src="logo.png" className="order-app-logo" alt="logo" />
        <h1>THANK YOU</h1>
        <h2>YOUR ORDER IS CONFIRMED</h2>
      </header>
      <div className="order-details-container">
        <div className="track-order-container">
          <h3>Track your Order</h3>
          <p>Placed on January 18 2024</p>
          <div className="order-status-container">
            <div className="order-status completed">Placed</div>
            <div className="order-status completed">Picked</div>
            <div className="order-status">Shipped</div>
            <div className="order-status">Delivered</div>
          </div>
          <p>Expected Delivery on 27/07/2024 at 08:00 AM</p>
        </div>
        <div className="order-summary-container">
          <h3>ORDER ID: 2527284</h3>
          <p>Address: Ponnadath House, Actoor, Trissur, Kerala 65735</p>
          <div className="product-price-container">
            <p>Price: ₹ 40</p>
            <p>Product Packing: ₹ 20</p>
            <p>Product Shipping: ₹ 100</p>
            <p>Discount: -₹ 40</p>
            <p>Total Amount: ₹ 130</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaySuccess;
