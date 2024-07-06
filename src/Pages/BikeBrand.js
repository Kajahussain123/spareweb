// BikeBrand.js
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './BrandDetails.css';
import NavbarComponent from '../Components/Navbar';

const BikeBrand = () => {
  const { brandId } = useParams();
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const response = await fetch(`https://restframework.pythonanywhere.com/api/vehicles/main-category/2/brands/${brandId}/`);
        const data = await response.json();
        setBikes(data);
      } catch (error) {
        console.error('Failed to fetch bikes', error);
      }
    };

    fetchBikes();
  }, [brandId]);

  return (
    <div>
      <NavbarComponent />
      <div className="custom-bike-brand">
        <div className="custom-bike-list">
          {bikes.map((bike) => (
           <Link to={'/bikeyear'} key={bike.id} style={{textDecoration:"none"}}>
              <div className="custom-bike-card" key={bike.id}>
                <img src={bike.image} alt={bike.name} className="custom-bike-image" />
                <h3>{bike.name}</h3>
                {/* <p>Model Year: {bike.model_year}</p>
                <p>{bike.description}</p> */}
              </div>
           </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BikeBrand;
