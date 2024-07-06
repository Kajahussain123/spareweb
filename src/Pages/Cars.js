// Cars.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Bikes.css';
import NavbarComponent from '../Components/Navbar';
import { carbrands } from '../services/allApi'; // Ensure this service is correctly implemented

const Cars = () => {
  const navigate = useNavigate();
  const [availableBrands, setAvailableBrands] = useState([]);
  const [evBrands, setEvBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await carbrands();
        if (response && Array.isArray(response.data)) {
          const allBrands = response.data;
          const evBrandsData = allBrands.filter(brand => brand.is_electric);
          const availableBrandsData = allBrands.filter(brand => !brand.is_electric);

          setAvailableBrands(availableBrandsData);
          setEvBrands(evBrandsData);
          console.log(response);
        } else {
          console.error('Unexpected response data format:', response);
          setAvailableBrands([]);
          setEvBrands([]);
        }
      } catch (error) {
        console.error('Failed to fetch car brands', error);
        setAvailableBrands([]);
        setEvBrands([]);
      }
    };

    fetchBrands();
  }, []);

  const handleBrandClick = (brandId) => {
    navigate(`/carbrand/${brandId}`);
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

export default Cars;
