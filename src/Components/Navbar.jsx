import React, { useState } from 'react';
import { FaSearch, FaBell, FaShoppingCart, FaUser, FaRegUserCircle } from 'react-icons/fa';
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import { IoCartOutline } from 'react-icons/io5';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { Dropdown } from 'react-bootstrap';
import { TbShoppingCartSearch } from 'react-icons/tb';
import { GoGift } from 'react-icons/go';
import { MdHelpOutline, MdOutlinePrivacyTip } from 'react-icons/md';
import { Link } from 'react-router-dom';
// Sample brand data
const brands = [
  { name: 'Yamaha', image: 'https://i.postimg.cc/j56FJ05Q/169ab3569288fe6fd95baca993df228f.png' },
  { name: ' Bajaj', image: 'https://i.postimg.cc/02N8GxSN/e68fa391d68f2559e4ca9f437ab17ba4.png' },
  { name: 'TVS', image: 'https://i.postimg.cc/MHM9xv4T/cde633f4f31c34f2605710f5adf9d758.png' },
  { name: 'Honda', image: 'https://i.postimg.cc/mgsWXszM/83582bddae1861e5bf21f827579ef543.png' },
  { name: 'Hero', image: 'https://i.postimg.cc/CM335g4t/cfd8d53c7bc539656278dc7464a54f82.png' },
  { name: 'Royal Enfield', image: 'https://i.postimg.cc/MK1hjFPG/5b2e77a6f5d0e167bb9c5ff71c04b32f.jpg' },
  { name: 'KTM', image: 'https://i.postimg.cc/jjS9mdsW/2a25526ba1eb8781249107c87d49f8bc.png' },
  { name: 'JAWA', image: 'https://i.postimg.cc/yxcrcDTG/aa00b9df2f3ed0d6ba51e809b6b94c88.png' },
];
const Carbrands = [
  { name: 'BMW', image: 'https://i.postimg.cc/pVs9MsYp/cf0f6b8b888dcfd4f5c679a4d95827ac.png' },
  { name: 'Volvo', image: 'https://pngimg.com/uploads/volvo/volvo_PNG73.png' },
  { name: 'Mercedes Benz', image: 'https://logodownload.org/wp-content/uploads/2014/04/mercedes-benz-logo-8.png' },
  { name: 'Honda', image: 'https://i.postimg.cc/mgsWXszM/83582bddae1861e5bf21f827579ef543.png' },
  { name: 'Ford', image: 'https://logospng.org/download/ford/logo-ford-4096.png' },
  { name: 'Maruthi', image: 'https://static.vecteezy.com/system/resources/previews/020/336/024/original/maruti-logo-maruti-icon-free-free-vector.jpg' },
  { name: 'PORSCHE', image: 'https://tse4.mm.bing.net/th?id=OIP.Xzq54f0st1bg4GxGOAkr0QHaHa&pid=Api&P=0&h=180' },
  { name: 'Audi', image: 'https://cdn4.iconfinder.com/data/icons/logo-cars/512/48.png' },
];
const BrandSuggestions = ({ show }) => {
  if (!show) return null;
  return (
    <div className="brand-suggestions">
    <div className="heading">
      <p>Bike Brands</p>
    </div>
    <div className="brand-list">
      {brands.map((brand, index) => (
        <div key={index} className="brand">
          <img src={brand.image} alt={brand.name} />
          <span>{brand.name}</span>
        </div>
      ))}
    </div>
    <div className="heading">
      <p>Car Brands</p>
    </div>
    <div className="brand-list">
      {Carbrands.map((Carbrands, index) => (
        <div key={index} className="brand">
          <img src={Carbrands.image} alt={Carbrands.name} />
          <span>{Carbrands.name}</span>
        </div>
      ))}
    </div>
  </div>
  );
};
const NavbarComponent = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const toggleSuggestions = () => {
    setShowSuggestions(!showSuggestions);
  };
  return (
    <Navbar className="custom-navbar">
      <div className="logo">
        <Link to={'/'} style={{textDecoration:"none"}}><img src="https://i.postimg.cc/5NQQSGvN/45150a17f2a2a1880c0f0e557fa24586.png" alt="Logo" /></Link>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <FaSearch className="search-icon" />
        <BrandSuggestions show={showSuggestions} />
      </div>
      <div className="icons">
        <IoMdNotificationsOutline className="icon" />
        <Link to={'/cart'} style={{textDecoration:"none"}}><IoCartOutline className="icon" /></Link>
        <Dropdown className="custom-dropdown">
          <Dropdown.Toggle as="div" id="dropdown-custom-components" className="icon">
            <FaRegUserCircle />
          </Dropdown.Toggle>
          <Dropdown.Menu align="end" className="custom-dropdown-menu">
            <Link to={'/profile'} style={{textDecoration:"none"}}><Dropdown.Item href="#/profile"> <FaRegUserCircle /> My Profile</Dropdown.Item></Link>
            <Link to={'/myorders'} style={{textDecoration:"none"}}><Dropdown.Item href="#/orders"><TbShoppingCartSearch /> Orders</Dropdown.Item></Link>
            <Dropdown.Item href="#/gift-cards"><GoGift /> Gift Cards</Dropdown.Item>
            <Link to={'/help'} style={{textDecoration:"none"}}><Dropdown.Item href="#/help-center"><MdHelpOutline /> Help Center</Dropdown.Item></Link>
            <Link to={'/privacy'} style={{textDecoration:"none"}}><Dropdown.Item href="#/privacy-policy"><MdOutlinePrivacyTip /> Privacy and Policy</Dropdown.Item></Link>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Navbar>
  );
};
export default NavbarComponent;