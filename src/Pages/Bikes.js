// Bikes.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Bikes.css';
import NavbarComponent from '../Components/Navbar';
import { bikebrands } from '../services/allApi';

const Bikes = () => {
  const navigate = useNavigate();
  const [availableBrands, setAvailableBrands] = useState([]);
  const [evBrands, setEvBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await bikebrands();
        const allBrands = response.data;

        const evBrandsData = allBrands.filter(brand => brand.is_electric);
        const availableBrandsData = allBrands.filter(brand => !brand.is_electric);

        setAvailableBrands(availableBrandsData);
        setEvBrands(evBrandsData);
      } catch (error) {
        console.error('Failed to fetch bike brands', error);
      }
    };

    fetchBrands();
  }, []);

  const handleBrandClick = (brandId) => {
    navigate(`/bikebrand/${brandId}`);
  };

  return (
    <div>
      <NavbarComponent />
      <div className="appmain">
        <main className="moi">
          <section className="brands">
            <h2 className="available">Available Brands</h2>
            <div className="brand-logos">
              {availableBrands.map((brand) => (
                <div key={brand.id} className="brand" onClick={() => handleBrandClick(brand.id)}>
                  <img src={brand.image}  />
                  <span>{brand.name}</span>
                </div>
              ))}
            </div>
          </section>
          <section className="brands">
            <h2 className="available">EV Brands</h2>
            <div className="brand-logos">
              {evBrands.map((brand) => (
                <div key={brand.id} className="brand" onClick={() => handleBrandClick(brand.id)}>
                  <img src={brand.image}  />
                  <span>{brand.name}</span>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Bikes;
