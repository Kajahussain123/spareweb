import React, { useState } from 'react';
import './MyVehicle.css';
import NavbarComponent from '../Components/Navbar';
const MyVehicle = () => {
  const [formData, setFormData] = useState({
    numberPlate: '',
    carCompany: '',
    model: '',
    year: '',
    modification: '',
    vin: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };
  return (
    <div>
        <NavbarComponent></NavbarComponent>
        <div className="form-containersd">
          <h2 className='h2add'>Add Your Vehicle</h2>
          <form className='form12' onSubmit={handleSubmit}>
            <label className='label1' htmlFor="numberPlate">Find Car by number plate</label>
            <input
            className='input12'
              type="text"
              id="numberPlate"
              name="numberPlate"
              value={formData.numberPlate}
              onChange={handleChange}
            />
            <div className="or-divider">OR</div>
            <label className='label1' htmlFor="carCompany">Select Car Company</label>
            <input
            className='input12'
              type="text"
              id="carCompany"
              name="carCompany"
              value={formData.carCompany}
              onChange={handleChange}
            />
            <label className='label1' htmlFor="model">Select Model</label>
            <input
            className='input12'
              type="text"
              id="model"
              name="model"
              value={formData.model}
              onChange={handleChange}
            />
            <label className='label1' htmlFor="year">Select Year</label>
            <input
            className='input12'
              type="text"
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
            />
            <label className='label1' htmlFor="modification">Modification</label>
            <input
            className='input12'
              type="text"
              id="modification"
              name="modification"
              value={formData.modification}
              onChange={handleChange}
            />
            <label className='label1' htmlFor="vin">Enter VIN</label>
            <input
            className='input12'
              type="text"
              id="vin"
              name="vin"
              value={formData.vin}
              onChange={handleChange}
            />
            <button className='button1' type="submit">Save</button>
          </form>
        </div>
    </div>
  );
};
export default MyVehicle;

