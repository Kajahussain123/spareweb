import React from 'react';
import './Cart.css';
import { Col, Row } from 'react-bootstrap';
import NavbarComponent from '../Components/Navbar';
import { MdOutlineLocalShipping } from 'react-icons/md';

function Cart() {
    return (
        <div>
            <NavbarComponent />
            <div className="CartAppss md-5 ms-3">
                <div className="Cart-container">
                    <h1>My Cart</h1>
                    <Row className='mt-3'>
                        <Col lg={8} xs={12} className="p-3 Cart-items-container">
                            <div className="Cart-shipping-info">
                                <p><span className="Cart-shipping-icon"><MdOutlineLocalShipping /></span> Free Shipping all over India</p>
                            </div>
                            <div className="Cart-items">
                                <div className="Cart-item">
                                    <img src="https://i.postimg.cc/CKHtVptG/backlight.png" alt="Maruthi Ulto Break light" className="Cart-item-img img-fluid" />
                                    <div className="Cart-item-details">
                                        <h3>Maruthi Ulto Break light</h3>
                                        <p>Fiber and Glass Metal Combinations</p>
                                        <p>ID: 5363827</p>
                                        <div className="Cart-item-quantity">
                                            <input type="number" defaultValue="1" className="Cart-quantity-input" />
                                        </div>
                                    </div>
                                    <div className="Cart-item-price">
                                        <p>₹ 460.00</p>
                                    </div>
                                    <button className='Cart-buybutton'>Buy Now</button>
                                </div>
                                {/* Repeat for other items */}
                            </div>
                        </Col>
                        <Col lg={4} xs={12} className="p-3">
                            <div className="Cart-summary p-3">
                                <div className="Cart-price-details">
                                    <div className="Cart-price-row">
                                        <p>Price (4 Items)</p>
                                        <p>₹ 5,367</p>
                                    </div>
                                    <div className="Cart-price-row">
                                        <p>Discount</p>
                                        <p>-₹ 1,500</p>
                                    </div>
                                    <div className="Cart-price-row">
                                        <p>Coupons for you</p>
                                        <p>-₹ 207</p>
                                    </div>
                                    <div className="Cart-price-row">
                                        <p>Delivery Charges</p>
                                        <p>-₹ 200</p>
                                    </div>
                                    <hr />
                                    <div className="Cart-price-row Cart-total-amount">
                                        <p>Total Amount</p>
                                        <p>₹ 3,460</p>
                                    </div>
                                </div>
                                <button className="Cart-checkout-button">Checkout to proceed</button>
                                <button className="Cart-google-pay-button">Continue with Google Pay</button>
                            </div>
                            <div className='mt-3'>
                                <p>Advertisement</p>
                                <img className="img-fluid" src="https://i.postimg.cc/DZ9rz8RR/dd27ff13f17623b463c00b07971a794c.jpg" alt="Advertisement" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Cart;
