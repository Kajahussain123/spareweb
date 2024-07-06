import React from 'react';
import './Cart.css';
import { Col, Row } from 'react-bootstrap';
import NavbarComponent from '../Components/Navbar';
import { MdOutlineLocalShipping } from 'react-icons/md';

function MyOrders() {
    return (
        <div>
            <NavbarComponent />
            <div className="CartAppss md-5 ms-3">
                <div className="Cart-container">
                    <h1>My Orders</h1>
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
                                        <p>Aero star</p>
                                        <p>Delivered On 27/3/2023</p>
                                        
                                    </div>
                                    
                                </div>
                                <div className="Cart-item">
                                    <img src="https://i.postimg.cc/CKHtVptG/backlight.png" alt="Maruthi Ulto Break light" className="Cart-item-img img-fluid" />
                                    <div className="Cart-item-details">
                                        <h3>Maruthi Ulto Break light</h3>
                                        <p>Fiber and Glass Metal Combinations</p>
                                        <p>Aero star</p>
                                        <p>Delivered On 27/3/2023</p>
                                        
                                    </div>
                                    
                                </div>
                                <div className="Cart-item">
                                    <img src="https://i.postimg.cc/CKHtVptG/backlight.png" alt="Maruthi Ulto Break light" className="Cart-item-img img-fluid" />
                                    <div className="Cart-item-details">
                                        <h3>Maruthi Ulto Break light</h3>
                                        <p>Fiber and Glass Metal Combinations</p>
                                        <p>Aero star</p>
                                        <p>Delivered On 27/3/2023</p>
                                        
                                    </div>
                                    
                                </div>
                                <div className="Cart-item">
                                    <img src="https://i.postimg.cc/CKHtVptG/backlight.png" alt="Maruthi Ulto Break light" className="Cart-item-img img-fluid" />
                                    <div className="Cart-item-details">
                                        <h3>Maruthi Ulto Break light</h3>
                                        <p>Fiber and Glass Metal Combinations</p>
                                        <p>Aero star</p>
                                        <p>Delivered On 27/3/2023</p>
                                        
                                    </div>
                                   
                                    
                                </div>
                                {/* Repeat for other items */}
                            </div>
                        </Col>
                        <Col lg={4} xs={12} className="p-3">
                            
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

export default MyOrders;
