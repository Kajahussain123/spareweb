import React from 'react';
import './BikeYears.css';
import NavbarComponent from '../Components/Navbar';
import { Link } from 'react-router-dom';

const BikeYear = () => {
    const years = [];
    for (let year = 1995; year <= 2024; year++) {
        years.push(year);
    }

    return (
        <div>
            <NavbarComponent></NavbarComponent>
            <div className="year-selection-container mt-5">
                {years.map((year) => (
                    <Link to={'/parts'} style={{textDecoration:"none"}}>
                        <div className="year-card" key={year}>
                            <a href="#">{year}</a>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BikeYear;
