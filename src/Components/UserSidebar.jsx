import React, { useState } from 'react';
import './UserSidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLarge, faCreditCard } from '@fortawesome/free-solid-svg-icons';
function UserSidebar() {
  const [activeItem, setActiveItem] = useState('Profile Information');
  const handleClick = (itemName) => {
    setActiveItem(itemName);
  };
  return (
    <div>
      <aside>
        <div className="cardmk profile-card">
          <div className="profile-image-container">
            <img src="https://cdn.icon-icons.com/icons2/2550/PNG/512/user_circle_icon_152504.png" alt="Profile" />
          </div>
          <div className="profile-card-text">
            <h2>Hello,</h2>
            <h3>Robin Mahesh</h3>
          </div>
        </div>
        <div className="cardmk account-info-card">
          <div className="card-header">
            <FontAwesomeIcon style={{ color: "#235E5F" }} icon={faUserLarge} className="card-icon" />
            <h3>Account Information</h3>
          </div>
          <ul>
            <li className={activeItem === 'Profile Information' ? 'active' : ''}>
              <a href="profile" onClick={() => handleClick('Profile Information')}>Profile Information</a>
            </li>
            <li className={activeItem === 'Manage Addresses' ? 'active' : ''}>
              <a href="manageaddress" onClick={() => handleClick('Manage Addresses')}>Manage Addresses</a>
            </li>
          </ul>
        </div>
        <div className="cardmk payments-card">
          <div className="card-header">
            <FontAwesomeIcon style={{ color: "#235E5F" }} icon={faCreditCard} className="card-icon" />
            <h3>Payments</h3>
          </div>
          <ul>
            <li className={activeItem === 'Gift Card' ? 'active' : ''}>
              <a href="gift" onClick={() => handleClick('Gift Card')}>Gift Card</a>
            </li>
            <li className={activeItem === 'Redeem' ? 'active' : ''}>
              <a href="redeem" onClick={() => handleClick('Redeem')}>Redeem</a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
export default UserSidebar;