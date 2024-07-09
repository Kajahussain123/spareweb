import React from 'react';
import './Profile.css';
import UserSidebar from '../Components/UserSidebar'
import NavbarComponent from '../Components/Navbar';

function Profile() {
    return (
        <div>
            <NavbarComponent />
            <div className="profile-app mt-3">
                <main className='mainn'>
                    <UserSidebar />
                    <section className="profile-info-section">
                        <div className="profile-card profile-info-card">
                            <div className="profile-card-header">
                                <h2>Profile Information</h2>
                                <span className="profile-edit-link">Edit</span>
                            </div>
                            <form className='profile-mt-3'>
                                <div className="profile-form-row">
                                    <div className="profile-form-group">
                                        <input className='inputss' type="text" placeholder="First Name" />
                                    </div>
                                    <div className="profile-form-group">
                                        <input className='inputss' type="text" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="profile-form-group profile-last-input">
                                    <input className='inputss' type="email" placeholder="E-mail" />
                                </div>
                                <div className="profile-form-group profile-last-input">
                                    <input className='inputss' type="tel" placeholder="Mobile Number" />
                                </div>
                            </form>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default Profile;
