import React from 'react';
import './Parts.css';
import NavbarComponent from '../Components/Navbar';
import { Link } from 'react-router-dom';

const Card = ({ icon, title }) => {
  return (
    <div className="cardlop">
      <div className="icon">{icon}</div>
      <div className="title">{title}</div>
    </div>
  );
};

const Parts = () => {
  const cardsData = [
    { icon: <span>Car icon</span>, title: 'Maintenance Service Parts' },
    { icon: <span>Air Conditioner icon</span>, title: 'Air Conditioning' },
    { icon: <span>Belts Chains and Rollers icon</span>, title: 'Belts Chains and Rollers' },
    { icon: <span>Bearings icon</span>, title: 'Bearings' },
    { icon: <span>Body icon</span>, title: 'Body' },
    { icon: <span>Control Cables icon</span>, title: 'Control Cables' },
    { icon: <span>Brake System icon</span>, title: 'Brake System' },
    { icon: <span>Car Accessories icon</span>, title: 'Car Accessories' },
    { icon: <span>Clutch System icon</span>, title: 'Clutch System' },
    { icon: <span>Electric Components icon</span>, title: 'Electric Components' },
  ];

  return (
    <div>
        <NavbarComponent></NavbarComponent>
        <div className="search-by-category">
          <h2>Search by Category</h2>
          <Link to={'/category'} style={{textDecoration:"none"}}>
              <div className="cards-container">
                {cardsData.map((card, index) => (
                  <Card key={index} icon={card.icon} title={card.title} />
                ))}
              </div>
          </Link>
        </div>
    </div>
  );
};

export default Parts;
