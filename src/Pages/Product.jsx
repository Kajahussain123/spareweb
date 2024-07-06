import React from 'react';
import './Product.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import NavbarComponent from '../Components/Navbar';
import { BiLike, BiSolidDislike } from 'react-icons/bi';

const Product = () => {

  const navigate = useNavigate()
  const settings = {
    customPaging: (i) => (
      <a >
        <img src={slides[i]} alt={`thumb-${i}`} />
      </a>
    ),
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };

  const slides = [
    'https://i.postimg.cc/QN1sj7fM/7872db2ba0005d90be7b14c52991cced.png',
    'https://i.postimg.cc/ZK728h3q/2b54b817015b2c63ac85c38db719856d.png',
    'https://i.postimg.cc/j53P8vhy/6ce8886fa1729357ec0a868a23e11110.png',
    'https://i.postimg.cc/TPYcCy6M/c95f5a3cf7f6b216db990e10c30033cb.png',
  ];

  const handleCartClick = () => {
    navigate('/cart');
  };
  const handleBuyClick = () => {
    navigate('/address');
  };
  

  return (
    <div style={{overflow:"hidden"}}>
      <NavbarComponent />
      <div className="product-container mt-5">
        <Row>
          <Col md={6}>
            <div className="carousel-container">
              <Slider {...settings}>
                {slides.map((slide, index) => (
                  <div key={index} className="carousel-slide">
                    <img src={slide} alt={`slide-${index}`} />
                  </div>
                ))}
              </Slider>
            </div>
          </Col>
          <Col md={6} className='col2'>
            <h4>Akrapovic Twin Tip Black Bike Exhaust</h4>
            <p className="brand">Akrapovic</p>
            <div className="price-section">
              <span className="price"><b>₹ 460.00</b></span>
              <span className="shipping"> - Free shipping</span>
            </div>
            <div className="rating-section">
              <span className="stars">⭐⭐⭐⭐⭐</span>
              <span className="rating ms-2">4.0</span>
              <Link className="review-count ms-2">See 17 reviews</Link>
            </div>
            <div className="product-options">
              <div style={{ display: 'flex' }}>
                <label htmlFor="quality">Quality</label>
                <select id="quality" className='ms-5 p-2' style={{ width: '50%' }}>
                  <option value="first">First Quality</option>
                  <option value="first">First Quality</option>
                </select>
              </div>
              <div style={{ display: 'flex' }}>
                <label htmlFor="color" className='mt-5'>Colour</label>
                <div className="color-options ms-5 mt-5">
                  <button className="color-option teal"></button>
                  <button className="color-option dark-blue"></button>
                  <button className="color-option red"></button>
                  <button className="color-option yellow"></button>
                </div>
              </div>
              <div style={{ display: 'flex' }}>
                <label htmlFor="quantity" className='mt-5'>Quantity</label>
                <div className="quantity-selector mt-5 ms-5">
                  <button className="quantity-button" style={{ color: 'white', backgroundColor: '#5c5c5c' }}>-</button>
                  <input type="number" id="quantity" value="1" readOnly />
                  <button className="quantity-button" style={{ color: 'white', backgroundColor: '#5c5c5c' }}>+</button>
                  <button className="quantity-button ms-5">-</button>
                  <input type="number" id="quantity" value="1" readOnly />
                  <button className="quantity-button">+</button>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex' }} className='mt-5 abbutton'>
              <button className="add-to-cart" onClick={handleCartClick}>Add to Cart</button>
              <button className="buy-now ms-2" onClick={handleBuyClick}>Buy Now</button>
            </div>
          </Col>
        </Row>

        <div className="product-details">
          <div className="product-description ms-2">
            <h4>Product Details</h4>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            </p>
            <ul className='ms-3'>
              <li>For Motorbike</li>
              <li>Crisscross Pattern</li>
              <li>Made of Aluminium, Rubber</li>
              <li>Inner Diameter: 2.2 cm</li>
            </ul>
          </div>

          <div className="ratings-reviews">
            <h4>Ratings & Reviews</h4>
            <div className="review-summary">
            <h1>  <span className="average-rating">4.0</span></h1>
            <span className="stars">⭐⭐⭐⭐⭐</span>
              <div className="review-bars">
                <div className="review-bar">
                  <span>4★</span>
                  <div className="bar"><div className="fill" style={{ width: '79%' }}></div></div><span className='ms-2'>79%</span>
                </div>
                <div className="review-bar">
                  <span>3★</span>
                  <div className="bar"><div className="fill2" style={{ width: '21%' }}></div></div><span className='ms-2'>21%</span>
                </div>
                <div className="review-bar">
                  <span>2★</span>
                  <div className="bar"><div className="fill3" style={{ width: '7%' }}></div></div><span className='ms-2'>7%</span>
                </div>
                <div className="review-bar">
                  <span>1★</span>
                  <div className="bar"><div className="fill4" style={{ width: '2%' }}></div></div><span className='ms-2'>2%</span>
                </div>
              </div>
            </div>
            <span>17 Customer rating and reviews</span>
            <hr />
            <div className="customer-review">
  <img src="https://s3-alpha-sig.figma.com/img/d5b9/041d/49a63ceccebe331ab8852746c08b7c77?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=krlxLfazmHy6qDNa6kwKFku1AgPEW66V8EzecS1eUlZMM-DbRxf9R-WiEYGXzorn7tN7EfenrgXdaq9P64B4ayUoYQdKaCv4yRaoCsSc8rFOH6FZut3fBn21crlP4xLFWj5YTgDhg6LH94Bme-s9kTw~4aJtLesuNyPJ22Z4UvDQRh6vWAPxLyBifN0qpfxZs62~x4BTgf3xHojPxm8NabfGJBM~mBoBW9eDAxrTkpVPRakBgpLBO48iEN7bb~3Lz-e6oUUKyrK4DHB00EP9zTFnhZAepqSo8Rm-qWl8K28V-NHKwid28~PJZxePpOm6Ro5ozLt~Dtn9PxZY2k1~7A__" alt="Reviewer" className="reviewer-image" />
  <div className="review-content">
    <div className="review-header">
      <span className="reviewer-name">Shinad Hasaan</span>
      <span className="review-date">23/08/2024</span>
    </div>
    <p className="review-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
    <div className="review-actions">
      <button className="like-button"><BiLike /> 28</button>
      <button className="dislike-button"><BiSolidDislike /> 4</button>
    </div>
  </div>

            </div>
            <hr className='mb-5' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;