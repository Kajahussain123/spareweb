import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { Stepper, Step, StepLabel } from '@mui/material';
import { GeoAlt, CheckCircle } from 'react-bootstrap-icons';
import { GrMapLocation } from "react-icons/gr";
import { IoCardOutline, IoCartOutline } from "react-icons/io5";
import { VscPreview } from "react-icons/vsc";
import NavbarComponent from '../Components/Navbar';
import './Payment.css';
import { FaPaypal } from 'react-icons/fa';
import { MdOutlineLocalShipping } from 'react-icons/md';
import { Link } from 'react-router-dom';

const steps = ['Cart', 'Address', 'Payment', 'Tracking'];

function Payment() {
  return (
    <div>
      <NavbarComponent />
      <Container className="payment-page mt-5">
        <Row className="icons-row mb-4">
          <Col>
            <Stepper activeStep={2} alternativeLabel className="custom-stepper">
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={StepIcon} icon={index + 1}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            <h3>Payment</h3>
            <Card className="order-summary mb-4">
              <Card.Body>
                <Card.Title>ORDER ID : 2527284</Card.Title>
                <Card.Text>
                  <strong>Address:</strong> <br />
                  Ponnadath House, Aatoor, Trissur, Kerala 65735
                </Card.Text>
                <hr />
                <h6><b>Product Price</b></h6>
                <div className="price-details">
                  <span>Price</span>
                  <span>₹ 40</span>
                </div>
                <div className="price-details">
                  <span>Product Packing</span>
                  <span>₹ 20</span>
                </div>
                <div className="price-details">
                  <span>Product Shipping</span>
                  <span>₹ 100</span>
                </div>
                <div className="price-details">
                  <span>Discount</span>
                  <span>-₹ 40</span>
                </div>
                <hr />
                <Form className="coupon-form mb-3">
                  <Form.Control type="text" placeholder="Enter your Promo Code" />
                  <Button variant="outline-primary">Apply</Button>
                </Form>
                <hr />
                <h5>Total Amount</h5>
                <h3 className="total-amount">130.Rs</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="offset-md-1">
            <Form className="payment-form mt-5">
              <Button variant="outline-primary" className="w-100 mb-3">
                <FaPaypal /> UPI Payment
              </Button>
              <Button variant="outline-primary" className="w-100 mb-3">
                <IoCardOutline /> Credit / Debit / ATM Card
              </Button>
              <Button variant="outline-primary" className="w-100 mb-3">
                <MdOutlineLocalShipping /> Cash On Delivery
              </Button>
              <Form.Group className="mb-3 mt-5" controlId="formUPIID">
                <Form.Control type="text" placeholder="Enter UPI ID" />
              </Form.Group>
              <div className="buttonsp">
                <button className="backp">Back</button>
                <Link to={'/orderconfirm'}><button className="continuep">Pay 130.Rs</button></Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

// Custom StepIcon component
function StepIcon({ active, completed, icon }) {
  const iconStyle = {
    background: "white",
    borderRadius: "50%",
    width: "36px",
    height: "36px",
    padding: "8px",
    color: "green",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid white",
  };
  const icons = {
    1: <IoCartOutline style={iconStyle} />,
    2: <GrMapLocation style={iconStyle} />,
    3: <VscPreview style={iconStyle} />,
    4: <GeoAlt style={iconStyle} />
  };
  return (
    <div>
      {completed ? <CheckCircle style={iconStyle} /> : icons[icon]}
    </div>
  );
}

export default Payment;
