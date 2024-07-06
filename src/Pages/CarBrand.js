// CarBrand.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BrandDetails.css'; // Reuse the same CSS file
import NavbarComponent from '../Components/Navbar';
import { Link } from 'react-router-dom';

const CarBrand = () => {
  const { brandId } = useParams();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(`https://restframework.pythonanywhere.com/api/vehicles/main-category/1/brands/${brandId}/`);
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error('Failed to fetch cars', error);
      }
    };

    fetchCars();
  }, [brandId]);

  return (
    <div>
      <NavbarComponent />
      <div className="custom-bike-brand">
        <div className="custom-bike-list">
          {cars.map((car) => (
            <Link to='/bikeyear' key={car.id} style={{ textDecoration: "none" }}>
              <div className="custom-bike-card">
                <img src={car.image} alt={car.name} className="custom-bike-image" />
                <h3>{car.name}</h3>
                {/* <p>Model Year: {car.model_year}</p>
                <p>{car.description}</p>
                <div className="custom-rating">
                  {'⭐'.repeat(Math.floor(car.rating))}<span>{car.rating}</span>
                </div> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarBrand;
