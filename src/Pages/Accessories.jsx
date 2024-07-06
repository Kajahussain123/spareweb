import React from 'react';
import NavbarComponent from '../Components/Navbar';
import './Accessories.css';
import { Card, Col, Container, Row, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

function Accessories() {
  const commonAccessories = [
    {
      imgSrc: "https://i.postimg.cc/CKHtVptG/backlight.png",
      title: "Car Break light",
      subtitle: "45% OFF"
    },
    {
        imgSrc: "https://i.postimg.cc/B6hPktBd/2b9e2de85bb754de38a14b3886366f52.png",
        title: "Car Body Cover",
        subtitle: "From $200"
      },
    {
      imgSrc: "https://i.postimg.cc/W3z7fRPb/9b43ff92fb9625bc0cf59a822a6d63ca.png",
      title: "Gorf Mobile Holder",
      subtitle: "Grab Now"
    },
    {
      imgSrc: "https://i.postimg.cc/B6hPktBd/2b9e2de85bb754de38a14b3886366f52.png",
      title: "Car Body Cover",
      subtitle: "From $200"
    },
    {
        imgSrc: "https://i.postimg.cc/B6hPktBd/2b9e2de85bb754de38a14b3886366f52.png",
        title: "Car Body Cover",
        subtitle: "From $200"
      },
    {
      imgSrc: "https://i.postimg.cc/CKHtVptG/backlight.png",
      title: "Car Break light",
      subtitle: "Shop Now!"
    }
    // Add more product data as needed
  ];

  return (
    <div style={{ overflow: "hidden" }}>
      {/* navbar */}
      <div>
        <NavbarComponent />
      </div>
      {/* Search Field */}
      <Container className="mt-5 cont">
        <Form className="d-flex mb-5">
          <Form.Control
            type="search"
            placeholder="Search Accessories"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success"><FaSearch /></Button>
        </Form>
      </Container>
      {/* Bike and Car Cards */}
      <Container className="mb-5 cont">
        <Row>
          <Col md={6}>
            <Link to={'/bikeaccess'} style={{ textDecoration: "none" }}>
              <Card className='cardss' style={{ padding: "20px", border: "1px solid white", boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)" }}>
                <Card.Img variant="top" style={{height:"280px"}} src="https://i.postimg.cc/ZRw51sFY/raviraj-singh-tomar-y-AS8-Onsdaho-unsplash.jpg" />
                <Card.Body>
                  <center> <Card.Title>Bike Accessories</Card.Title></center>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col md={6}>
            <Link to={'/caraccess'} style={{ textDecoration: "none" }}>
              <Card className='cardss' style={{ padding: "20px", border: "1px solid white", boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)" }}>
                <Card.Img variant="top" style={{height:"280px"}}  src="https://i.postimg.cc/yYQ0FnMH/waldemar-c-xu-KGftep4-unsplash.jpg" />
                <Card.Body>
                  <center> <Card.Title>Car Accessories</Card.Title></center>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
      {/* Common Accessories Section */}
      <Container className='cont'>
        <h3>Common Accessories</h3>
        <Row className="mt-4">
          {commonAccessories.map((product, index) => (
            <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
              <Link to={'/product'} style={{textDecoration:"none"}}>
                <Card className='common-accessory-card'>
                  <Card.Img variant="top" src={product.imgSrc} className="product-image" />
                  <Card.Body>
                    <center><Card.Title className="product-title">{product.title}</Card.Title></center>
                    <center><Card.Title className="product-subtitle"><b>{product.subtitle}</b></Card.Title></center>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Accessories;