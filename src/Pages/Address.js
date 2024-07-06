import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Stepper, Step, StepLabel } from '@mui/material';
import { GeoAlt, CheckCircle } from 'react-bootstrap-icons';
import { GrMapLocation } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";
import { VscPreview } from "react-icons/vsc";
import './Address.css';
import NavbarComponent from '../Components/Navbar';
import { Link } from 'react-router-dom';

const steps = ['Cart', 'Address', 'Review', 'Tracking'];

function Address() {
  return (
    <div>
      <NavbarComponent />
      <Container className='main-page mt-5'>
        <Row className='icons-row'>
          <Col>
            <Stepper activeStep={0} alternativeLabel className="custom-stepper">
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={StepIcon} icon={index + 1}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="shipping-address">
              <h3>Shipping address</h3>
              <div className="address-type p-2">
                <input type="radio" id="home" name="addressType" defaultChecked />
                <label htmlFor="home"><b>Home</b></label>
                <input type="radio" id="work" name="addressType" />
                <label htmlFor="work"><b>Work</b></label>
              </div>
              <div className="form-fields">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Phone Number" />
                <select>
                  <option value="">PIN Code</option>
                  {/* Add options for PIN codes */}
                </select>
                <input type="text" placeholder="Address" />
                <div className="row-fields">
                  <input type="text" placeholder="State" />
                  <input type="text" placeholder="City" />
                </div>
                <input type="text" placeholder="Road name/ Area/ Colony" />
                <input type="text" placeholder="House No./ Building Name" />
                <input type="text" placeholder="Nearby famous shop/Landmark" />
              </div>
              <div className="buttons">
                <Link to={'/product'}><button className="back">Back</button></Link>
                <Link to={'/payment'}><button className="continue">Continue</button></Link>
              </div>
            </div>
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

export default Address;
