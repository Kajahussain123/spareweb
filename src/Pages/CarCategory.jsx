import React, { useEffect, useState } from 'react';
import './Parts.css';
import NavbarComponent from '../Components/Navbar';
import { Link } from 'react-router-dom';
import { CarCategories } from '../services/allApi';

const Card = ({ image, title }) => {
  return (
    <div className="cardlop">
      <div className="icon">
        <img src={image}style={{width:"100px",height:"100px"}} alt={title} />
      </div>
      <div className="title">{title}</div>
    </div>
  );
};



const CarCategory = () => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await CarCategories();
        setCardsData(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <NavbarComponent />
      <div className="search-by-category">
        <h2>Search by Category</h2>
          <div className="cards-container">
            {cardsData.map((card, index) => (
            <Link to={'/category'} style={{ textDecoration: 'none' }}>
              <Card key={index} image={card.image} title={card.name} />
            </Link>
            ))}
          </div>
      </div>
    </div>
  );
};

export default CarCategory;
