import React, { useEffect, useState } from 'react'
import NavbarComponent from '../Components/Navbar'
import './Home.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { fetchAds } from '../services/allApi';
function Home() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const getAds = async () => {
      try {
        const data = await fetchAds();
        setAds(data);
      } catch (error) {
        console.error('Error fetching ads:', error);
      }
    };

    getAds();
  }, []);


  const categories = [
    { name: 'Engine', icon: 'https://i.postimg.cc/vZd7Wgqz/7188c353f3379f392f606fcd9c3ecc40.png' },
    { name: 'Gearbox', icon: 'https://i.postimg.cc/Dy5fcR5M/66f0e5af51608283fcd62cb726f62d36.png' },
    { name: 'Suspension', icon: 'https://i.postimg.cc/SRN3Q18n/aa814e653d5a5e256e126a768a99b9fa.png' },
    { name: 'Wheels and brakes', icon: 'https://i.postimg.cc/0jQX1MRm/214c1ef898098108ef0290847b6e070f.png' },
    { name: 'Battery', icon: 'https://i.postimg.cc/PrCV6wMn/dc26c6ec2897007ee4dc513a71e46820.png' },
    { name: 'Lights', icon: 'https://i.postimg.cc/Xvb27D6n/193297155c48f35f06bbd7632dfe482d.png' },
    { name: 'Starter motor', icon: 'https://i.postimg.cc/Xvb27D6n/193297155c48f35f06bbd7632dfe482d.png' },
    { name: 'Wheels and brakes', icon: 'https://i.postimg.cc/0jQX1MRm/214c1ef898098108ef0290847b6e070f.png' },

  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Adjust speed here
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 1000 // Adjust autoplay speed here
  };

  const cards = [
    {
      imgSrc: "https://i.postimg.cc/CKHtVptG/backlight.png",
      title: "Car Break light",
      subtitle: "45% OFF"
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
      imgSrc: "https://i.postimg.cc/CKHtVptG/backlight.png",
      title: "Car Break light",
      subtitle: "Shop Now!"
    },
    {
      imgSrc: "https://i.postimg.cc/CKHtVptG/backlight.png",
      title: "Car Break light",
      subtitle: "45% OFF"
    },
    {
      imgSrc: "https://i.postimg.cc/W3z7fRPb/9b43ff92fb9625bc0cf59a822a6d63ca.png",
      title: "Gorf Mobile Holder",
      subtitle: "Grab Now"
    },
    {
      imgSrc: "https://i.postimg.cc/CKHtVptG/backlight.png",
      title: "Car Break light",
      subtitle: "45% OFF"
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
      imgSrc: "https://i.postimg.cc/CKHtVptG/backlight.png",
      title: "Car Break light",
      subtitle: "Shop Now!"
    },
    {
      imgSrc: "https://i.postimg.cc/CKHtVptG/backlight.png",
      title: "Car Break light",
      subtitle: "45% OFF"
    },
    {
      imgSrc: "https://i.postimg.cc/W3z7fRPb/9b43ff92fb9625bc0cf59a822a6d63ca.png",
      title: "Gorf Mobile Holder",
      subtitle: "Grab Now"
    }

    // Add more card data as needed
  ];
  const secondcards = [
    {
      imgSrc: "https://i.postimg.cc/CKHtVptG/backlight.png",
      title: "Car Break light",
      subtitle: "45% OFF"
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
      imgSrc: "https://i.postimg.cc/CKHtVptG/backlight.png",
      title: "Car Break light",
      subtitle: "Shop Now!"
    },
    {
      imgSrc: "https://i.postimg.cc/CKHtVptG/backlight.png",
      title: "Car Break light",
      subtitle: "45% OFF"
    },
    {
      imgSrc: "https://i.postimg.cc/W3z7fRPb/9b43ff92fb9625bc0cf59a822a6d63ca.png",
      title: "Gorf Mobile Holder",
      subtitle: "Grab Now"
    },
    {
      imgSrc: "https://i.postimg.cc/CKHtVptG/backlight.png",
      title: "Car Break light",
      subtitle: "45% OFF"
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
      imgSrc: "https://i.postimg.cc/CKHtVptG/backlight.png",
      title: "Car Break light",
      subtitle: "Shop Now!"
    },
    {
      imgSrc: "https://i.postimg.cc/CKHtVptG/backlight.png",
      title: "Car Break light",
      subtitle: "45% OFF"
    },
    {
      imgSrc: "https://i.postimg.cc/W3z7fRPb/9b43ff92fb9625bc0cf59a822a6d63ca.png",
      title: "Gorf Mobile Holder",
      subtitle: "Grab Now"
    }

    // Add more card data as needed
  ];
  

  return (

    <div style={{ overflow: "hidden" }}>
      {/* navbar */}
      <div>
        <NavbarComponent />
      </div>
      {/*  */}
      {/* carousel */}

      <center> <div className="carousel-container mt-5">
      <Slider {...settings}>
            {ads.map((ad) => (
              <div key={ad.id} className='slid'>
                <center>
                 <img className='mainimg' style={{width:"300px",height:"100px"}} src={ad.image} alt={ad.title || 'Advertisement'} />
                </center>
              </div>
            ))}
          </Slider>

      </div></center>
      {/*  */}

      {/* cards */}
      <Row className='mt-5  container-fluid'>
        <Col md={3} className='mmm'> 
          <Link to={'/bikes'} style={{textDecoration:"none"}}>
            <Card style={{ width: '20rem', padding: "20px", border: "1px solid white" }}>
            <Card.Img variant="top" src="https://i.postimg.cc/5yp8SnXW/bikee.jpg" />
            <Card.Body>
              <center> <Card.Title>Bike Spare</Card.Title></center>
  
            </Card.Body>
          </Card>
          </Link>
        </Col>
        <Col md={3} className='mmm'>
        <Link to={'/cars'} style={{textDecoration:"none"}}>
          <Card style={{ width: '20rem', padding: "20px", border: "1px solid white" }}>
            <Card.Img variant="top" src="https://i.postimg.cc/dQzFqw3d/lkkkkkkkkkkkkkkkkkkk.jpg" />
            <Card.Body>
              <center> <Card.Title>Car Spare</Card.Title></center>
            </Card.Body>
          </Card>
        </Link>
        </Col>
        <Col md={3} className='mmm'>
        <Link to={'/accessories'} style={{textDecoration:"none"}}>
          <Card style={{ width: '20rem', padding: "20px", border: "1px solid white" }}>
            <Card.Img variant="top" src="https://i.postimg.cc/02gTTnX0/a-llllllllllls.jpg" />
            <Card.Body>
              <center> <Card.Title>Accessories</Card.Title></center>
            </Card.Body>
          </Card>
        </Link>
        </Col>
        <Col md={3} className='mmm'>
        <Link to={'/addvehicle'} style={{textDecoration:"none"}}>
          <Card style={{ width: '20rem', padding: "20px", border: "1px solid white" }}>
            <Card.Img variant="top" src="https://i.postimg.cc/fTK88fGL/a-KMSSMLSssssaa.jpg" />
            <Card.Body>
              <center> <Card.Title>My Vehicles</Card.Title></center>
            </Card.Body>
          </Card>
        </Link>
        </Col>
      </Row>
      {/* search car */}
      <h3 className='ms-5 mt-5'>Search by Vehicle</h3>
      <div className="search-by-vehicle ">
        <form className="search-form">
          <select >
            <option value="">TATA</option>
            <option value="TATA">TATA</option>
          </select>
          <select >
            <option value="">INDIGO MARINA</option>
            <option value="INDIGO MARINA">INDIGO MARINA</option>
          </select>
          <select >
            <option value="">2006</option>
            <option value="2006">2006</option>
          </select>
          <select >
            <option value="">Select Modification</option>
          </select>
          <button type="submit" className="search-button">SEARCH PARTS</button>
        </form>
        <div className="search-by-number-plate">
          <input
            type="text"
            placeholder="KL07AA0564"
            className="number-plate-input"
          />
          <button type="button" className="number-plate-button">
            <span role="img" aria-label="search"><FaSearch /></span>
          </button>
        </div>
      </div>
      {/* categories */}
      <h3 className='ms-5'>Categories</h3>
      <div className="categories">

        {categories.map((category, index) => (
          <div className="category" key={index}>
            <div className="iconss">
              <img src={category.icon} alt={category.name} />
            </div>
            <div className="name">{category.name}</div>
          </div>
        ))}
      </div>
      
      {/*  */}

      {/* <div className="apps">
    <RecentlyViewedSection title="Recently Viewed" items={recentlyViewedItems} />
  </div> */}

      {/* Recently Viewed */}
      <div>
        <h3 className='ms-5'>Mega Offers</h3>
        <div className="scroll-container mt-5">
          <Row className='recviewed' style={{ flexWrap: 'nowrap', overflowX: 'auto' }}>
            <div className="scrolling-wrapper">
              {cards.map((card, index) => (
                <Col xs={6} sm={4} md={2} key={index} className="card-style">
                  <Card style={{ width: '12rem', padding: "14px", border: "1px solid white", boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)" }}>
                    <Card.Img variant="top" src={card.imgSrc} />
                    <Card.Body>
                      <center><Card.Title style={{ fontSize: "16px" }}>{card.title}</Card.Title></center>
                      <center><Card.Title style={{ fontSize: "18px" }}><b>{card.subtitle}</b></Card.Title></center>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </div>
          </Row>
        </div>

      </div>

      {/*  */}
      {/*   Top sales */}
      <div>
        <h3 className='ms-5 mt-5'>Top Sales</h3>
        <div>

          <div className="scroll-container mt-5 mb-5">
            <Row className='recviewed' style={{ flexWrap: 'nowrap', overflowX: 'auto' }}>
              <div className="scrolling-wrapper">
                {secondcards.map((card, index) => (
                  <Col xs={6} sm={4} md={2} key={index} className="card-style">
                    <Card style={{ width: '12rem', padding: "14px", border: "1px solid white", boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)" }}>
                      <Card.Img variant="top" src={card.imgSrc} />
                      <Card.Body>
                        <center><Card.Title style={{ fontSize: "16px" }}>{card.title}</Card.Title></center>
                        <center><Card.Title style={{ fontSize: "18px" }}><b>{card.subtitle}</b></Card.Title></center>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </div>
            </Row>
          </div>

        </div>

      </div>

      {/*  */}

    </div>
  )
}

export default Home
