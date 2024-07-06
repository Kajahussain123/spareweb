import React from 'react';
import './ManageAddress.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLarge, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import UserSidebar from './UserSidebar';
function ManageAddress() {
    return (
        <div className="app">
            <main>
               <UserSidebar/>
    <div className="manage-address-container">
      <div className="header">
        <h2>Manage Address</h2>
        <span className="edit-link">Edit</span>
      </div>
      <form className="address-form">
        <div className="radio-group">
          <label>
            <input type="radio" name="addressType" value="home" defaultChecked />
            Home
          </label>
          <label>
            <input type="radio" name="addressType" value="work" />
            Work
          </label>
        </div>
        <div className="form-row">
          <input type="text" placeholder="Phone Number" />
          <input type="text" placeholder="PIN Code" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="State" />
          <input type="text" placeholder="City" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="House No./ Building Name" />
          <input type="text" placeholder="Road name/ Area/ Colony" />
        </div>
        <input type="text" placeholder="Nearby famous shop/ Landmark" className="full-width" />
      </form>
    </div>
            </main>
        </div>
    );
}
export default ManageAddress;